// 获取远程数据
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData

/**
 * 
 * @param {*} dataContainer 远程获取到的数据
 * @returns 
 */
export default function(dataContainer = null) {
    return {
        data() {
            return {
                data: dataContainer,
                isLoading: true, //是否正在加载数据
            }
        },
        async created() {
            this.data = await this.fetchData(); //获取数据
            this.isLoading = false;
        }
    }
}