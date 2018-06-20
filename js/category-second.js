$(function () {
	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/category/querySecondCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10,
			api: APP.baseUrl
		},
		success: function (response) {
			console.log(response);
			var html = template('tpl', response);
			$('#category-secondBox').html(html);
		}
	});
});