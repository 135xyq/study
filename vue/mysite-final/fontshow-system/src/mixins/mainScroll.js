// 监听滚动轴和回到顶部
export default function(ref) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handlerToTop);
            this.$refs[ref].addEventListener("scroll", this.handlerScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[ref].removeEventListener(
                "scroll",
                this.handlerScroll
            );
            this.$bus.$off("setMainScroll", this.handlerToTop);
        },
        methods: {
            handlerToTop(scrollTop) {
                // 回到顶部
                this.$refs[ref].scrollTop = scrollTop;
            },
            handlerScroll() {
                this.$bus.$emit("mainScroll", this.$refs[ref]);
            },
        }
    }
}