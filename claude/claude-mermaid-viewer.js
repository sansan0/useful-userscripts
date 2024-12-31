// ==UserScript==
// @name           claude-mermaid-viewer
// @namespace      https://github.com/sansan0/useful-userscripts
// @version        1.0
// @description    在 Claude 聊天界面中渲染和查看 Mermaid 图表的工具
// @author         sansan
// @match          https://claude.ai/*
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @license        GPL-3.0 License
// @icon           data:image/png;base64,/9j/4AAQSkZJRgABAQEAqACoAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD983fDY46DqKA3+7+QpH5f8B/Kg4AoADIQe35Cgv8A7v5CmmjNADi/+7+QoEhPp+VNzmnKOKAAvj+7+Qpd2P7v5CmHg07tQAGQj0/IUFz/ALP5CgAGhhgUALv47fkKQvg/w/kKCvFNzQA4v9PyFAcn+7+QptFADmfH938hSo+W7dD2ph5FOjHz/gf5UAEnDfgP5U1jmnSdfwH8qawwaAPMPj744vdJvrPTbG6mtd0fnztE21mycKM9QOCfyrmvDHxy1rQJFW6kGqW/dZuJB9HHP55qP443iy/Ey8819kNvHGrN/dUIGJ/Umvwli/4L/wDxm8O/HzXtYUeHte8E3GpTCz8O3disK29oshEax3EYEqyFACWYuCxPy44r7DB4Oi8LFTindX+/Xc+DxmMxLxtSVKTVnbfTTTbY/o28GfEPTfHNvmzm23CjL28nyyJ+Hce4rczX5p/sI/8ABUT4dftvRxR+G7+48M+OLNPOn8O6hKqXqY6vbuPluIx3KfMB95Vr7u+Fvxij8T+XYam0cOodI5Pupc/4N7dD29K8nH5TKkvaUtY/iv8AM9zLc7VV+xxHuy79H/kzvs8U5Tg1HnmlZsV4p9APPBzQxyKaCRTWPNADs5rn/G3xI03wLF/pUjSXTDKW0XMjfX+6Pc/rXOfFP40JoDSadpLpJfL8ss/3kt/YerfoK+Cv29f+CrHw5/YjNxZ6zd3Hizx9Onmx+HtPmDXCE8q91KcrbqevzZcjohHNe3gModRe0raR7dX/AJHz2ZZ4qT9jhvel36L/ADf4H2B4p+N+ueIZGW3m/sy37Jb/AH/xfr+WK2f2afiVqGveI/EGgaldzXjWSx3lo8rbnWNuGTPUgMQRnpk1+C/gv/gvb8ZPFf7T3he/1N/Dul+BbjVre1v/AA9Z6erRm0llWNybh8zGRVbcHDKMr93BIr9sfgJdHTf2oZYFbK3GmyxEjo20Kw/9Br2cVg6P1WcYRSsr/ceJg8ZiVjacqsm+Z2376bbH0sTinR/6z8DTRwKdHzJ+B/lXxZ94D8P+A/lTXNOf734D+VNPNAHzL+1lcvpy+O7hPlkh0a6mQ+hFmxH8q/lSsJN9hC3dkUn8q/rE/aj0D+1tb16zx/yFtIeEcdS8Lx1/Kt8N/hd4g+J3jvS/B/hrSL3XPEep3AsLOwtU3SzSjgj0AGCWY4CgEkgCvucI74em12X5H5/V93FVr/zP82Z+keILzwprVnqum311peoabMtza3ltM0M1rIpyro6kFWB7g1+9H/BJT9qb4tftLfA9pfip4L1rS7rTUj/s7xVcWws4vE0R/iMJw4mXgmRF8twcghsg8h/wTv8A+CK/g39leysPFHj6HTvHHxGULMvmxibS9Cfrtt42GJZF/wCezjr9xV6n7hZ2lbLFmPqTXXGNtzz8RXjLRI7Sz+PeuWWkRW221lmjG03MqlncdsjOM+/eqU3xo8STsT/aAj9kgQAfpXMbKB8tcqwOGTvyL7jSWZYuSt7R/edRB8avEkLZ+3rJ7PAhH8quan8eNa1HRJrXbawTSjabiEFXA74GSAT69q4rtSYqvqOGbvyL7gWZYtJx9o/vufHP/BYD9rD4u/s1fBlY/hb4O1yZNSiY6p4ztrcXUXhyPptSNdzLM3XzpFEaDkEt938LL/V7jX9RuNQvLu4v7y+la4uLqeUzS3MjHLO7sSWYnkknJr+ptXaM/KeoIPuO4r4R/wCCiX/BEvwf+0pp+oeKfhpb6d4H+IWGme2iQQaRrz9SsqKMQSt2lQBSfvqfvDolG+xnh60Y6P7z8T4p2glSRcho3V1PoQQRX9SH7M962p/tFaVM3LNpe5j7m1Un9TX8xus/DHXPBvxSbwb4g0u80fxDZ6nHpd5YXUeya3maRU2kf8CBBGQQQQSCDX9Pn7Hum/afjtqEi/c03T5U/JkjH8qwxGmFqt/yv8Tvo+9i6KX8yf3H1NTo/wDWfgf5U2nJ9/8AA/yr4I/QQYfP+A/lTSKc4/efgP5U1zigDyf9oyxNprej6gFyrI0TcdSrBh+hNfDX7A//AATW8N/sVeKvHHirdb6t4t8YaxeywXuzjSdMkuHeG0izyCVKmVh94gL91Rn77/aIu7dPClpDJzdSXIeHHYAHcT7YIH4147X2mTycsLG/S5+fZ9Hkxk1F72f4f0w605VptKD716LPGHZwaU9KaBz1o9eaQh3ajFNAyOpobg0CBxkU2jdRVK4z5d/bw/4Jx+H/ANqb4l+AviJaR2+n+L/BOsWVzfyhP+Q3psMokaCTHWRMAxse25TwRj6+/YO0Vp5PFGtSf8tWitVb1PzSN/Naw69T/ZQk0+28C6pY2a+XcWWqTG6UnqXwyEe2zAH+6a8/N6jjg5JLdr+v67ns5DHnxsHJ/Cnb7v6+49Rp0Qw/4H+VNB4NLHzJ+B/lXxJ+hCufm/AfypucmnP978B/KmAbn+p9KAPDvjrrZ1Xx9JCGzHp8awqPRj8zfzA/CuN6U34weP8AS/BNzreva9qEOmabb3bma5nzsizJtXOAT1IFeZWf7bvwZ1G7EMfxX+Hq3DHHlS69bwyZ/wB12U199haap0Yw7JH5hjakqtedTu2eg+KPEVv4P8L6prF55n2PR7Oa/uAgyxjijaRse+1Tj3r8XdC/4OEPjIvx0i8Q30Ph+TwHNeAyeGE09F8qyLdEuf8AW+eE53klSw+7jiv2a0TxX4f+INhJHpuraD4gtbqNopI7S+hu0mRgQykIxyCCQfY18H6T/wAG5/w10H49ReIJvFniSbwbb3ovovCstpGpID71tnut25oBwPuByvBbvW7v0M6Lgr+0R+gdndR31pDcQszQ3EazRlhglWAYZHrgipxUZPoqqOgCjAA9AK4P4p/tVfDP4Haktn4y+IPg/wAMXzKH+y6hqsUNxtPQmPO8A+pFORgk3segHpWb4p8R2/hHwxqmsXgkaz0iznv5xGMsY4o2kbHvtU4965b4WftO/Dj453EkPg3x54R8UXEa7ng03VIp5lX18sHfj3xiu1urWG+tZYJ4o57edGilikGVlRhhlI7ggkH2NJBy23PxT0H/AIOEfjF/wvaHxBfQ+H5PAdxeKZPDKWCAw2Rbolz/AK3zwhzvJKlh93HA/au2uY721hnhLNDcRrLGSMEqwDDP4EV+fmhf8G5/w10/49R+IF8WeJLzwXb3gvo/CrWkecB9627XQbcYBwPuByvG7vX3l4n8d6D4KjZ9Z1zQdFjQc/bb+G1VB/wNhgUR8zas4O3szUq3+zB4v/sf9oLWNLZz5OtQsuM8ebEAy/jt3ivJL39t74M6fdeTJ8Vvh60wODHDrtvcPn/djZjU/wCz78RbHxd8YPDHiHR7yO+07UNUUw3EYIWVHcxnGQDjkjpSxFFVMPUg/wCV/wCa/IvB1JUcTTn/AHl+Oj/A+7etOjb5/wAD/KmbcAinx/e/A/yr87P1EJD834D+VNJwc+9Of734D+VNcc0AfL/xh8S6b8KtV1zUNc1Sw0PTbC5czXt7crbQQq7fLudiAM7gBzySBXzh8UP26v2bddtpbXxBrvhnxkjfK8MHhufXg3t+7t5FP519l/tG+DVTV4dU8mOa1vFEUwdAyrKv3SQeOQBj3WvC/i3+0z4T+AaWsGva1NDqN8hax0fTreW+1TUADj9zaQK0rjPG7aFB6sK+8wVZVaEZrt+J+a4/DujiZ02uuno9UfBvxL1D9hPxlcyXC/Cvx5pd8xyb7wl4H1zSJgfUGFI1/wDHa4iP4yfD/wCEhZvhl+0p+1b8P44yClh4p8DX3iLTV9iksQbb7DJr7V1n9pj9ob4pM0fw3+DMfhbT34TWfiTrgsWK9nXT7UyT/g7KfYViy/s0/tPfE52bxh+1APCtvJ1s/AXhWG28seguLktJ+OK6HfoZRkkrS/O/6H0p4YuJLvwvpc0l19ulmsoZHujb/Z/tLGNSZPK6x7id2w/dzjtX5R/8Fo/+CWHiy8+KHjj48+EptL1Dw3c2a6v4jsprgQXunPDEscssYbiaNlRW2ghwSwwRg1+iv7Qn7VPhD9i3wf4RvPH+pa0uk61fw6Adce0+0R28/lEi4vnQARK5UkuFwWJwuAceL/8ABTH9r/wFq/7IfibwP4W8SaJ428b/ABVs/wDhGfDeiaBfxahd3890ypv2xM22NVJYs2AcAd+Kla1jKjzxlePU+bv+CK3/AASv8V+APiZ4b+OXjWTS7HTf7Ja78N6db3AuLq7+1w7VuJivyxKInYhMlizDIXHP6b/ELUJNJ+H+vXcOoNpM1rptzPHfLZm9NkyxMwmEA5m2Y3eWOXxt7181/wDBPv8Abh+G2q/sleF9H17xZ4f8G+KPh5pkXh3xJouu6hFYXel3VmvkOWSUqWRvL3BlyOcdQRXqvwI/aV8L/tvfCTxJq3w/1XxFZ6RHeXegW2vLZ/ZZHmRADeWRkBEiKXBR2XG5cFeMUtLaBU5nPmkfnu/xe+G/xbfzPiV+0b+1n8RIZeZLHw74LvvD2mnPYRwxFtvtkV33wv1v9hXwRcJMvwq8Z318pB+3+K/AetatMT6s00ci5+iivfF/Zx/ak+GEnmeD/wBpm18YWseNtj4+8LRzM49DcWpV/wAcVr6Z+1b8ffhMG/4Wh8FZta0yHmXXfhxra6qiL3d7G4MdwB7IWPsaUU+ppKSa9387foipov7eH7PWgeFZLXwv4g8L+F5JF8qKB9Bm0PYDwTiS3iAwPevTP2ZL2z+J3xT8I3mk31rq1hc3qXMd1azLNDKkeWYq6kggbCOD1FcTpf7TPh/9o+/u5NF1g3Z08BZtNuopLa+08Hp59tMFkjJPdlwegJxX0d+wn8M9moah4mkt1htrdTY2IVAqs7HMrADjgYH1Y1WNqqhhJzfa3zegZfh3iMZCCT3u/Ran0wTmnRf6z8D/ACpopycyfgf5V+cn6gDHD/gP5USfdof74+g/lS9aAM7xBoNv4n0W4sbpS0NwuDj7ynsw9weRXz74s8E3PgHxFJHcRKs0ibI7tEANxEDkDd1wCclc8En619IsMGqHiLw5Z+KtLks76FZoZPwZD/eU9QR6ivSy/MJYeVnrF7r9UeTmmVxxcbrSa2f6P+tD5pxxRXVePPgd4k8JySXGkwr4j08c+WjCG9jH+6flk+q4PtXnNx8QLHTrxrfUI77TLpThorq2aNh+FfXYfEQrK9J3/P7tz4PFYWrh5ctaNvy+T2L3ijwppnjbw7eaTrWm2GsaTqEflXVle26XFvcJ6OjAqw+o4rz/AODX7FXwh/Z48RTax4F+GvhDwvq1wCGvrGwUXCg9QrtlkB9FIFdyvjvSJF/5CFv+OR/Skfx3o8Sn/iYQH6ZP9K35Zdjn5tLXOD+Lf7EPwd+Pfi6PX/Gnwy8G+Jdcjx/p17p6tcSY6b2XBkx/t5r0jQ9CsfDGjWum6ZY2em6dYxCG2tLSFYYLdB0VEUBVA9AKx7v4o6VbA7GuJ29Ejxn8TisHWPi1d3KstnDHar/fb53/AMP51cacn0JlU6XO21fW7XQ7UzXUyxL2B+83sB3rzbxj46m8Ty+WgMNmpysfdz6t/h2qhbxal4x1Xy4I7zU7yQ4CRI0rn8BnFev/AAt/Yr1jxFLHdeJpDotjkN9mjIe6lHoeqx/jk+1FavQwy5q0l+vyRrh8JiMVLloxb/L5vY88+EXwZ1D40+MlhtIxHHCqre6i0YP2aLOdu7qSf4Uz156ZNfbPhTwvZeC/Dtnpenw+RZ2MYiiTqcdyT3YnJJ7kmm+EvB2meBNCh03SbOKys4eQidWPdmPVmPcnmtNF5r4vNM0li56aRWy/V+f5H3+UZTHBQu9Zvd/ovL8xRwM0sf8ArPwP8qCOvpQn3/wP8q8k9gH5b8B/KgHiho2J/Ad/ajY3+TQAhHNDrS+W3+TR5be350ARsuap674a07xTbGHUtPs9Qh6bbmFZAPpkcfhWgYmx/wDXo8pvb8xTjJp3QpRTVmeb6v8AspeA9XZm/sT7IxPW1uJIh+WcfpWRL+xR4LP3W1teegvAcfmtevGFj/8ArpPJb1/UV2RzLFRVlUl97OKWV4OTu6UfuR5FF+xR4KRvmOtyD0a8A/korZ0f9ljwJozhl0FLpl73U0k36E4/SvRPJb/JFKYW/wAkUpZjipKzqS+9hDK8JF3jSj9yKWjeH7Hw3aeTp9naWEP9y3hWJT/3yKuBcUvlNn/64pfKb2/OuRtt3Z3JJKyG4704rigxNjt+dHlt/k0gAjihOH/A/wAqNjD/APWKVY23Z9j3oA//2Q==
// ==/UserScript==

(function () {
  "use strict";
  let initialScale = 1;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    .mermaid-content-wrapper {
     width: 100%;
    height: calc(100% - 50px);
    overflow: scroll;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    }
    .mermaid-content-wrapper::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        display: block;
    }
    .mermaid-content-wrapper::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    .mermaid-content-wrapper::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
        min-height: 40px;
    }
    .mermaid-content-wrapper::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .control-button {
        width: 36px;
        height: 36px;
        padding: 6px;
        border: none;
        border-radius: 6px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .control-button:hover {
        background-color: #f3f4f6;
    }
    .control-button svg {
        width: 24px;
        height: 24px;
    }
    .control-button.active {
        background-color: #4b5563;
    }
    .control-button.active svg {
        stroke: #ffffff;
    }
    div.text-text-300.absolute.pl-3.pt-2\\.5.text-xs.mermaid-toggle {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
        background-color: #334155 !important;
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        padding: 4px 8px !important;
        border-radius: 4px !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        border: 1px solid transparent !important;
        transition: all 0.2s ease-in-out !important;
        cursor: pointer !important;
    }
    .mermaid-toggle svg {
        width: 14px;
        height: 14px;
        stroke: currentColor;
        stroke-width: 2;
    }
`;
  document.head.appendChild(styleSheet);

  /**
   * 加载 Mermaid 库
   * @param {function} callback - 加载完成后的回调函数
   */
  function loadMermaidLibrary(callback) {
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://cdn.jsdelivr.net/npm/mermaid@11.4.0/dist/mermaid.min.js",
      onload: function (response) {
        const script = document.createElement("script");
        script.textContent = response.responseText;
        document.head.appendChild(script);
        unsafeWindow.mermaid.initialize({ startOnLoad: false });
        callback();
      },
    });
  }

  /**
   * 在模态框中渲染 Mermaid 图
   * @param {string} mermaidContent - Mermaid 图的内容
   */
  function renderMermaidInModal(mermaidContent) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "9999";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const container = document.createElement("div");
    container.style.width = "90%";
    container.style.height = "90%";
    container.style.backgroundColor = "white";
    container.style.boxSizing = "border-box";
    container.style.position = "relative";
    container.style.borderRadius = "8px";
    container.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("mermaid-content-wrapper");

    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.top = "10px";
    buttonContainer.style.right = "10px";
    buttonContainer.style.height = "40px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "4px";
    buttonContainer.style.zIndex = "1";

    const panButton = createControlButton(
      "pan",
      `
    <path d="M20,14 L20,17 C20,19.209139 18.209139,21 16,21 L10.0216594,21 C8.75045497,21 7.55493392,20.3957659 6.80103128,19.3722467 L3.34541668,14.6808081 C2.81508416,13.9608139 2.94777982,12.950548 3.64605479,12.391928 C4.35756041,11.8227235 5.38335813,11.8798792 6.02722571,12.5246028 L8,14.5 L8,13 L8.00393081,13 L8,11 L8.0174523,6.5 C8.0174523,5.67157288 8.68902517,5 9.5174523,5 C10.3458794,5 11.0174523,5.67157288 11.0174523,6.5 L11.0174523,11 L11.0174523,4.5 C11.0174523,3.67157288 11.6890252,3 12.5174523,3 C13.3458794,3 14.0174523,3.67157288 14.0174523,4.5 L14.0174523,11 L14.0174523,5.5 C14.0174523,4.67157288 14.6890252,4 15.5174523,4 C16.3458794,4 17.0174523,4.67157288 17.0174523,5.5 L17.0174523,11 L17.0174523,7.5 C17.0174523,6.67157288 17.6890252,6 18.5174523,6 C19.3458794,6 20.0174523,6.67157288 20.0174523,7.5 L20.0058962,14 L20,14 Z"></path>
`
    );

    const zoomOutButton = createControlButton(
      "zoom-out",
      `
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
    d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607M13.5 10.5h-6"></path>
`
    );

    const resetButton = createControlButton("reset", "Reset", true);

    const zoomInButton = createControlButton(
      "zoom-in",
      `
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
    d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607M10.5 7.5v6m3-3h-6"></path>
`
    );
    const downloadButton = createControlButton(
      "download",
      `
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3M14 3H8.5C7.67157 3 7 3.67157 7 4.5V6"></path>
`
    );
    const closeButton = createControlButton(
      "close",
      `
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
    d="M6 18L18 6M6 6l12 12"></path>
`
    );

    closeButton.style.marginLeft = "8px";

    let currentScale = 1;
    const scaleStep = 0.2;
    let isPanning = false;
    let isEnabled = false;

    panButton.addEventListener("click", togglePanMode);
    togglePanMode();

    let startX, startY, scrollLeft, scrollTop;

    contentWrapper.addEventListener("mousedown", handleMouseDown);
    contentWrapper.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    contentWrapper.addEventListener("selectstart", handleSelectStart);

    zoomInButton.addEventListener("click", zoomIn);
    zoomOutButton.addEventListener("click", zoomOut);
    resetButton.addEventListener("click", resetZoom);
    closeButton.addEventListener("click", closeModal);
    downloadButton.addEventListener("click", downloadAsPng);

    buttonContainer.appendChild(panButton);
    buttonContainer.appendChild(zoomOutButton);
    buttonContainer.appendChild(resetButton);
    buttonContainer.appendChild(zoomInButton);
    buttonContainer.appendChild(downloadButton);
    buttonContainer.appendChild(closeButton);

    const mermaidElement = document.createElement("pre");
    mermaidElement.classList.add("mermaid");
    mermaidElement.textContent = mermaidContent;
    mermaidElement.style.margin = "0";
    mermaidElement.style.display = "inline-block";
    mermaidElement.style.position = "relative";
    mermaidElement.style.minWidth = "100%";

    contentWrapper.appendChild(mermaidElement);
    container.appendChild(buttonContainer);
    container.appendChild(contentWrapper);
    modal.appendChild(container);
    document.body.appendChild(modal);

    const observer = new MutationObserver(handleMutations);
    observer.observe(mermaidElement, { childList: true });

    unsafeWindow.mermaid.init(undefined, mermaidElement).then(() => {
      resetZoom();
    });

    modal.addEventListener("click", handleModalClick);
    function downloadAsPng() {
      const svg = mermaidElement.querySelector("svg");
      if (!svg) return;

      const svgClone = svg.cloneNode(true);

      const chineseTextElements = svgClone.querySelectorAll("text");

      chineseTextElements.forEach((text) => {
        const bbox = text.getBBox();
        const padding = 10;
        text.setAttribute("textLength", bbox.width + padding);
        text.setAttribute("lengthAdjust", "spacingAndGlyphs");
      });

      const bbox = svg.getBBox();

      svgClone.setAttribute("width", bbox.width);
      svgClone.setAttribute("height", bbox.height);

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = bbox.width;
      canvas.height = bbox.height;

      const serializer = new XMLSerializer();
      let source = serializer.serializeToString(svgClone);

      if (
        !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
      ) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns="http://www.w3.org/2000/svg"'
        );
      }
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

      const url =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
      const img = new Image();
      img.onload = function () {
        const scale = 2;
        canvas.width = bbox.width * scale;
        canvas.height = bbox.height * scale;
        ctx.scale(scale, scale);

        ctx.drawImage(img, 0, 0);

        const pngUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = `mermaid-diagram-${Date.now()}.png`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      img.src = url;
    }

    /**
     * 创建控制按钮
     * @param {string} className - 按钮的类名
     * @param {string} content - 按钮的内容(SVG 或文本)
     * @param {boolean} isText - 是否为文本内容
     * @returns {HTMLButtonElement} - 创建的按钮元素
     */
    function createControlButton(className, content, isText = false) {
      const button = document.createElement("button");
      button.className = `control-button ${className}`;

      if (isText) {
        button.textContent = content;
        button.style.fontSize = "12px";
      } else {
        button.innerHTML = `<svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" style="display: inline-block;" width="24" height="24" fill="none" stroke="currentColor">${content}</svg>`;
      }

      return button;
    }

    /**
     * 切换平移模式
     */
    function togglePanMode() {
      isEnabled = !isEnabled;
      panButton.classList.toggle("active", isEnabled);
      contentWrapper.style.cursor = isEnabled ? "grab" : "default";
    }

    /**
     * 处理鼠标按下事件
     * @param {MouseEvent} e - 鼠标事件对象
     */
    function handleMouseDown(e) {
      if (!isEnabled) return;
      isPanning = true;
      contentWrapper.style.cursor = "grabbing";
      startX = e.pageX - contentWrapper.offsetLeft;
      startY = e.pageY - contentWrapper.offsetTop;
      scrollLeft = contentWrapper.scrollLeft;
      scrollTop = contentWrapper.scrollTop;
    }

    /**
     * 处理鼠标移动事件
     * @param {MouseEvent} e - 鼠标事件对象
     */
    function handleMouseMove(e) {
      if (!isPanning) return;
      e.preventDefault();
      const x = e.pageX - contentWrapper.offsetLeft;
      const y = e.pageY - contentWrapper.offsetTop;
      const walkX = (x - startX) * 1.5;
      const walkY = (y - startY) * 1.5;
      contentWrapper.scrollLeft = scrollLeft - walkX;
      contentWrapper.scrollTop = scrollTop - walkY;
    }

    /**
     * 处理鼠标松开事件
     */
    function handleMouseUp() {
      isPanning = false;
      if (isEnabled) {
        contentWrapper.style.cursor = "grab";
      }
    }

    /**
     * 处理选择开始事件
     * @param {Event} e - 事件对象
     */
    function handleSelectStart(e) {
      if (isEnabled) {
        e.preventDefault();
      }
    }

    /**
     * 更新 SVG 缩放
     */

    function updateSvgScale() {
      const svg = mermaidElement.querySelector("svg");
      if (svg) {
        svg.style.transform = `scale(${currentScale})`;
        svg.style.transformOrigin = "top left";

        const boundingRect = svg.getBoundingClientRect();
        const scaledWidth = boundingRect.width;
        const scaledHeight = boundingRect.height;

        mermaidElement.style.width = `${scaledWidth}px`;
        mermaidElement.style.height = `${scaledHeight}px`;
        mermaidElement.style.margin = "20px";

        const wrapperHeight = contentWrapper.clientHeight;
        const centerY = (wrapperHeight - scaledHeight) / 2;

        contentWrapper.scrollTop = centerY;
      }
    }

    /**
     * 放大
     */
    function zoomIn() {
      currentScale += scaleStep;
      updateSvgScale();
    }

    /**
     * 缩小
     */
    function zoomOut() {
      currentScale = Math.max(0.2, currentScale - scaleStep);
      updateSvgScale();
    }

    /**
     * 重置缩放
     */
    function resetZoom() {
      currentScale = initialScale;
      updateSvgScale();
    }

    /**
     * 关闭模态框
     */
    function closeModal() {
      modal.remove();
    }

    /**
     * 处理 Mutation
     * @param {MutationRecord[]} mutations - Mutation 记录数组
     */
    function handleMutations(mutations) {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const addedNodes = mutation.addedNodes;
          for (const node of addedNodes) {
            if (node.nodeName === "svg") {
              const svg = node;
              const boundingRect = svg.getBoundingClientRect();
              const svgWidth = boundingRect.width;
              const svgHeight = boundingRect.height;
              const wrapperWidth = contentWrapper.clientWidth;
              const wrapperHeight = contentWrapper.clientHeight;
              const scaleX = wrapperWidth / svgWidth;
              const scaleY = wrapperHeight / svgHeight;
              initialScale = Math.min(scaleX, scaleY) * 0.9;

              updateSvgScale();

              const centerX =
                (contentWrapper.scrollWidth - contentWrapper.clientWidth) / 2;
              const centerY =
                (contentWrapper.scrollHeight - contentWrapper.clientHeight) / 2;
              contentWrapper.scrollLeft = centerX;
              contentWrapper.scrollTop = centerY;

              observer.disconnect();
              break;
            }
          }
        }
      });
    }

    /**
     * 处理模态框点击事件
     * @param {MouseEvent} event - 鼠标事件对象
     */
    function handleModalClick(event) {
      if (event.target === modal) {
        modal.remove();
      }
    }
  }

  /**
   * 获取 Mermaid 内容
   * @param {HTMLElement} element - 元素
   * @returns {string} - Mermaid 内容
   */
  function getMermaidContent(element) {
    const codeElement = element
      .closest(".flex.flex-col")
      .querySelector(".language-mermaid");
    return extractMermaidSyntax(codeElement);
  }

  /**
   * 提取 Mermaid 语法
   * @param {HTMLElement} codeElement - 代码元素
   * @returns {string} - Mermaid 语法
   */
  function extractMermaidSyntax(codeElement) {
    const topLevelSpans = codeElement.children;
    let mermaidSyntax = "";
    for (const span of topLevelSpans) {
      const lineContent = span.textContent;
      mermaidSyntax += lineContent.trim() + "\n";
    }
    console.log("Extracted Mermaid Syntax:");
    console.log(mermaidSyntax);
    return mermaidSyntax;
  }

  /**
   * 处理元素
   */
  function processElements() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const elements = document.querySelectorAll(
          "div.text-text-300.absolute.pl-3.pt-2\\.5.text-xs"
        );
        elements.forEach((element) => {
          if (
            element.textContent === "mermaid" &&
            !element.classList.contains("mermaid-toggle")
          ) {
            element.classList.add("mermaid-toggle");
            const icon = document.createElement("span");
            icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
                        </svg>`;
            element.insertBefore(icon, element.firstChild);
            element.addEventListener("click", () => {
              const mermaidContent = getMermaidContent(element);
              renderMermaidInModal(mermaidContent);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  loadMermaidLibrary(() => {
    processElements();
    window.addEventListener("load", processElements);
  });
})();
