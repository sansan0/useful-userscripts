// ==UserScript==
// @name         claude-markdown-exporter
// @namespace    https://claude.ai/
// @version      2.12
// @description  一个用于导出 Claude AI 对话内容的增强版脚本。支持完整的对话导出，包括文本附件和图片附件
// @author       sansan
// @match        https://claude.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=claude.ai
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  function showNotification(textCount, imageCount) {
    if (textCount === 0 && imageCount === 0) return;

    const notification = document.createElement("div");
    notification.classList.add("custom-notification");
    notification.innerHTML = `
        <div class="custom-notification-content">
            <p class="custom-notification-title">附件统计：</p>
            <p class="custom-notification-stats">
                文本附件：${textCount} 个<br>
                图像附件：${imageCount} 个
            </p>
        </div>
    `;

    const notificationStyle = document.createElement("style");
    notificationStyle.textContent = `
        .custom-notification {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            font-family: Arial, sans-serif;
            z-index: 100000;
            max-width: 90%;
            box-sizing: border-box;
        }
        .custom-notification-content {
            margin: 0;
        }
        .custom-notification-title {
            margin: 0;
            font-size: 16px;
        }
        .custom-notification-stats {
            margin: 10px 0;
            font-size: 14px;
        }
    `;

    document.head.appendChild(notificationStyle);
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
      document.head.removeChild(notificationStyle);
    }, 5000);

    document.addEventListener("dblclick", function removeNotification(e) {
      if (!notification.contains(e.target)) {
        document.body.removeChild(notification);
        document.head.removeChild(notificationStyle);
        document.removeEventListener("click", removeNotification);
      }
    });
  }

  /**
   * 提取对话内容并转换为 Markdown 格式
   * @returns {Promise<string>} 转换后的 Markdown 内容
   */
  async function extractConversation() {
    let markdown = "# Conversation with Claude\n\n";
    const messages = document.querySelectorAll(
      ".font-claude-message, div.font-user-message"
    );
    let totalTextCount = 0;
    let totalImageCount = 0;
    for (const message of messages) {
      const isHuman = message.classList.contains("font-user-message");
      const role = isHuman ? "Human" : "Claude";

      const { attachments, textCount, imageCount } = await getAttachments(
        message
      );

      totalTextCount += textCount;
      totalImageCount += imageCount;
      if (attachments) {
        markdown += `### ${role}'s Attachments:\n\n${attachments}\n\n`;
      }

      markdown += `## ${role}:\n\n`;

      if (isHuman) {
        markdown += processContent(message);
      } else {
        const gridElements = message.querySelectorAll(".grid-cols-1");
        let claudeContent = "";

        gridElements.forEach((element) => {
          claudeContent += processContent(element);
        });

        markdown += claudeContent;
      }
      markdown += "\n";
    }

    showNotification(totalTextCount, totalImageCount);
    return markdown;
  }

  /**
   * 获取消息前的附件内容
   * @param {Element} message - 消息元素
   * @returns {Promise<{attachments: string|null, textCount: number, imageCount: number}>} 附件内容、文本附件数量和图像附件数量
   */
  async function getAttachments(message) {
    let parent = message;
    while (
      parent &&
      (!parent.classList.contains("mb-1") || !parent.classList.contains("mt-1"))
    ) {
      parent = parent.parentElement;
      if (!parent) break;
    }

    if (!parent) {
      return { attachments: null, textCount: 0, imageCount: 0 };
    }

    const childDivs = Array.from(parent.children).filter(
      (child) => child.tagName === "DIV"
    );
    if (childDivs.length < 2) {
      return { attachments: null, textCount: 0, imageCount: 0 };
    }

    const attachmentsDiv = childDivs[0];

    const attachmentDivs = Array.from(attachmentsDiv.children).filter(
      (child) => child.tagName === "DIV"
    );
    if (attachmentDivs.length === 0) {
      return { attachments: null, textCount: 0, imageCount: 0 };
    }

    const attachments = [];
    let textCount = 0;
    let imageCount = 0;

    for (const attachmentDiv of attachmentDivs) {
      const fileElement = attachmentDiv.querySelector(
        '[data-testid="file-thumbnail"]'
      );
      if (fileElement) {
        const textAttachment = await processTextAttachment(fileElement);
        if (textAttachment) {
          textCount++;
          attachments.push(`附件${textCount}(文本):\n\n${textAttachment}`);
        }
      } else {
        const imgElement = attachmentDiv.querySelector("img[src]");
        if (imgElement) {
          const imageAttachment = await processImageAttachment(imgElement);
          if (imageAttachment) {
            imageCount++;
            attachments.push(
              `附件${textCount + imageCount}(图片):\n\n${imageAttachment}`
            );
          }
        }
      }
    }

    return {
      attachments: attachments.length > 0 ? attachments.join("\n\n") : null,
      textCount,
      imageCount,
    };
  }

  async function processTextAttachment(fileElement) {
    fileElement.click();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const popupContent = document.querySelector(
      "div.overflow-y-auto.whitespace-pre-wrap"
    );

    if (popupContent) {
      const content = `\`\`\`\n${popupContent.textContent.trim()}\n\`\`\``;

      setTimeout(() => {
        const closeButton = document.querySelector(
          "div.flex.items-center > h2.font-styrene-display + button"
        );
        if (closeButton) {
          closeButton.click();
        }
      }, 1000);

      return content;
    }

    return null;
  }

  async function processImageAttachment(imgElement) {
    if (imgElement && imgElement.hasAttribute("src")) {
      const imgSrc = imgElement.getAttribute("src");
      const imgWidth = imgElement.getAttribute("width") || "100";
      const imgHeight = imgElement.getAttribute("height") || "100";

      try {
        const response = await fetch(imgSrc);
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        return `![Image](${base64}){width=${imgWidth} height=${imgHeight}}`;
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
    return null;
  }

  /**
   * 将 Blob 对象转换为 Base64 编码的字符串
   * @param {Blob} blob - Blob 对象
   * @returns {Promise<string>} Base64 编码的字符串
   */
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * 处理消息内容,将其转换为 Markdown 格式
   * @param {Element} element - 要处理的 HTML 元素
   * @param {number} depth - 当前处理的嵌套深度
   * @returns {string} 转换后的 Markdown 内容
   */
  function processContent(element, depth = 0) {
    let markdown = "";
    const children = element.childNodes;

    for (let child of children) {
      if (child.nodeType === Node.TEXT_NODE) {
        markdown += child.textContent;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        switch (child.tagName) {
          case "P":
            markdown += processInlineElements(child) + "\n\n";
            break;
          case "OL":
            markdown += processList(child, "ol", depth) + "\n";
            break;
          case "UL":
            markdown += processList(child, "ul", depth) + "\n";
            break;
          case "PRE":
            {
              const codeBlock = child.querySelector(".code-block__code");
              if (codeBlock) {
                const language =
                  codeBlock.className.match(/language-(\w+)/)?.[1] || "";
                markdown +=
                  "```" +
                  language +
                  "\n" +
                  codeBlock.textContent.trim() +
                  "\n```\n\n";
              }
            }
            break;
          default:
            markdown += processInlineElements(child) + "\n\n";
        }
      }
    }

    return markdown;
  }

  /**
   * 处理列表元素,将其转换为 Markdown 格式
   * @param {Element} listElement - 要处理的列表元素
   * @param {string} listType - 列表类型,'ol' 表示有序列表,'ul' 表示无序列表
   * @param {number} depth - 当前处理的嵌套深度
   * @returns {string} 转换后的 Markdown 内容
   */
  function processList(listElement, listType, depth = 0) {
    let markdown = "";
    const items = listElement.children;
    const indent = "  ".repeat(depth);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const prefix = listType === "ol" ? `${i + 1}. ` : "- ";
      markdown += `${indent}${prefix}${processInlineElements(item).trim()}\n`;

      const nestedLists = item.querySelectorAll(":scope > ol, :scope > ul");
      for (let nestedList of nestedLists) {
        markdown += processList(
          nestedList,
          nestedList.tagName.toLowerCase(),
          depth + 1
        );
      }
    }

    return markdown;
  }

  /**
   * 处理内联元素,将其转换为 Markdown 格式
   * @param {Element} element - 要处理的 HTML 元素
   * @returns {string} 转换后的 Markdown 内容
   */
  function processInlineElements(element) {
    let markdown = "";
    const children = element.childNodes;

    for (let child of children) {
      if (child.nodeType === Node.TEXT_NODE) {
        markdown += child.textContent;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName === "CODE") {
          markdown += "`" + child.textContent + "`";
        } else if (child.tagName === "OL" || child.tagName === "UL") {
          continue;
        } else {
          markdown += processInlineElements(child);
        }
      }
    }

    return markdown;
  }

  /**
   * 下载 Markdown 文件
   * @param {string} content - 要下载的 Markdown 内容
   * @param {string} filename - 下载文件的名称
   */
  function downloadMarkdown(content, filename) {
    const blob = new Blob([content], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * 添加下载对话内容的按钮
   */
  function addButton() {
    const button = document.createElement("button");
    updateButtonText(button);
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.right = "10px";
    button.style.zIndex = "1000";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "#FFF";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.onclick = async function () {
      try {
        showNotification(0, 0);
        const conversationMarkdown = await extractConversation();
        const titleElement = document.querySelector(
          ".font-tiempos.truncate.font-normal.tracking-tight"
        );
        const versionElement = document.querySelector(
          ".whitespace-nowrap.tracking-tight"
        );

        let filename = "claude_conversation.md";

        if (titleElement || versionElement) {
          let namePart = "";

          if (typeof unsafeWindow.name !== "undefined") {
            namePart = unsafeWindow.name;
          } else if (titleElement) {
            namePart = titleElement.textContent.trim();
          }

          let versionPart = "";

          if (typeof unsafeWindow.model !== "undefined") {
            versionPart = unsafeWindow.model;
          } else if (versionElement) {
            versionPart = versionElement.textContent.trim();
          }

          let createdAtPart =
            typeof unsafeWindow.createdAt !== "undefined"
              ? `_${unsafeWindow.createdAt}`
              : "";
          let updatedAtPart =
            typeof unsafeWindow.updatedAt !== "undefined"
              ? `_${unsafeWindow.updatedAt}`
              : "";

          filename = `${versionPart}${
            namePart ? `_${namePart}` : ""
          }${createdAtPart}${updatedAtPart}.md`;
        }

        downloadMarkdown(conversationMarkdown, filename);
      } catch (error) {
        console.error("Error in button click handler:", error);
      }
    };

    let prevMessageCount =
      document.querySelectorAll(".font-user-message").length;

    setInterval(() => {
      const currentMessageCount =
        document.querySelectorAll(".font-user-message").length;
      if (currentMessageCount !== prevMessageCount) {
        prevMessageCount = currentMessageCount;
        updateButtonText(button);
      }
    }, 1000);

    document.body.appendChild(button);
  }

  function updateButtonText(button) {
    const messageThreads = document.querySelectorAll(
      "[data-test-render-count]"
    );
    const messageCount = messageThreads.length / 2;
    button.innerText = `${messageCount} Download Conversation`;
  }

  function setupRequestMonitoring() {
    const urlPattern =
      /\/api\/organizations\/[a-f0-9-]{36}\/chat_conversations\/[a-f0-9-]{36}\?tree=True&rendering_mode=messages&render_all_tools=true$/;

    // 创建日期格式化辅助函数
    function formatDateTime(dateString, includeUnderscore = true) {
      const options = {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      let formatted = new Date(dateString)
        .toLocaleString("zh-CN", options)
        .replace(/\//g, "-");

      return includeUnderscore ? formatted.replace(",", "_") : formatted;
    }

    const originalFetch = unsafeWindow.fetch;
    unsafeWindow.fetch = async function (...args) {
      const [resource, config] = args;
      if (config && config.method === "GET" && urlPattern.test(resource)) {
        const response = await originalFetch.apply(this, args);
        const responseClone = response.clone();

        responseClone
          .json()
          .then((json) => {
            // 使用辅助函数处理日期
            unsafeWindow.createdAt = formatDateTime(json.created_at);
            unsafeWindow.updatedAt = formatDateTime(json.updated_at);
            unsafeWindow.model = json.model;
            unsafeWindow.name = json.name;

            if (json.chat_messages && Array.isArray(json.chat_messages)) {
              const attemptProcessMessages = (
                retryCount = 0,
                maxRetries = 10
              ) => {
                const messages = document.querySelectorAll(
                  ".font-claude-message, div.font-user-message"
                );

                if (messages.length === json.chat_messages.length) {
                  document
                    .querySelectorAll(".message-time")
                    .forEach((el) => el.remove());

                  messages.forEach((messageElement, index) => {
                    const messageTime = json.chat_messages[index].created_at;
                    if (!messageTime) {
                      console.error("No created_at time for message:", index);
                      return;
                    }

                    // 消息时间不需要下划线替换
                    const messageCreatedAt = formatDateTime(messageTime, false);

                    const timeElement = document.createElement("div");
                    timeElement.className = "message-time";
                    timeElement.textContent = messageCreatedAt;
                    timeElement.style.cssText = `
                                    font-size: 12px;
                                    color: #666;
                                    margin-top: 5px;
                                    text-align: right;
                                    padding-right: 10px;
                                    font-family: Arial, sans-serif;
                                `;

                    const isHuman =
                      messageElement.classList.contains("font-user-message");
                    if (isHuman) {
                      messageElement.insertBefore(
                        timeElement,
                        messageElement.firstChild
                      );
                    } else {
                      messageElement.appendChild(timeElement);
                    }
                  });
                } else if (retryCount < maxRetries) {
                  setTimeout(
                    () => attemptProcessMessages(retryCount + 1, maxRetries),
                    500
                  );
                } else {
                  console.error(
                    "Failed to add timestamps after maximum retries"
                  );
                }
              };

              attemptProcessMessages();
            }
          })
          .catch((error) => {
            console.error("Error processing response:", error);
          });

        return response;
      }

      return originalFetch.apply(this, args);
    };
  }

  setupRequestMonitoring();

  window.addEventListener("load", () => {
    addButton();
  });
})();
