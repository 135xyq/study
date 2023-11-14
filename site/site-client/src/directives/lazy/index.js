import imgUrl from '@/assets/lazy.jpg'; //先加载的图片地址
import bus from '@/eventBus.js'; //事件总线
import AntiShake from '@/utils/AntiShake'; //防抖

bus.$on('mainScroll', AntiShake(handleScroll, 50));

function handleScroll() {
    setImages();
}

// 调用该函数，开始处理每张图片
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

// 处理每一个图片
function setImage(img) {
    img.dom.src = imgUrl;

    const rect = img.dom.getBoundingClientRect(); //图片的矩形区域
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 150;

    // 在视口区域内
    if (rect.top >= -height && rect.top <= clientHeight) {
        // const tempImg = new Image();
        // tempImg.onload = () => {
        //     console.log(1)
        //     img.dom.src = img.src;
        // }
        // tempImg.src = img.src;
        img.dom.src = img.src;
        imgs = imgs.filter(i => { i !== img })
    }

}


let imgs = []; //存放要处理的img对象
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img);
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}