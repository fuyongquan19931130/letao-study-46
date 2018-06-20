$(function () {
	// 设置当前页面
	var page = 1;
	// 设置一个页面显示的数据数
	var pageSize = 10;
	// 设置总页面
	var totalPage = 0;

	// 获取数据
	getData();

	// 为上一页按钮添加点击事件
	$('#prev').on('click', function () {
		page--;
		if (page < 1) {
			page = 1;
			alert('已经是第一页了');
			return;
		}
		getData();
	});

	// 为下一页按钮添加点击事件
	$('#next').on('click', function () {
		page++;
		if (page > totalPage) {
			page = totalPage;
			alert('没有更多数据了');
			return;
		}
		getData();
	});


	// 获取数据
	function getData () {
		$.ajax({
			type: 'get',
			url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
			data: {
				page: page,
				pageSize: pageSize
			},
			success: function (response) {
				if (response.error) {
					location.href='login.html';
				}else{
					var html = template('tpl', response);
					$('#category-firstBox').html(html);
				}
				// 计算总页数
				totalPage = Math.ceil(response.total / pageSize);
			}
		});
	}

	// 为保存按钮添加点击事件
	$('#saveBtn').on('click', function () {
		// 获取输入框中的内容
		var categoryName = $.trim($('#add').val());
		// 非空判断
		if (!categoryName) {
			alert('请输入分类名称');
			return;
		}
		// 调用ajax发送增加数据请求
		$.ajax({
			type: 'post',
			url: `${APP.baseUrl}/category/addTopCategory`,
			data: {
				categoryName
			},
			success: function (resopnse) {
				//如果返回的是true
				if (resopnse.success) {
					// 刷新页面
					location.reload();
				} else {
					// 否则，弹出错误信息
					alert(resopnse.message);
				}
			}
		});
	});
});