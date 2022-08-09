export default{
    render(creatElement){
        return creatElement('h' + this.level,[this.$slots.default,creatElement('p',
        'p内容')])
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
}