import httpInstance from "../uilts/http";

export function getUserAPI() {
	return httpInstance({
		url:'/user/login',
		method:'POST',
		data:{
			username,
			password
		}
	})
}