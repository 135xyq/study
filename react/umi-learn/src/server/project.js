export function getProject(){
    return fetch("/api/project?page=1&limit=100").then(resp=>resp.json()).then(res=>{
        return res;
    })
}