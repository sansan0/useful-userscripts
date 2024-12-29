// ==UserScript==
// @name         website-time-tracker
// @namespace    https://github.com/sansan0/useful-userscripts
// @version      3.0
// @description  用于追踪和统计用户在每个二级域名下的在线时长,并提供友好的可视化统计界面
// @author    sansan
// @match        http://*/*
// @match        https://*/*
// @license    GPL-3.0 License
// @grant        GM_getValue
// @grant        GM_setValue
// @icon    data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js
// ==/UserScript==

(function () {
  "use strict";

  const DEFAULT_STYLES = {
    position: "fixed",
    zIndex: 999999,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    transition: "all 0.3s ease",
  };

  class TimeTracker {
    constructor() {
      this.startTime = null;
      this.animationFrameId = null;
      this.isStatsShown = false;
      this.isTabActive = true;
      this.timeDisplay = null;
      this.statsButton = null;
      this.initialize();
    }

    /**
     * 获取时间日期
     */
    getBeijingDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    /**
     * 记录在线时间
     */
    logTime() {
      if (!this.startTime || !this.isTabActive) return;

      const currentTimeInSeconds = Math.floor(
        (Date.now() - this.startTime) / 1000
      );
      const today = this.getBeijingDate();
      const currentDomain = window.location.hostname
        .split(".")
        .slice(-2)
        .join(".");
      let data = this.getStorageData();

      if (!data[currentDomain]) {
        data[currentDomain] = {};
      }
      if (!data[currentDomain][today]) {
        data[currentDomain][today] = 0;
      }

      data[currentDomain][today] += currentTimeInSeconds;
      this.setStorageData(data);

      this.startTime = Date.now();
    }

    /**
     * 更新 GM_setValue 并同步显示
     */
    updateGMStorage(timeSpentInSeconds) {
      if (timeSpentInSeconds <= 0) return;
      const today = this.getBeijingDate();
      const currentDomain = window.location.hostname
        .split(".")
        .slice(-2)
        .join(".");
      let data = this.getStorageData();

      if (!data[currentDomain]) {
        data[currentDomain] = {};
      }
      if (!data[currentDomain][today]) {
        data[currentDomain][today] = 0;
      }

      data[currentDomain][today] += timeSpentInSeconds;
      this.setStorageData(data);
      this.updateDisplay();
    }

    /**
     * 将秒数格式化为时分秒格式
     */
    formatTime(secondsTotal) {
      const hours = Math.floor(secondsTotal / 3600);
      const minutes = Math.floor((secondsTotal % 3600) / 60);
      const seconds = secondsTotal % 60;

      return [
        hours > 0 ? `${hours} 时` : "",
        minutes > 0 ? `${minutes} 分` : "",
        `${seconds} 秒`,
      ]
        .filter(Boolean)
        .join(" ");
    }

    /**
     * 创建UI元素
     */
    createUIElements() {
      const container = this.createFixedElement("div", {
        style: {
          ...DEFAULT_STYLES,
          top: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          padding: "12px 20px",
          gap: "20px",
          cursor: "move",
          width: "fit-content",
          height: "fit-content",
          maxWidth: "max-content",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          userSelect: "none",
        },
      });

      container.setAttribute("draggable", "true");

      const dragFrame = this.createFixedElement("div", {
        style: {
          position: "fixed",
          border: "2px dashed #2196F3",
          zIndex: 999998,
          pointerEvents: "none",
          display: "none",
        },
      });

      this.setupDragEvents(container, dragFrame);

      const savedPosition = JSON.parse(
        GM_getValue("timeTrackerPosition", "{}")
      );

      if (savedPosition) {
        const { left, top, isShrinked } = savedPosition;

        container.style.left = `${left}px`;
        container.style.top = `${top}px`;
        container.style.right = "auto";

        this.adjustContainerStyle(container, isShrinked);
      }

      document.body.appendChild(dragFrame);

      const timeContainer = this.createTimeContainer();
      const divider = this.createDivider();
      this.statsButton = this.createStatsButton();

      container.appendChild(timeContainer);
      container.appendChild(divider);
      container.appendChild(this.statsButton);

      document.body.appendChild(container);

      this.addButtonHoverEffects(this.statsButton);
      this.addContainerHoverEffects(container);

      this.statsButton.addEventListener("click", () => {
        this.logTime();
        this.showStats();
        this.addButtonClickEffect(this.statsButton);
      });

      document.addEventListener("dblclick", (event) => {
        if (container.contains(event.target)) {
          const savedPosition = JSON.parse(
            GM_getValue("timeTrackerPosition", "{}")
          );
          savedPosition.isShrinked = !savedPosition.isShrinked;
          GM_setValue("timeTrackerPosition", JSON.stringify(savedPosition));
          this.adjustContainerStyle(container, savedPosition.isShrinked);
        }
      });
    }

    /**
     * 设置拖拽事件
     */
    setupDragEvents(container, dragFrame) {
      container.addEventListener("dragstart", (event) => {
        const transparentElement = document.createElement("div");
        transparentElement.style.opacity = "0";
        document.body.appendChild(transparentElement);

        event.dataTransfer.setDragImage(transparentElement, 0, 0);

        setTimeout(() => {
          document.body.removeChild(transparentElement);
        }, 0);

        event.dataTransfer.effectAllowed = "move";

        dragFrame.style.width = `${container.offsetWidth}px`;
        dragFrame.style.height = `${container.offsetHeight}px`;
        dragFrame.style.display = "block";

        container.style.opacity = "0.8";
      });

      container.addEventListener("drag", (event) => {
        event.preventDefault();
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = container;
        const { innerWidth, innerHeight } = window;

        const left = clientX - offsetWidth / 2;
        const top = clientY - offsetHeight / 2;

        dragFrame.style.left = `${Math.max(
          0,
          Math.min(left, innerWidth - offsetWidth)
        )}px`;
        dragFrame.style.top = `${Math.max(
          0,
          Math.min(top, innerHeight - offsetHeight)
        )}px`;

        container.style.pointerEvents = "auto";
      });

      document.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });

      container.addEventListener("dragend", (event) => {
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = container;
        const { innerWidth, innerHeight } = window;

        const left = clientX - offsetWidth / 2;
        const top = clientY - offsetHeight / 2;

        container.style.left = `${Math.max(
          0,
          Math.min(left, innerWidth - offsetWidth)
        )}px`;
        container.style.top = `${Math.max(
          0,
          Math.min(top, innerHeight - offsetHeight)
        )}px`;
        container.style.right = "auto";

        dragFrame.style.display = "none";

        const savedPosition = JSON.parse(
          GM_getValue("timeTrackerPosition", "{}")
        );
        savedPosition.left = parseInt(container.style.left);
        savedPosition.top = parseInt(container.style.top);
        GM_setValue("timeTrackerPosition", JSON.stringify(savedPosition));

        container.style.opacity = "1";
      });
    }

    /**
     * 调整容器样式
     */
    adjustContainerStyle(container, isShrinked) {
      if (isShrinked) {
        container.style.width = "auto";
        container.style.padding = "8px 12px";
        if (this.statsButton) {
          this.statsButton.style.display = "none";
        }
      } else {
        container.style.width = "fit-content";
        container.style.padding = "12px 20px";
        if (this.statsButton) {
          this.statsButton.style.display = "block";
        }
      }
    }

    /**
     * 创建固定元素
     */
    createFixedElement(tag, options) {
      const element = document.createElement(tag);
      Object.assign(element.style, options.style);
      if (options.text) {
        element.textContent = options.text;
      }
      return element;
    }

    /**
     * 创建时间容器
     */
    createTimeContainer() {
      const timeContainer = document.createElement("div");
      timeContainer.style.display = "flex";
      timeContainer.style.alignItems = "center";
      timeContainer.style.gap = "10px";

      // 创建 SVG 时钟图标
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      svg.style.fill = "#666";

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7H11V13L16.2,16.2L17,14.9L12.5,12.2V7Z"
      );

      svg.appendChild(path);
      timeContainer.appendChild(svg);

      this.timeDisplay = document.createElement("div");
      this.timeDisplay.style.cursor = "pointer";

      this.timeLabel = document.createElement("div");
      this.timeLabel.style.fontSize = "12px";
      this.timeLabel.style.color = "#666";
      this.timeLabel.textContent = "今日在线";

      this.timeValue = document.createElement("div");
      this.timeValue.style.fontSize = "15px";
      this.timeValue.style.color = "#333";
      this.timeValue.style.fontWeight = "600";

      this.timeDisplay.appendChild(this.timeLabel);
      this.timeDisplay.appendChild(this.timeValue);

      timeContainer.appendChild(this.timeDisplay);

      return timeContainer;
    }

    /**
     * 创建分隔线
     */
    createDivider() {
      const divider = document.createElement("div");
      divider.style.width = "1px";
      divider.style.height = "24px";
      divider.style.backgroundColor = "#eee";
      return divider;
    }

    /**
     * 创建统计按钮
     */
    createStatsButton() {
      const statsButton = document.createElement("button");
      statsButton.textContent = "查看统计";
      Object.assign(statsButton.style, {
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.1)",
        border: "1px solid rgba(33, 150, 243, 0.2)",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        outline: "none",
        whiteSpace: "nowrap",
      });
      return statsButton;
    }

    /**
     * 添加按钮悬停效果
     */
    addButtonHoverEffects(button) {
      const hoverStyle = {
        backgroundColor: "rgba(33, 150, 243, 0.15)",
        borderColor: "rgba(33, 150, 243, 0.4)",
      };
      const defaultStyle = {
        backgroundColor: "rgba(33, 150, 243, 0.1)",
        borderColor: "rgba(33, 150, 243, 0.2)",
      };

      button.addEventListener("mouseover", () => {
        Object.assign(button.style, hoverStyle);
      });

      button.addEventListener("mouseout", () => {
        Object.assign(button.style, defaultStyle);
      });
    }

    /**
     * 添加按钮点击效果
     */
    addButtonClickEffect(button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    }

    /**
     * 添加容器悬停效果
     */
    addContainerHoverEffects(container) {
      const hoverStyle = {
        transform: "translateY(-1px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
      };
      const defaultStyle = {
        transform: "translateY(0)",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
      };

      container.addEventListener("mouseover", () => {
        Object.assign(container.style, hoverStyle);
      });

      container.addEventListener("mouseout", () => {
        Object.assign(container.style, defaultStyle);
      });
    }

    /**
     * 更新显示
     */
    updateDisplay() {
      const today = this.getBeijingDate();
      const currentDomain = window.location.hostname
        .split(".")
        .slice(-2)
        .join(".");
      const data = this.getStorageData();
      const todayTime =
        data[currentDomain] && data[currentDomain][today]
          ? data[currentDomain][today]
          : 0;
      const elapsedSinceLastUpdate =
        this.startTime && this.isTabActive
          ? Math.floor((Date.now() - this.startTime) / 1000)
          : 0;
      const totalTime = todayTime + elapsedSinceLastUpdate;
      this.timeValue.textContent = this.formatTime(totalTime);
      this.animationFrameId = requestAnimationFrame(() => this.updateDisplay());
    }

    /**
     * 获取存储数据
     */
    getStorageData() {
      return JSON.parse(GM_getValue("websiteTimeTracker", "{}"));
    }

    /**
     * 设置存储数据
     */
    setStorageData(data) {
      GM_setValue("websiteTimeTracker", JSON.stringify(data));
    }

    /**
     * 展示统计信息
     */
    showStats() {
      if (this.isStatsShown) return;
      this.isStatsShown = true;
      const hasSecurityRestrictions = () => {
        try {
          const script = document.createElement("script");
          script.textContent = 'console.log("test")';
          document.head.appendChild(script);
          document.head.removeChild(script);
          return false;
        } catch (e) {
          return true;
        }
      };

      const overlay = this.createOverlay();
      const modal = this.createModal();
      const title = this.createTitle("在线时间统计");
      modal.appendChild(title);

      const useTableView =
        hasSecurityRestrictions() || typeof echarts === "undefined";

      if (useTableView) {
        const tableContainer = document.createElement("div");
        tableContainer.style.padding = "20px";
        tableContainer.style.overflow = "auto";
        this.createDataTable(tableContainer);
        modal.appendChild(tableContainer);
      } else {
        const chartContainer = this.createChartContainer();
        modal.appendChild(chartContainer);
        setTimeout(() => {
          try {
            const myChart = echarts.init(chartContainer);
            this.updateChart(myChart);
            window.addEventListener("resize", () => {
              myChart.resize();
            });
          } catch (error) {
            modal.removeChild(chartContainer);
            const tableContainer = document.createElement("div");
            tableContainer.style.padding = "20px";
            tableContainer.style.overflow = "auto";
            this.createDataTable(tableContainer);
            modal.appendChild(tableContainer);
          }
        }, 100);
      }

      overlay.addEventListener("click", () => {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
        this.isStatsShown = false;
        this.updateGMStorage(0);
      });

      document.body.appendChild(overlay);
      document.body.appendChild(modal);
    }

    /**
     * 创建数据表格
     */
    createDataTable(container) {
      const data = this.getStorageData();
      const currentDomain = window.location.hostname
        .split(".")
        .slice(-2)
        .join(".");
      const domainData = data[currentDomain] || {};
      const today = this.getBeijingDate();

      const table = document.createElement("table");
      Object.assign(table.style, {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
        fontSize: "14px",
      });

      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      ["日期", "在线时长"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        Object.assign(th.style, {
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ddd",
        });
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      const dates = Object.keys(domainData).sort().reverse();
      dates.forEach((date) => {
        const tr = document.createElement("tr");

        const dateTd = document.createElement("td");
        dateTd.textContent = date;
        dateTd.style.padding = "10px";
        dateTd.style.borderBottom = "1px solid #ddd";
        tr.appendChild(dateTd);

        const timeTd = document.createElement("td");
        let seconds = domainData[date];
        if (date === today) {
          seconds += this.startTime
            ? Math.floor((Date.now() - this.startTime) / 1000)
            : 0;
        }
        timeTd.textContent = this.formatTime(seconds);
        timeTd.style.padding = "10px";
        timeTd.style.borderBottom = "1px solid #ddd";
        tr.appendChild(timeTd);

        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.appendChild(table);
    }

    /**
     * 创建遮罩层
     */
    createOverlay() {
      return this.createFixedElement("div", {
        style: {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9998,
        },
      });
    }

    /**
     * 创建弹窗
     */
    createModal() {
      return this.createFixedElement("div", {
        style: {
          ...DEFAULT_STYLES,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "1200px",
          height: "600px",
          backgroundColor: "white",
          zIndex: 9999,
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        },
      });
    }

    /**
     * 创建标题
     */
    createTitle(text) {
      const title = document.createElement("div");
      title.textContent = text;
      Object.assign(title.style, {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
      });
      return title;
    }

    /**
     * 创建图表容器
     */
    createChartContainer() {
      const chartContainer = document.createElement("div");
      Object.assign(chartContainer.style, {
        flex: 1,
        width: "100%",
      });
      return chartContainer;
    }

    /**
     * 更新图表数据
     */
    updateChart(chart) {
      const data = this.getStorageData();
      const currentDomain = window.location.hostname
        .split(".")
        .slice(-2)
        .join(".");
      const domainData = data[currentDomain] || {};
      const today = this.getBeijingDate();
      const { factor } = this.determineUnit();

      const currentTimeInSeconds = this.startTime
        ? Math.floor((Date.now() - this.startTime) / 1000)
        : 0;

      // 获取并排序日期
      const dates = Object.keys(domainData).sort();
      const values = dates.map((date) => {
        const value = domainData[date];
        return date === today
          ? Math.floor((value + currentTimeInSeconds) / factor)
          : Math.floor(value / factor);
      });

      // 格式化日期显示
      const formatDates = dates.map((date, index) => {
        const [year, month, day] = date.split("-");
        if (index === 0 || day === "01") {
          return `${month}-${day}`;
        } else {
          return day;
        }
      });

      const option = {
        grid: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 70,
        },
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            const date = dates[params[0].dataIndex];
            return `${date}<br/>在线时长：${params[0].value} 分钟`;
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: 0,
            startValue: Math.max(0, dates.length - 30),
            endValue: dates.length - 1,
          },
        ],
        xAxis: {
          type: "category",
          data: formatDates,
          axisLabel: {
            interval: 0,
            rotate: 0,
            margin: 15,
            color: "#666",
            fontSize: 12,
            formatter: (value) => value,
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "时间（分钟）",
          nameLocation: "middle",
          nameGap: 50,
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#eee",
            },
          },
          axisLabel: {
            color: "#666",
          },
        },
        series: [
          {
            name: "在线时长",
            type: "line",
            data: values,
            smooth: true,
            showSymbol: true,
            symbolSize: 6,
            lineStyle: {
              width: 2,
              color: "#2196F3",
            },
            itemStyle: {
              color: "#2196F3",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(33, 150, 243, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(33, 150, 243, 0.1)",
                },
              ]),
            },
          },
        ],
      };

      chart.setOption(option);
    }

    /**
     * 确定时间单位
     */
    determineUnit() {
      return { unit: "minutes", factor: 60 };
    }

    /**
     * 初始化
     */

    initialize() {
      if (window !== window.top) {
        return;
      }

      this.startTime = Date.now();
      this.setupEventListeners();
      this.createUIElements();

      this.animationFrameId = requestAnimationFrame(() => this.updateDisplay());
      const savedPosition = JSON.parse(
        GM_getValue("timeTrackerPosition", "{}")
      );
      if (savedPosition && savedPosition.isShrinked) {
        this.adjustContainerStyle(
          document.querySelector('div[draggable="true"]'),
          true
        );
      }
    }

    /**
     * 设置事件监听
     */
    setupEventListeners() {
      window.addEventListener("focus", () => {
        this.startTime = Date.now();
      });

      window.addEventListener("blur", () => this.logTime());
      window.addEventListener("beforeunload", () => this.logTime());
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.isTabActive = true;
          this.startTime = Date.now();
        } else {
          this.isTabActive = false;
          this.logTime();
        }
      });
    }
  }

  // 启动应用
  new TimeTracker();
})();
