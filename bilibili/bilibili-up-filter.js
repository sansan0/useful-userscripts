// ==UserScript==
// @name           bilibili-up-filter
// @namespace      https://github.com/sansan0/useful-userscripts
// @version        2.1
// @description    一个用于B站的用户脚本，提供快速屏蔽和管理UP主内容的功能，以及便捷的UP主访问方式
// @author         sansan
// @match          https://www.bilibili.com/*
// @grant          GM_addStyle
// @license        GPL-3.0 License
// @icon           data:image/png;base64,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
// ==/UserScript==

(function () {
  "use strict";

  if (window !== window.top) {
    return;
  }

  /**
   * 样式定义
   * 包含了所有UI组件的样式：复选框、提示框、动画等
   */
  GM_addStyle(`
  /* 基础按钮样式 */
  .id-block-toggle,
  .blocked-ups-toggle,
  .following-toggle {
      position: fixed;
      right: 10px;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
      box-sizing: border-box;
      transition: all 0.3s ease;
      color: white;
  }

  /* ID屏蔽按钮特定样式 */
  .id-block-toggle {
      top: calc(50% - 80px);
      background: #9254de;
  }

  .id-block-toggle:hover {
      background: #a872e8;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  /* 已屏蔽按钮特定样式 */
  .blocked-ups-toggle {
      top: 50%;
      transform: translateY(-50%);
      background: #00aeec;
  }

  .blocked-ups-toggle:hover {
      background: #0095cc;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  /* 关注者按钮特定样式 */
  .following-toggle {
      top: calc(50% + 40px);
      background: #FB7299;
  }

  .following-toggle:hover {
      background: #fc8bab;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  /* ID屏蔽输入框样式 */
  .id-block-input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(146, 84, 222, 0.9);
      border: none;
      color: white;
      padding: 10px;
      border-radius: 8px;
      outline: none;
      display: none;
      font-size: 14px;
      box-sizing: border-box;
  }

  .id-block-input::placeholder {
      color: rgba(255, 255, 255, 0.8);
  }

  .id-block-toggle.input-mode .id-block-input {
      display: block;
  }

  .id-block-toggle.input-mode span {
      opacity: 0;
  }

  /* 隐藏状态样式 */
  .id-block-toggle.hide,
  .blocked-ups-toggle.hide,
  .following-toggle.hide {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
  }

  /* 复选框样式 */
  .block-checkbox {
      position: absolute;
      top: -40px;
      bottom: auto;
      left: 0;
      background: white;
      padding: 6px 10px;
      border: 1px solid #e3e5e7;
      border-radius: 6px;
      display: none;
      z-index: 10;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      font-size: 13px;
      color: #18191c;
      width: 130px;
      white-space: nowrap;
      box-sizing: border-box;
      pointer-events: auto;
  }

  .bili-video-card__info--owner {
      position: relative;
      z-index: 9;
  }

  .block-checkbox:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .block-checkbox label {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
  }

  .block-checkbox input[type="checkbox"] {
      flex-shrink: 0;
      appearance: none;
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #c9ccd0;
      border-radius: 3px;
      margin-right: 6px;
      position: relative;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 0;
  }

  .block-checkbox input[type="checkbox"]:checked {
      background-color: #00aeec;
      border-color: #00aeec;
  }

  .block-checkbox input[type="checkbox"]:checked::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 1px;
      width: 5px;
      height: 9px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
  }

  .block-checkbox input[type="checkbox"]:hover {
      border-color: #00aeec;
  }

  .block-checkbox input[type="checkbox"]:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0,174,236,0.2);
  }

  .block-checkbox input[type="checkbox"]:disabled {
      background-color: #f5f5f5;
      border-color: #e0e0e0;
      cursor: not-allowed;
  }

  .block-checkbox label span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      letter-spacing: 0.3px;
  }

  /* 提示框样式 */
  .toast-notification {
      position: fixed;
      top: 16px;
      right: 16px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 9999999;
      font-size: 14px;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: none;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .toast-notification.show {
      opacity: 1;
      transform: translateX(0);
  }

  .toast-notification.hide {
      opacity: 0;
      transform: translateX(100%);
  }

  .toast-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
  }

  .toast-block { color: #ff6b6b; }
  .toast-unblock { color: #69db7c; }

  /* 动画效果 */
  @keyframes fadeInUp {
      from {
          opacity: 0;
          transform: translateY(5px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  @keyframes fadeOutDown {
      from {
          opacity: 1;
          transform: translateY(0);
      }
      to {
          opacity: 0;
          transform: translateY(5px);
      }
  }

  .block-checkbox.show {
      animation: fadeInUp 0.3s ease forwards;
  }

  .block-checkbox.hide {
      animation: fadeOutDown 0.3s ease forwards;
  }

  /* 面板样式 */
  .blocked-ups-panel,
  .following-panel {
      position: fixed;
      right: -350px;
      top: 0;
      width: 320px;
      height: 100vh;
      background: white;
      box-shadow: -2px 0 8px rgba(0,0,0,0.1);
      z-index: 9998;
      transition: right 0.3s ease;
      display: flex;
      flex-direction: column;
  }

  .blocked-ups-panel.show,
  .following-panel.show {
      right: 0;
  }

  .blocked-ups-header {
      padding: 16px;
      background: #f6f7f8;
      border-bottom: 1px solid #e3e5e7;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .blocked-ups-list {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
  }

  .blocked-up-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #f0f1f2;
      transition: background-color 0.2s ease;
  }

  .blocked-up-item:hover {
      background-color: #f6f7f8;
  }

  .blocked-up-info {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #18191c;
      text-decoration: none;
      margin-right: 10px;
  }

  .blocked-up-remove {
      padding: 4px 8px;
      border: none;
      background: #ff6b6b;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 8px;
      transition: background-color 0.2s ease;
  }

  .blocked-up-remove:hover {
      background: #ff5252;
  }

  .follow-time {
      color: #99a2aa;
      font-size: 12px;
      margin-left: auto;
      padding-left: 10px;
      white-space: nowrap;
  }

  /* 滚动条样式 */
  .blocked-ups-list::-webkit-scrollbar {
      width: 6px;
  }

  .blocked-ups-list::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  .blocked-ups-list::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 3px;
  }

  .blocked-ups-list::-webkit-scrollbar-thumb:hover {
      background: #a0a0a0;
  }

  /* 移除动画 */
  @keyframes removeItem {
      0% {
          opacity: 1;
          transform: translateX(0);
      }
      100% {
          opacity: 0;
          transform: translateX(100%);
          height: 0;
          padding: 0;
          margin: 0;
      }
  }

  .blocked-up-item.removing {
      animation: removeItem 0.3s ease-out forwards;
      overflow: hidden;
  }

  /* Toast动画 */
  @keyframes toastIn {
      from {
          transform: translateX(100%);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }

  @keyframes toastOut {
      from {
          transform: translateX(0);
          opacity: 1;
      }
      to {
          transform: translateX(100%);
          opacity: 0;
      }
  }

  .toast-notification.show {
      animation: toastIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .toast-notification.hide {
      animation: toastOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`);

  const BLOCKED_UPS_KEY = "blocked_up_users";
  const TOAST_DISPLAY_DURATION = 2000;
  const TOAST_ANIMATION_DURATION = 300;
  const HOVER_DELAY = 100;

  /**
   * 显示操作提示框
   * @param {string} upName - UP主昵称
   * @param {boolean} isBlocking - true表示屏蔽操作，false表示取消屏蔽
   */
  function showToast(upName, isBlocking) {
    const existingToast = document.querySelector(".toast-notification");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.className = "toast-notification";
    const icon = isBlocking ? "🚫" : "✅";
    const action = isBlocking ? "已屏蔽" : "已取消屏蔽";

    toast.innerHTML = `
          <span class="toast-icon ${
            isBlocking ? "toast-block" : "toast-unblock"
          }">${icon}</span>
          <span>${action} UP主：${upName}</span>
      `;

    document.body.appendChild(toast);
    toast.offsetHeight;
    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), TOAST_ANIMATION_DURATION);
    }, TOAST_DISPLAY_DURATION);
  }

  /**
   * 从localStorage获取被屏蔽的UP主列表
   * @returns {Array} 返回被屏蔽UP主的数组，每个元素包含id和name
   */
  function getBlockedUps() {
    try {
      const blockedUps = localStorage.getItem(BLOCKED_UPS_KEY);
      return blockedUps ? JSON.parse(blockedUps) : [];
    } catch (error) {
      console.error("Error getting blocked UPs:", error);
      return [];
    }
  }

  /**
   * 添加UP主到屏蔽列表
   * @param {string} upId - UP主的ID
   * @param {string} upName - UP主的昵称
   */
  function addBlockedUp(upId, upName) {
    const blockedUps = getBlockedUps();
    const existingIndex = blockedUps.findIndex((up) => up.id === upId);

    if (existingIndex > -1 && !blockedUps[existingIndex].name) {
      blockedUps[existingIndex].name = upName;
    } else if (existingIndex === -1) {
      blockedUps.push({ id: upId, name: upName });
    }

    localStorage.setItem(BLOCKED_UPS_KEY, JSON.stringify(blockedUps));

    if (document.body.hasAttribute("data-panel-initialized")) {
      updateBlockedUpsList();
    }
  }

  /**
   * 从屏蔽列表中移除指定UP主
   * @param {string} upId - 需要移除的UP主ID
   */
  function removeBlockedUp(upId) {
    const blockedUps = getBlockedUps();
    const filteredUps = blockedUps.filter((up) => up.id !== upId);
    localStorage.setItem(BLOCKED_UPS_KEY, JSON.stringify(filteredUps));

    if (document.body.hasAttribute("data-panel-initialized")) {
      updateBlockedUpsList();
    }
  }

  /**
   * 更新被屏蔽UP主列表显示
   */
  function updateBlockedUpsList() {
    const panel = document.querySelector(".blocked-ups-panel");
    const listContainer = panel?.querySelector(".blocked-ups-list");
    if (!listContainer) return;

    const blockedUps = getBlockedUps();
    const reversedUps = [...blockedUps].reverse();

    listContainer.innerHTML = reversedUps
      .map(
        (up) => `
          <div class="blocked-up-item" data-up-id="${up.id}">
              <a href="https://space.bilibili.com/${up.id}"
                 target="_blank"
                 class="blocked-up-info">
                  ${up.name || `ID: ${up.id}`}
              </a>
              <button class="blocked-up-remove">移除</button>
          </div>
      `
      )
      .join("");

    const toggleButton = document.querySelector(".blocked-ups-toggle");
    if (toggleButton) {
      toggleButton.querySelector("span:last-child").textContent =
        blockedUps.length;
    }

    const countElement = panel.querySelector(".blocked-count");
    if (countElement) {
      countElement.textContent = blockedUps.length;
    }
  }

  /**
   * 更新所有相关复选框的状态
   * @param {string} upId - UP主ID
   */
  function updateCheckboxStatus(upId) {
    document
      .querySelectorAll(".bili-video-card__info--owner")
      .forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        const currentUpId = href.match(/\/(\d+)$/)?.[1];
        if (currentUpId === upId) {
          const checkbox = link.querySelector(
            '.block-checkbox input[type="checkbox"]'
          );
          if (checkbox) {
            checkbox.checked = false;
          }
        }
      });
  }

  /**
   * 创建UP主屏蔽控制的复选框
   * @param {string} upId - UP主ID
   * @param {string} upName - UP主昵称
   * @returns {HTMLElement} 返回创建的复选框元素
   */
  function createCheckbox(upId, upName) {
    const checkbox = document.createElement("div");
    checkbox.className = "block-checkbox";
    const isBlocked = getBlockedUps().some((up) => up.id === upId);

    checkbox.innerHTML = `
          <label>
              <input type="checkbox" ${isBlocked ? "checked" : ""}>
              <span>屏蔽该UP主</span>
          </label>
      `;

    const input = checkbox.querySelector("input");
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        addBlockedUp(upId, upName);
        showToast(upName, true);
      } else {
        removeBlockedUp(upId);
        updateCheckboxStatus(upId);
        showToast(upName, false);
      }
      filterBlockedContent();
    });

    return checkbox;
  }
  /**
   * 处理UP主链接的鼠标悬停事件
   * @param {HTMLElement} element - UP主链接元素
   */
  function handleHover(element) {
    const href = element.getAttribute("href");
    if (!href) return;

    const upId = href.match(/\/(\d+)$/)?.[1];
    if (!upId) return;

    const authorSpan = element.querySelector(".bili-video-card__info--author");
    const upName = authorSpan?.getAttribute("title") || "未知UP主";

    let checkbox = element.querySelector(".block-checkbox");
    if (!checkbox) {
      checkbox = createCheckbox(upId, upName);
      element.style.position = "relative";
      element.appendChild(checkbox);
    } else {
      const input = checkbox.querySelector('input[type="checkbox"]');
      const isBlocked = getBlockedUps().some((up) => up.id === upId);
      input.checked = isBlocked;
    }

    let hideTimeout;
    let isOverElement = false;
    let isOverCheckbox = false;

    const showCheckbox = () => {
      checkbox.style.display = "block";
      requestAnimationFrame(() => {
        checkbox.style.opacity = "1";
        checkbox.style.transform = "translateY(0)";
      });
    };

    const hideCheckbox = () => {
      checkbox.style.opacity = "0";
      checkbox.style.transform = "translateY(5px)";
      hideTimeout = setTimeout(() => {
        checkbox.style.display = "none";
      }, TOAST_ANIMATION_DURATION);
    };

    const checkVisibility = () => {
      setTimeout(() => {
        if (!isOverElement && !isOverCheckbox) {
          hideCheckbox();
        }
      }, HOVER_DELAY);
    };

    element.addEventListener("mouseenter", () => {
      isOverElement = true;
      clearTimeout(hideTimeout);
      showCheckbox();
    });

    element.addEventListener("mouseleave", () => {
      isOverElement = false;
      checkVisibility();
    });

    checkbox.addEventListener("mouseenter", () => {
      isOverCheckbox = true;
      clearTimeout(hideTimeout);
    });

    checkbox.addEventListener("mouseleave", () => {
      isOverCheckbox = false;
      checkVisibility();
    });

    element.setAttribute("data-hover-initialized", "true");
  }

  /**
   * 过滤并移除被屏蔽UP主的内容
   */
  function filterBlockedContent() {
    document
      .querySelectorAll(".floor-single-card, .bili-live-card")
      .forEach((card) => card.remove());

    const blockedUps = getBlockedUps();
    const filteredUps = new Set();

    document
      .querySelectorAll(".bili-video-card__info--owner")
      .forEach((link) => {
        const upId = link.getAttribute("href")?.match(/\/(\d+)$/)?.[1];
        if (upId && blockedUps.some((up) => up.id === upId)) {
          const authorSpan = link.querySelector(
            ".bili-video-card__info--author"
          );
          const upName = authorSpan?.getAttribute("title") || "未知UP主";
          addBlockedUp(upId, upName);

          const targetCard =
            link.closest(".feed-card") || link.closest(".bili-video-card");
          if (targetCard && !filteredUps.has(upId)) {
            targetCard.remove();
            showToast(upName, true);
            filteredUps.add(upId);
          }
        }
      });
  }

  /**
   * 等待指定元素加载完成
   */
  function waitForElement(
    selector,
    maxAttempts = 3,
    interval = 1000,
    initialDelay = 1000
  ) {
    return new Promise((resolve, reject) => {
      let attempts = 0;

      const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
          return;
        }

        attempts++;
        if (attempts >= maxAttempts) {
          reject(
            new Error(
              `Element ${selector} not found after ${maxAttempts} attempts`
            )
          );
          return;
        }

        setTimeout(checkElement, interval);
      };

      setTimeout(checkElement, initialDelay);
    });
  }

  /**
   * 切换所有按钮的显示/隐藏状态
   */
  function toggleAllButtons(hide = true) {
    const followingToggle = document.querySelector(".following-toggle");
    const blockedToggle = document.querySelector(".blocked-ups-toggle");
    const idBlockToggle = document.querySelector(".id-block-toggle");

    if (hide) {
      followingToggle?.classList.add("hide");
      blockedToggle?.classList.add("hide");
      idBlockToggle?.classList.add("hide");
    } else {
      followingToggle?.classList.remove("hide");
      blockedToggle?.classList.remove("hide");
      idBlockToggle?.classList.remove("hide");
    }
  }

  let followingPanelInitialized = false;
  let blockedUpsPanel;

  /**
   * 创建并管理被屏蔽UP主列表面板
   */
  function createBlockedUpsPanel() {
    const idBlockButton = document.createElement("div");
    idBlockButton.className = "id-block-toggle";
    idBlockButton.innerHTML = `
      <span>手动屏蔽ID</span>
      <span></span>
      <input type="text" class="id-block-input" placeholder="输入UP主ID" pattern="[0-9]*">
      `;

    const idInput = idBlockButton.querySelector(".id-block-input");

    idBlockButton.addEventListener("mouseenter", () => {
      idBlockButton.classList.add("input-mode");
      idInput.focus();
    });

    idBlockButton.addEventListener("mouseleave", (e) => {
      if (document.activeElement !== idInput) {
        idBlockButton.classList.remove("input-mode");
        idInput.value = "";
      }
    });

    idInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    });

    idInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const upId = e.target.value.trim();
        if (upId) {
          addBlockedUp(upId, null);
          showToast(`ID: ${upId}`, true);
          e.target.value = "";
          idBlockButton.classList.remove("input-mode");
          updateBlockedUpsList();
          filterBlockedContent();
        }
      } else if (e.key === "Escape") {
        idBlockButton.classList.remove("input-mode");
        e.target.value = "";
        idBlockButton.blur();
      }
    });

    idInput.addEventListener("blur", () => {
      setTimeout(() => {
        if (document.activeElement !== idInput) {
          idBlockButton.classList.remove("input-mode");
          idInput.value = "";
        }
      }, 200);
    });

    document.body.appendChild(idBlockButton);

    const toggleButton = document.createElement("div");
    toggleButton.className = "blocked-ups-toggle";
    toggleButton.innerHTML = `
      <span>已屏蔽</span>
      <span>${getBlockedUps().length}</span>
      `;

    const panel = document.createElement("div");
    panel.className = "blocked-ups-panel";
    panel.innerHTML = `
      <div class="blocked-ups-header">
          <span>已屏蔽的UP主</span>
          <span class="blocked-count">${getBlockedUps().length}</span>
      </div>
      <div class="blocked-ups-list"></div>
  `;

    let panelVisible = false;
    let mouseInPanel = false;

    const setupPanelInteraction = () => {
      toggleButton.addEventListener("mouseenter", () => {
        panel.classList.add("show");
        panelVisible = true;
        toggleAllButtons(true);
        updateBlockedUpsList();
      });

      panel.addEventListener("mouseenter", () => {
        mouseInPanel = true;
      });

      panel.addEventListener("mouseleave", () => {
        mouseInPanel = false;
        setTimeout(() => {
          if (!mouseInPanel && !toggleButton.matches(":hover")) {
            panel.classList.remove("show");
            panelVisible = false;
            toggleAllButtons(false);
          }
        }, 200);
      });

      toggleButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!mouseInPanel) {
            panel.classList.remove("show");
            panelVisible = false;
            toggleAllButtons(false);
          }
        }, 200);
      });
    };

    const setupRemoveButtons = () => {
      panel.addEventListener("click", async (e) => {
        if (e.target.classList.contains("blocked-up-remove")) {
          const upItem = e.target.closest(".blocked-up-item");
          if (!upItem) return;

          const upId = upItem.dataset.upId;
          const upName = upItem
            .querySelector(".blocked-up-info")
            .textContent.trim();

          upItem.classList.add("removing");

          setTimeout(() => {
            removeBlockedUp(upId);
            updateCheckboxStatus(upId);
            showToast(upName, false);
            updateBlockedUpsList();
            filterBlockedContent();
          }, 300);
        }
      });
    };

    document.body.appendChild(toggleButton);
    document.body.appendChild(panel);

    setupPanelInteraction();
    setupRemoveButtons();
    updateBlockedUpsList();

    document.body.setAttribute("data-panel-initialized", "true");

    return {
      updateBlockedUpsList: () => updateBlockedUpsList(),
    };
  }

  /**
   * 创建并管理关注列表面板
   */
  async function createFollowingPanel() {
    if (followingPanelInitialized) return;

    try {
      const statsContainer = await waitForElement(".logged-in > .stats");
      if (!statsContainer) return;

      const followLink = statsContainer.querySelector("a");
      if (!followLink) {
        console.warn("未找到关注链接");
        return;
      }

      const userId = followLink.href.match(/space\.bilibili\.com\/(\d+)/)?.[1];
      if (!userId) {
        console.warn("无法获取用户ID");
        return;
      }

      const followCount =
        followLink.querySelector(".stats-number")?.textContent;
      const followTotal = parseInt(followCount) || 0;

      const toggleButton = document.createElement("div");
      toggleButton.className = "following-toggle";
      toggleButton.innerHTML = `
          <span>关注者</span>
          <span>${followTotal}</span>
          `;

      const panel = document.createElement("div");
      panel.className = "following-panel";
      panel.innerHTML = `
          <div class="blocked-ups-header">
              <span>关注的UP主</span>
              <span class="following-count">${
                followTotal > 50 ? "最近 50 位" : followTotal
              }</span>
          </div>
          <div class="blocked-ups-list"></div>
      `;

      async function fetchFollowingList() {
        try {
          // 无论总数多少，始终只请求最近的50个
          const response = await fetch(
            `https://api.bilibili.com/x/relation/followings?vmid=${userId}&ps=50`,
            {
              credentials: "include",
              headers: { Accept: "application/json" },
            }
          );

          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          if (data.code !== 0)
            throw new Error(
              `API error! code: ${data.code}, message: ${data.message}`
            );

          return data.data;
        } catch (error) {
          console.error("Error fetching following list:", error);
          return null;
        }
      }

      async function updateFollowingList() {
        const listContainer = panel.querySelector(".blocked-ups-list");
        const data = await fetchFollowingList();
        if (!data) return;

        const headerText = panel.querySelector(
          ".blocked-ups-header span:first-child"
        );
        headerText.textContent = "关注的UP主";

        const formatDate = (timestamp) => {
          const date = new Date(timestamp * 1000);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");

          return `${year}-${month}-${day}`;
        };

        listContainer.innerHTML = data.list
          .map(
            (up) => `
      <div class="blocked-up-item">
          <a href="https://space.bilibili.com/${up.mid}"
             target="_blank"
             class="blocked-up-info">
              ${up.uname}
          </a>
          <span class="follow-time">${formatDate(up.mtime)}</span>
      </div>
  `
          )
          .join("");
      }

      const setupPanelInteraction = () => {
        let panelVisible = false;
        let mouseInPanel = false;

        toggleButton.addEventListener("mouseenter", () => {
          panel.classList.add("show");
          panelVisible = true;
          toggleAllButtons(true);
          updateFollowingList();
        });

        panel.addEventListener("mouseenter", () => {
          mouseInPanel = true;
        });

        panel.addEventListener("mouseleave", () => {
          mouseInPanel = false;
          setTimeout(() => {
            if (!mouseInPanel && !toggleButton.matches(":hover")) {
              panel.classList.remove("show");
              panelVisible = false;
              toggleAllButtons(false);
            }
          }, 200);
        });

        toggleButton.addEventListener("mouseleave", () => {
          setTimeout(() => {
            if (!mouseInPanel) {
              panel.classList.remove("show");
              panelVisible = false;
              toggleAllButtons(false);
            }
          }, 200);
        });
      };

      document.body.appendChild(toggleButton);
      document.body.appendChild(panel);
      setupPanelInteraction();

      followingPanelInitialized = true;
    } catch (error) {
      console.warn("创建关注者面板失败:", error);
    }
  }
  function addCheckboxToUpAvatar() {
    const upAvatar = document.querySelector("a.up-avatar");
    if (!upAvatar) return;

    const href = upAvatar.getAttribute("href");
    if (!href) return;

    const upId = href.match(/\/(\d+)$/)?.[1];
    if (!upId) return;

    const upNameElement = document.querySelector(".up-name");
    const upName = upNameElement?.textContent?.trim() || "未知UP主";

    const createAndAddCheckbox = () => {
      let checkbox = upAvatar.querySelector(".block-checkbox");
      if (!checkbox) {
        console.log("Creating new checkbox for up-avatar:", upName);
        checkbox = createCheckbox(upId, upName);
        upAvatar.style.position = "relative";
        upAvatar.appendChild(checkbox);
        checkbox.style.display = "block";
        checkbox.style.opacity = "1";
        checkbox.style.transform = "translateY(0)";
      }
    };

    createAndAddCheckbox();

    const avatarObserver = new MutationObserver(() => {
      createAndAddCheckbox();
    });

    avatarObserver.observe(upAvatar, {
      childList: true, // 监听子元素变化
      subtree: true, // 监听所有后代元素
      characterData: true, // 监听文本内容变化
      attributes: true, // 监听属性变化
    });
  }
  const originalRemoveBlockedUp = removeBlockedUp;
  removeBlockedUp = function (upId) {
    originalRemoveBlockedUp(upId);
    blockedUpsPanel?.updateBlockedUpsList();
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (
            node.classList?.contains("floor-single-card") ||
            node.classList?.contains("bili-live-card")
          ) {
            node.remove();
            return;
          }

          node
            .querySelectorAll?.(".floor-single-card, .bili-live-card")
            .forEach((card) => card.remove());

          node
            .querySelectorAll?.(".bili-video-card__info--owner")
            .forEach((link) => {
              if (!link.getAttribute("data-hover-initialized")) {
                handleHover(link);
              }
            });
        }
      });
      filterBlockedContent();
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  document
    .querySelectorAll(".bili-video-card__info--owner")
    .forEach(handleHover);
  addCheckboxToUpAvatar();
  filterBlockedContent();

  window.addEventListener("load", async () => {
    await createFollowingPanel();
    blockedUpsPanel = createBlockedUpsPanel();
  });
})();
