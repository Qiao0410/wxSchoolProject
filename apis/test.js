import httpInstance from "../uilts/http";

export function getCityAPI (){
	return httpInstance({
		url:'/test',
		method:'get'
	})
}