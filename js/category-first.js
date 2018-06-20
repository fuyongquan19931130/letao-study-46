$(function () {
	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10
		},
		success: function (response) {
			var html = template('tpl', response);
			$('#category-firstBox').html(html);
		}
	});

	$('#saveBtn').on('click', function () {
		var result = $('#add').serializeToJson();
		$.ajax({
			type: 'post',
			url: `${APP.baseUrl}/category/addTopCategory`,
			data: result,
			success: function (resopnse) {
				if (resopnse.success) {
					location.reload();
				} else {
					alert(resopnse.message);
				}
			}
		});
	});
});