import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
	//后端接口地址
  baseURL: "https://localhost:7156", // api 的 base_url
  timeout: 60000, // 请求超时时间
})
// request拦截器
httpInstance.interceptors.request.use((config) => {
    try{
      config.data = JSON.parse(config.data)
    }catch(e){
      //TODO handle the exception
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// response 拦截器
httpInstance.interceptors.response.use(
(response) => {
    return new Promise((resolve, reject) => {
      const res = response.data 
      // 正常数据返回
      resolve(response.data)
    })
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
      case 400: errorObj.message = '(c1400)' ; break; // 请求错误
      case 401: errorObj.message = '(c1401)'; break; // 未授权
      case 403: errorObj.message = '(c1403)'; break; // 拒绝访问
      case 404: errorObj.message = '(c1404)'; break; // 请求出错
      case 408: errorObj.message = '(c1408)'; break; // 请求超时
      case 500: errorObj.message = '(c1500)'; break; // 服务器错误
      case 501: errorObj.message = '(c1501)'; break; // 服务未实现
      case 502: errorObj.message = '(c1502)'; break; // 网络错误
      case 503: errorObj.message = '(c1503)'; break; // 服务不可用
      case 504: errorObj.message = '(c1504)'; break; // 网络超时
      case 505: errorObj.message = '(c1505)'; break; // HTTP版本不受支持
      default: errorObj.message = `连接出错(${error.response.status})!` // 连接出错
      }
    }else{
      errorObj.message = '(c3289)'
    }
    uni.hideToast();
    uni.showToast({
      title: '网络繁忙,请稍后再试',
      duration: 2000,
      icon: 'none'
    });
    Promise.reject(error)
    return errorObj
  }
)
//用来适配uniapp的语法
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: buildURL(config.url, config.params, config.paramsSerializer),
			// url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}

export default httpInstance