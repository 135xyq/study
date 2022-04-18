import Icon from '@/components/Icon';
import getComponentRootDom from '@/utils/getComponentRootDom';
import style from './index.module.less';
// 弹出网页的提示消息
/**
 * 
 * @param {Object} options 配置对象
 * @param {String} options.content 消息内容
 * @param {String} options.type 消息的类型 info success warn error
 * @param {Number} options.duration 消息弹框消失的时间
 * @param {Dom} options.container 弹出框所在的DOM对象
 * @param {Function} options.callback 回调函数
 */
export default function(options) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div");
    const iconRoot = getComponentRootDom(Icon, {
        type,
    })

    div.innerHTML = `<span class="${style.icon}">${iconRoot.outerHTML}</span><span>${content}</span>`;
    div.className = `${style.message} ${style["message-"+type]}`;

    // 判断父容器是否设置了定位
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }
    container.appendChild(div);
    // 浏览器强行渲染
    div.clientHeight; // 导致reflow

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = `translate(-50%, -50%) translateY(-100px)`;
        div.addEventListener('transitionend', () => {
            div.remove();
            // 回调函数
            options.callback && options.callback();
        }, { once: true });
    }, duration);
}