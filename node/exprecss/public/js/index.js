fetch("http:localhost:9527/api/student").
then(resp => resp.json()).
then(resp => {
    console.log(resp)
})