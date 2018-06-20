$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

// 全局配置
var APP = {
	// 配置接口基础路径
	baseUrl: 'http://fullstack.net.cn:3000'
	// baseUrl: 'http://localhost:3000'
}

$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});

// 获取页面表单中的数据
$.fn.serializeToJson = function () {
	var formAry = this.serializeArray();
	var result = {};
	formAry.forEach(function (item) {
		result[item.name] = item.value;
	});
	return result;
}

// 获取地址栏中的id
function getUrlParams (name) {
	
	var search = location.search.slice(1);
	var ary1 = search.split('&');

	for (var i = 0; i < ary1.length; i++) {
		var ary2 = ary1[i].split('=');
		if (ary2[0] == name) {
			return ary2[1];
		}
	}

	return -1;	

}