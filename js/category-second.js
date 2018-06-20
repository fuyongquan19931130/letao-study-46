$(function () {
	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/category/querySecondCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10,
		},
		success: function (response) {
			console.log(response);
			var html = template('tpl', {
				list: response,
				api: APP.baseUrl
			});
			$('#category-secondBox').html(html);
		}
	});
});