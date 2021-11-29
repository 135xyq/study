// 获取更多列表内容

export default function() {
    return {
        computed: {
            isHasMore() {
                return this.data.rows.length < this.data.total;
            }
        },
        created() {
            this.$bus.$on("mainScroll", this.handleScroll);
        },
        destroyed() {
            this.$bus.$off("mainScroll", this.handleScroll);
        },
        methods: {
            // 评论加载下一页
            async showMore() {
                // 评论都已经加载完毕
                if (!this.isHasMore) {
                    return;
                }
                this.isLoading = true;
                this.pager++;
                const resp = await this.fetchData();
                this.data.total = resp.total;
                this.data.rows = this.data.rows.concat(resp.rows);
                this.isLoading = false;
            },
            handleScroll(dom) {
                if (this.isLoading || !dom) {
                    // 如果dom不存在或正在加载则直接返回
                    return;
                }
                const ranger = 100; //波动的范围
                const desc = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
                if (desc <= ranger) {
                    this.showMore();
                }
            }
        }
    }
}