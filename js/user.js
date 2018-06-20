// 判断管理员当前登录状态
$.ajax({
	type: 'get',
	url: `${APP.baseUrl}/employee/checkRootLogin`,
	async: false,
	success: function (response) {
		if(response.error) {
			location.href = 'login.html';
		}
	}
});
$(function () {
	// 发送ajax请求获取数据
	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/user/queryUser`,
		data: {
			page: 1,
			pageSize: 150
		},
		success: function (response) {
			// 模板引擎渲染数据
			var html = template('tpl', response);
			$('#userBox').html(html);
		}
	});

	// 为changeBtn按钮添加点击事件
	$('#userBox').on('click', '#changeBtn', function () {
		// 获取当前数据的id值
		var id = $(this).attr('data-id');
		// 获取当前数据的isDelete值
		var isDelete = $(this).attr('data-isdelete');
		// 发送ajax请求更改数据
		$.ajax({
			type: 'post',
			url: `${APP.baseUrl}/user/updateUser`,
			data: {
				id: id,
				isDelete: isDelete == 1?0:1 
			},
			success: function (response) {
				if (response.success) {
					location.reload();
				} else {
					alert(response.message);
				}
			}
		});
	});
});