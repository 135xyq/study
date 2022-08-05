export default  async function login(loginId, loginPwd) {
	let result = await fetch("/api/admin/login", {
		method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
		body: JSON.stringify({
			password: loginPwd,
			userName: loginId,
		}),
	}).then(res=>res.json()).then(resp=>{
        return resp
    })

    return result;
}
