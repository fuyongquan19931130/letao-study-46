$(function () {
	// 为登录按钮添加点击事件
	$('#loginBtn').on('click', function () {
		// 获取用户输入表单的数据
		var result = $('#loginForm').serializeToJson();	
		// 验证用户是否输入用户名
		if (!$.trim(result.username)) {
			alert('请输入用户名');
			return;
		}
		// 验证用户是否输入密码
		if (!$.trim(result.password)) {
			alert('请输入密码');
			return;
		}
		// 发送登录请求
		$.ajax({
			type: 'post',
			url: `${APP.baseUrl}/employee/employeeLogin`,
			data: result,
			success: function (response) {
				if (response.success) {
					// 登录成功
					location.href = 'user.html';
				} else {
					// 登录失败
					alert(response.message);
				}
			}
		});
	});
});