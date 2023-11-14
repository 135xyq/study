import imgUrl from '@/assets/loading.svg';
import styles from './index.module.less';
// 判断是否生成了img元素
function excitedImage(el) {
    return el.querySelector('img[data-load = true]');
}
// 生成一个img元素
function createImage() {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.dataset.load = "true";
    img.className = styles.load;
    return img;
}

export default function(el, binding) {
    let img = excitedImage(el);
    if (binding.value) {
        if (!img) {
            el.appendChild(createImage());
        }
    } else {
        if (img) {
            img.remove();
        }
    }

}