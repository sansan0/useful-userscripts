// ==UserScript==
// @name           claude-markdown-exporter
// @namespace      https://github.com/sansan0/useful-userscripts
// @version        2.0
// @description    一个用于导出 Claude AI 对话内容的增强版脚本。支持完整的对话导出，包括文本附件和图片附件
// @author         sansan
// @match          https://claude.ai/*
// @license        GPL-3.0 License
// @icon           data:image/png;base64,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
// ==/UserScript==

(function () {
  "use strict";

  /**
   * 显示附件统计的弹窗通知
   * @param {number} textCount - 文本附件数量
   * @param {number} imageCount - 图片附件数量
   */
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
   * 提取对话内容并转换为Markdown格式
   * @returns {Promise<string>} 返回转换后的Markdown内容
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
      markdown += processContent(
        isHuman ? message : message.querySelector(".grid-cols-1")
      );
      markdown += "\n";
    }

    showNotification(totalTextCount, totalImageCount);
    return markdown;
  }

  /**
   * 获取消息中的附件内容
   * @param {Element} message - 消息元素
   * @returns {Promise<{attachments: string|null, textCount: number, imageCount: number}>} 返回附件内容及统计信息
   */
  async function getAttachments(message) {
    let parent = message.parentElement;
    while (parent && !parent.hasAttribute("data-test-render-count")) {
      parent = parent.parentElement;
    }

    if (!parent) {
      return { attachments: null, textCount: 0, imageCount: 0 };
    }

    const attachmentElements = parent.querySelectorAll(
      '[data-testid="file-thumbnail"]'
    );
    if (attachmentElements.length === 0) {
      return { attachments: null, textCount: 0, imageCount: 0 };
    }

    const attachments = [];
    let textCount = 0;
    let imageCount = 0;

    for (const attachmentElement of attachmentElements) {
      const parentDiv = attachmentElement.closest("div[data-testid]");
      if (parentDiv && parentDiv.getAttribute("data-testid").endsWith(".txt")) {
        const textAttachment = await processTextAttachment(attachmentElement);
        if (textAttachment) {
          textCount++;
          attachments.push(`附件${textCount}(文本):\n\n${textAttachment}`);
        }
      } else {
        const imageAttachment = await processImageAttachment(attachmentElement);
        if (imageAttachment) {
          imageCount++;
          attachments.push(
            `附件${textCount + imageCount}(图片):\n\n${imageAttachment}`
          );
        }
      }
    }

    return {
      attachments: attachments.join("\n\n"),
      textCount,
      imageCount,
    };
  }

  /**
   * 处理文本类型附件
   * @param {Element} attachmentElement - 附件元素
   * @returns {Promise<string|null>} 返回处理后的文本内容
   */
  async function processTextAttachment(attachmentElement) {
    attachmentElement.click();
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

  /**
   * 处理图片类型附件
   * @param {Element} pasteElement - 图片元素
   * @returns {Promise<string|null>} 返回处理后的图片Markdown
   */
  async function processImageAttachment(pasteElement) {
    const imgElement = pasteElement.previousElementSibling;
    if (
      imgElement &&
      imgElement.hasAttribute("loading") &&
      imgElement.getAttribute("loading") === "eager"
    ) {
      const imgSrc = imgElement.getAttribute("src");
      const imgWidth = imgElement.getAttribute("width");
      const imgHeight = imgElement.getAttribute("height");

      try {
        const response = await fetch(imgSrc);
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        return `![Image](${base64}){width=${imgWidth} height=${imgHeight}}`;
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  /**
   * 将Blob对象转换为Base64编码字符串
   * @param {Blob} blob - 要转换的Blob对象
   * @returns {Promise<string>} 返回Base64编码的字符串
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
   * 处理内容元素，将HTML转换为Markdown格式
   * @param {Element} element - 要处理的HTML元素
   * @param {number} depth - 递归深度
   * @returns {string} 返回Markdown格式的内容
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
   * 处理列表元素，将其转换为Markdown格式
   * @param {Element} listElement - 列表元素
   * @param {string} listType - 列表类型（'ol'或'ul'）
   * @param {number} depth - 缩进深度
   * @returns {string} 返回Markdown格式的列表
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
   * 处理内联元素，转换为Markdown格式
   * @param {Element} element - HTML元素
   * @returns {string} 返回处理后的Markdown文本
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
   * 下载Markdown文件
   * @param {string} content - Markdown内容
   * @param {string} filename - 文件名
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
   * 添加下载按钮到页面
   */
  function addButton() {
    const button = document.createElement("button");
    button.innerText = "Download Conversation";
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
        const filename =
          titleElement && versionElement
            ? "claude_" +
              versionElement.textContent.trim() +
              "_" +
              titleElement.textContent.trim() +
              ".md"
            : "claude_conversation.md";
        downloadMarkdown(conversationMarkdown, filename);
      } catch (error) {}
    };
    document.body.appendChild(button);
  }

  window.addEventListener("load", addButton);
})();
