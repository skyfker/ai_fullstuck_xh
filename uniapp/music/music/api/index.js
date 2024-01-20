import baseUrl from './request.js';

// 首页的接口请求
export const apiGetBanner = (data) => {
	return uni.request({
		url: `${baseUrl}/banner`,
		method: 'GET',
		data,
	});
};
export const apiGetBall = () => {
	return uni.request({
		url: `${baseUrl}/homepage/dragon/ball`,
		method: 'GET',
	});
};

export const apiGetRecommendList = () => {
	return uni.request({
		url: `${baseUrl}/recommend/resource`,
		method: 'GET',
	});
};
