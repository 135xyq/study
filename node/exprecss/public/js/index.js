// fetch("/api/admin/login", {
//     method: 'post',
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         loginId: "xyq",
//         loginPwd: "123",
//     }),
// }).
// then(resp => resp.json()).
// then(resp => {
//     console.log(resp)
// })

fetch("/api/student/26", {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: "123",
        }),
    })
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
    });