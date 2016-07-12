$(document).ready(function() {

	$('.tabs_content').hide();
	$('.tabs_content:first').hide();

	$('ul.tabs li').click(function() {

		$('.tabs_content').hide();
		var activeTab = $(this).attr('rel');
		$('#' + activeTab).fadeIn();
		$('ul.tabs li').removeClass('active');
		$(this).addClass('active');

	});



	$.when(
		var1 = $.ajax({
			url: 'http://nphan-ld1:3000/api/desktop',
			success: function(data) {
				$.each(data, function(i, desktop){
					
				});
			}
		}),
		var2 = $.ajax({
			url: 'http://nphan-ld1:3000/api/laptop',
			success: function(data) {
				$.each(data, function(i, laptop){
					
				});
			}
		}),
		var3 = $.ajax({
			url: 'http://nphan-ld1:3000/api/apple',
			success: function(data) {
				$.each(data, function(i, apple){
					
				});
			}
		}),
		var4 = $.ajax({
			url: 'http://nphan-ld1:3000/api/windows',
			success: function(data) {
				$.each(data, function(i, windows){
					
				});
			}
		}),
		var5 = $.ajax({
			url: 'http://nphan-ld1:3000/api/other',
			success: function(data) {
				$.each(data, function(i, other){
					
				});
			}
		})
		).then(function(var1, var2, var3, var4, var5){
			listDesktop = var1[0];
			listLaptop = var2[0];
			listApple = var3[0];
			listWindows = var4[0];
			listOther = var5[0];

		$('#desktop').dataTable({
			responsive: true,
			data: listDesktop,
			dataSrc: 'data',
			columns: [
				{data: 'desktop.name'},
				{data: 'desktop.office.NewYork.amount'},
				{data: 'desktop.office.Sunnyvale.amount'},
				{data: 'desktop.office.MountainView.amount'},
				{data: 'desktop.office.SanFrancisco.amount'},
				{data: 'desktop.office.Carpinteria.amount'},
				{data: 'desktop.comments'}
			]
		});

		$('#laptop').dataTable({
			data: listLaptop,
			dataSrc: 'data',
		columns: [
			{data: 'laptop.name'},
				{data: 'laptop.office.NewYork.amount'},
				{data: 'laptop.office.Sunnyvale.amount'},
				{data: 'laptop.office.MountainView.amount'},
				{data: 'laptop.office.SanFrancisco.amount'},
				{data: 'laptop.office.Carpinteria.amount'},
				{data: 'laptop.comments'}
		]
		});

		$('#apple').dataTable({
			data: listApple,
			dataSrc: 'data',
		columns: [
			{data: 'apple_perif.name'},
				{data: 'apple_perif.office.NewYork.amount'},
				{data: 'apple_perif.office.Sunnyvale.amount'},
				{data: 'apple_perif.office.MountainView.amount'},
				{data: 'apple_perif.office.SanFrancisco.amount'},
				{data: 'apple_perif.office.Carpinteria.amount'},
				{data: 'apple_perif.comments'}
		]
		});

		$('#windows').dataTable({
			data: listWindows,
			dataSrc: 'data',
		columns: [
			{data: 'windows_perif.name'},
				{data: 'windows_perif.office.NewYork.amount'},
				{data: 'windows_perif.office.Sunnyvale.amount'},
				{data: 'windows_perif.office.MountainView.amount'},
				{data: 'windows_perif.office.SanFrancisco.amount'},
				{data: 'windows_perif.office.Carpinteria.amount'},
				{data: 'windows_perif.comments'}
		]
		});

		$('#other').dataTable({
			data: listOther,
			dataSrc: 'data',
		columns: [
			{data: 'other_perif.name'},
				{data: 'other_perif.office.NewYork.amount'},
				{data: 'other_perif.office.Sunnyvale.amount'},
				{data: 'other_perif.office.MountainView.amount'},
				{data: 'other_perif.office.SanFrancisco.amount'},
				{data: 'other_perif.office.Carpinteria.amount'},
				{data: 'other_perif.comments'}
		]
		});
		debugger;
	});
});