const str = "测试JSX";
const html ='<div  style="color:red">html代码</div>'
export default function Jsx(){
    return <>
    <div>{str}</div>
    <div>{html}</div>
    <div dangerouslySetInnerHTML={{__html:html}}></div>
    </>
}