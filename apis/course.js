import httpInstance from "../uilts/http";

export function getGradesListAPI(){
	return httpInstance({
		url:'/achievement',
		method:'get',
		data:{
			//获取课程名称，学分，绩点，成绩
		}
	})
}