$(document).ready(function() {
//top nav bar sticky to top of page ---------------------------
	// function sticky_relocate() {
	//       var window_top = jQuery(window).scrollTop() + 0;
	//       var div_top = jQuery('#sticky-anchor').offset().top;
	//       if (window_top > div_top)
	//         jQuery('#header').addClass('sticky')
	//       else
	//         jQuery('#header').removeClass('sticky');
	//       }
	     
	//    jQuery(function() {
	//       jQuery(window).scroll(sticky_relocate);
	//       sticky_relocate();
	//       });

// load nav menu --------------------------------------------
	$(function() {
	 //$('.container').load('nav.html');
	 $('.container').tabs();
	});


// SORT TABLE -----------------------------------------------
function sortTable(f,n){
    var rows = $('#output tbody tr').get();

    rows.sort(function(a, b) {

        var A = getVal(a);
        var B = getVal(b);

        if(A < B) {
            return -1*f;
        }
        if(A > B) {
            return 1*f;
        }
        return 0;
    });

    function getVal(elm){
        var v = $(elm).children('td').eq(n).text().toUpperCase();
        if($.isNumeric(v)){
            v = parseInt(v,10);
        }
        return v;
    }

    $.each(rows, function(index, row) {
        $('#output').children('tbody').append(row);
});
}
var f_sl = 1; // flag to toggle the sorting order
var f_nm = 1; // flag to toggle the sorting order
$("#sl").click(function(){
    f_sl *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_sl,n); 
}); //add more header name to make it sortable
// $("#nm").click(function(){
//     f_nm *= -1; // toggle the sorting order
//     var n = $(this).prevAll().length;
//     sortTable(f_nm,n);
// });



// DATA TABLE ---------------------------------------------------------------------------------------------------------
	
// // -----------------ALL ITEM LISTING-----------------
// 	$.ajax({
// 		url: '/api/api',
// 		type: 'GET',
// 		dataType: 'json',
// 		success: function(text) {
// 			console.log(text);
// 			//debugger;
// 			$.each(text, function(i, data){	
//           $('#output').append(
//           	"<tr><td>" + 
// 	          	"<span class='itemName'>"+data.item.name+"</span>" + 
// 				"<input type='text' hidden class='name onEdit'/>" +
// 				"<button data-id='"+data._id+"' id='remove'></button>" +
//           	"</td><td>" + 
// 	          	"<label>Sunnyvale</label>" +
// 	          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.item.office.Sunnyvale.amount+"'>"+data.item.office.Sunnyvale.amount+"</span>" + 
// 	          	"<button class='edit onEdit' name='edit'></button>" +
// 	          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
//           		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
//           		"<li><button class='cancel noEdit'>Cancel</button>" + 
//           		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
//           	"</td><td>" + 
// 	          	"<label>Mt. View</label>" +
// 	          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.item.office.MountainView.amount+"'>"+data.item.office.MountainView.amount+"</span>" +
// 	          	"<button class='edit onEdit' name='edit'></button>" +
// 	          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
// 	          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
// 	          	"<button class='cancel noEdit'>Cancel</button>" + 
// 	          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
//           	"</td><td>" + 
// 	          	"<label>San Francisco</label>" +
// 	          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.item.office.SanFrancisco.amount+"'>"+data.item.office.SanFrancisco.amount+"</span>" +
// 	          	"<button class='edit onEdit' name='edit'></button>" +
// 	          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
// 	          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
// 	          	"<button class='cancel noEdit'>Cancel</button>" + 
// 	          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
//           	"</td><td>" + 
// 	          	"<label>New York</label>" +
// 	          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.item.office.NewYork.amount+"'>"+data.item.office.NewYork.amount+"</span>" +
// 	          	"<button class='edit onEdit' name='edit'></button>" +
// 	          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
// 	          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
// 	          	"<button class='cancel noEdit'>Cancel</button>" + 
// 	          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
//           	"</td><td>" + 
// 	          	"<label>Carpinteria</label>" +
// 	          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.item.office.Carpinteria.amount+"'>"+data.item.office.Carpinteria.amount+"</span>" +
// 	          	"<button class='edit onEdit' name='edit'></button>" +
// 	          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
// 	          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
// 	          	"<button class='cancel noEdit'>Cancel</button>" + 
// 	          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
//           	"</td><td>" + 
//           	"<span class='lastComment'>"+data.item.comments+"</span>" +
//           	"</td></tr>");
			
// 			}); 
// 		}
// 	});

$.ajax({
			url: '/api/desktop',
			type: 'GET',
			dataType: 'json',
			success: function(text) {
			  $.each(text, function(i, data){
	          $("#output").append(
	           "<tr><td>" +
	          		"<label>Desktop</label>" +
		          	"<span class='itemName'>"+data.desktop.name+"</span>" +
					"<input type='text' hidden class='name onEdit'/>" +
					// "<button data-id='"+data._id+"' id='remove'></button>" +
	          	"</td><td>" +
		          	"<label>Sunnyvale</label>" +
		          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.desktop.office.Sunnyvale.amount+"'>"+data.desktop.office.Sunnyvale.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
	          		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
	          		"<li><button class='cancel noEdit'>Cancel</button>" +
	          		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Mt. View</label>" +
		          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.desktop.office.MountainView.amount+"'>"+data.desktop.office.MountainView.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>San Francisco</label>" +
		          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.desktop.office.SanFrancisco.amount+"'>"+data.desktop.office.SanFrancisco.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>New York</label>" +
		          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.desktop.office.NewYork.amount+"'>"+data.desktop.office.NewYork.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Carpinteria</label>" +
		          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.desktop.office.Carpinteria.amount+"'>"+data.desktop.office.Carpinteria.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
	          	"<span class='lastComment'>"+data.desktop.comments+"</span>" +
	          	"</td></tr>");
				});
			}
		});

// -----------------ALL LAPTOP LISTING-----------------
$.ajax({
			url: '/api/laptop',
			type: 'GET',
			dataType: 'json',
			success: function(text) {
			  $.each(text, function(i, data){
	          $("#output").append(
	          	"<tr><td>" +
	          		"<label>Laptop</label>" +
		          	"<span class='itemName'>"+data.laptop.name+"</span>" +
					"<input type='text' hidden class='name onEdit'/>" +
					// "<button data-id='"+data._id+"' id='remove'></button>" +
	          	"</td><td>" +
		          	"<label>Sunnyvale</label>" +
		          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.laptop.office.Sunnyvale.amount+"'>"+data.laptop.office.Sunnyvale.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
	          		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
	          		"<li><button class='cancel noEdit'>Cancel</button>" +
	          		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Mt. View</label>" +
		          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.laptop.office.MountainView.amount+"'>"+data.laptop.office.MountainView.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>San Francisco</label>" +
		          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.laptop.office.SanFrancisco.amount+"'>"+data.laptop.office.SanFrancisco.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>New York</label>" +
		          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.laptop.office.NewYork.amount+"'>"+data.laptop.office.NewYork.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Carpinteria</label>" +
		          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.laptop.office.Carpinteria.amount+"'>"+data.laptop.office.Carpinteria.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
	          	"<span class='lastComment'>"+data.laptop.comments+"</span>" +
	          	"</td></tr>");

				});
			}
		});

// -----------------ALL APPLE PERIF LISTING-----------------
$.ajax({
			url: '/api/apple',
			type: 'GET',
			dataType: 'json',
			success: function(text) {
			  $.each(text, function(i, data){
	          $("#output").append(
	          	"<tr><td>" +
	          		"<label>Apple</label>" +
		          	"<span class='itemName'>"+data.apple_perif.name+"</span>" +
					"<input type='text' hidden class='name onEdit'/>" +
					// "<button data-id='"+data._id+"' id='remove'></button>" +
	          	"</td><td>" +
		          	"<label>Sunnyvale</label>" +
		          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.apple_perif.office.Sunnyvale.amount+"'>"+data.apple_perif.office.Sunnyvale.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
	          		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
	          		"<li><button class='cancel noEdit'>Cancel</button>" +
	          		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Mt. View</label>" +
		          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.apple_perif.office.MountainView.amount+"'>"+data.apple_perif.office.MountainView.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>San Francisco</label>" +
		          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.apple_perif.office.SanFrancisco.amount+"'>"+data.apple_perif.office.SanFrancisco.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>New York</label>" +
		          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.apple_perif.office.NewYork.amount+"'>"+data.apple_perif.office.NewYork.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Carpinteria</label>" +
		          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.apple_perif.office.Carpinteria.amount+"'>"+data.apple_perif.office.Carpinteria.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
	          	"<span class='lastComment'>"+data.apple_perif.comments+"</span>" +
	          	"</td></tr>");

				});
			}
		});

// -----------------ALL WINDOWS PERIF LISTING-----------------
$.ajax({
			url: '/api/windows',
			type: 'GET',
			dataType: 'json',
			success: function(text) {
			  $.each(text, function(i, data){
	          $("#output").append(
	          	"<tr><td>" +
	          		"<label>Windows</label>" +
		          	"<span class='itemName'>"+data.windows_perif.name+"</span>" +
					"<input type='text' hidden class='name onEdit'/>" +
					// "<button data-id='"+data._id+"' id='remove'></button>" +
	          	"</td><td>" +
		          	"<label>Sunnyvale</label>" +
		          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.windows_perif.office.Sunnyvale.amount+"'>"+data.windows_perif.office.Sunnyvale.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
	          		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
	          		"<li><button class='cancel noEdit'>Cancel</button>" +
	          		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Mt. View</label>" +
		          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.windows_perif.office.MountainView.amount+"'>"+data.windows_perif.office.MountainView.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>San Francisco</label>" +
		          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.windows_perif.office.SanFrancisco.amount+"'>"+data.windows_perif.office.SanFrancisco.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>New York</label>" +
		          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.windows_perif.office.NewYork.amount+"'>"+data.windows_perif.office.NewYork.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Carpinteria</label>" +
		          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.windows_perif.office.Carpinteria.amount+"'>"+data.windows_perif.office.Carpinteria.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
	          	"<span class='lastComment'>"+data.windows_perif.comments+"</span>" +
	          	"</td></tr>");

				});
			}
		});

// -----------------ALL OTHER PERIF LISTING-----------------
$.ajax({
			url: '/api/other',
			type: 'GET',
			dataType: 'json',
			success: function(text) {
			  $.each(text, function(i, data){
	          $("#output").append(
	          	"<tr><td>" +
	          		"<label>Other</label>" +
		          	"<span class='itemName'>"+data.other_perif.name+"</span>" +
					"<input type='text' hidden class='name onEdit'/>" +
					// "<button data-id='"+data._id+"' id='remove'></button>" +
	          	"</td><td>" +
		          	"<label>Sunnyvale</label>" +
		          	"<span class='currentSvAmount' name='currentAmount' value-id='"+data.other_perif.office.Sunnyvale.amount+"'>"+data.other_perif.office.Sunnyvale.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='svAmount' class='amount noEdit'/>" + "\n" +
	          		"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
	          		"<li><button class='cancel noEdit'>Cancel</button>" +
	          		"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Mt. View</label>" +
		          	"<span class='currentMtvAmount' name='currentAmount' value-id='"+data.other_perif.office.MountainView.amount+"'>"+data.other_perif.office.MountainView.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='mtvAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>San Francisco</label>" +
		          	"<span class='currentSfAmount' name='currentAmount' value-id='"+data.other_perif.office.SanFrancisco.amount+"'>"+data.other_perif.office.SanFrancisco.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='sfAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>New York</label>" +
		          	"<span class='currentNyAmount' name='currentAmount' value-id='"+data.other_perif.office.NewYork.amount+"'>"+data.other_perif.office.NewYork.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='nyAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
		          	"<label>Carpinteria</label>" +
		          	"<span class='currentCarpAmount' name='currentAmount' value-id='"+data.other_perif.office.Carpinteria.amount+"'>"+data.other_perif.office.Carpinteria.amount+"</span>" +
		          	"<button class='edit onEdit' name='edit'></button>" +
		          	"<ul><li><input type='Number' name='carpAmount' class='amount noEdit'/>" + "\n" +
		          	"<input type='text' name='comment' placeholder='Comment' class='commentEdit noEdit'/></li>" +
		          	"<button class='cancel noEdit'>Cancel</button>" +
		          	"<button data-id='"+data._id+"' class='saveEdit noEdit'>Save</button></li></ul>" +
	          	"</td><td>" +
	          	"<span class='lastComment'>"+data.other_perif.comments+"</span>" +
	          	"</td></tr>");

					// HIGHLIGHT RED IF ITEM COUNT IS LESS THAN CERTAIN AMOUNT
					var table = document.getElementById("output").getElementsByTagName("span");
						for (var i = 1; i < table.length; i++) {
							var cell = table[i];
							if (cell.innerHTML <= 50) {
								cell.style.color = 'red';
								cell.style.fontWeight ='bold';
							}
						}

				});
			}
		});

//Highlight selected row

// $("#output").delegate('tbody tr', 'click', function() {
// 	var selected = $(this).closest('tr').hasClass("selectedRow");
// 	$("#output tbody tr").removeClass("selectedRow");
// 	if (!selected) {
// 		$(this).closest('tr').addClass("selectedRow");
// 	}
// });

// FILTER CATEGORIES--------------------------------------------------------
$(".categoryTab").delegate('input[name="catTab"]', 'click', function() {
	var buttonValue = $(this).val();
	$("#output tbody tr").each(function() {
		var row = $(this);
		var rowValue = $(this).find('td:first label').text();
		if ( buttonValue != rowValue) {
			row.hide();
		} else {
			row.show();
		}
	}); 
});


	//ADD NEW ITEM -----------------------------------------------------------------------------------------------------
	$(function() {
		var table = $("#form");
		var selectCat = document.getElementById("selectCat");
		selectCat.onchange = function() {
			var row = table.find('tr');
			table.show();
			$(".submitClear").show();
			if (selectCat.selectedIndex == 1 ) {
				row[0].style.backgroundColor = '#00A0DC';
				row[0].cells[0].innerHTML = "Add " + selectCat[1].value;	
			} else if (selectCat.selectedIndex == 2 ) {
				row[0].style.backgroundColor = '#8D6CAB';
				row[0].cells[0].innerHTML = "Add " + selectCat[2].value;	
			} else if (selectCat.selectedIndex == 3 ) {
				row[0].style.backgroundColor = '#DD5143';
				row[0].cells[0].innerHTML = "Add " + selectCat[3].innerHTML;	
			} else if (selectCat.selectedIndex == 4 ) {
				row[0].style.backgroundColor = '#E68523';
				row[0].cells[0].innerHTML = "Add " + selectCat[4].innerHTML;	
			} else {
				row[0].style.backgroundColor = '#5B912D';
				row[0].cells[0].innerHTML = "Add " + selectCat[5].value;
			}
		}
	});

	$('.submit').on('click', function(){
		userName = prompt("Enter your name.");
	 	if (userName == "" || userName == null) {
	 		return false;
	 	};

		$('#form tbody tr input.name').each(function(){
				if ( $(this).val() == "" || $(this).val() == null ) {
					return $(this);
				};

				$tr = $(this).closest('tr');
			    $name = $tr.find('td:first input').val();
			    $svAmount = $tr.find('td:nth-child(2) input').val();
			    $mtvAmount = $tr.find('td:nth-child(3) input').val();
			    $sfAmount = $tr.find('td:nth-child(4) input').val();
			    $nyAmount = $tr.find('td:nth-child(5) input').val();
			    $carpAmount = $tr.find('td:nth-child(6) input').val();
				$newDate = new Date();
				$currentDate = $newDate.toLocaleDateString();
				$currentTime = $newDate.toLocaleTimeString();

		    var desktop =
			    {	
					"desktop": {
		    			"name": $name,
		    			"comments": "Newly Added by " + userName,
		    			"modified": $currentDate + " " + $currentTime, 
		    			"office": {
				            "Carpinteria": {
				                "amount": $carpAmount
				            },
				            "NewYork": {
				                "amount": $nyAmount
				            },
				            "MountainView": {
				                "amount": $mtvAmount
				            },
				            "SanFrancisco": {
			                "amount": $sfAmount
			            	},
				            "Sunnyvale": {
				                "amount": $svAmount
				            }
				        }
				    }
				}

			var addLogs = {
				"logs" : {
					"name": $name,
					"modified": $currentDate + "  " + $currentTime,
	    			"comments": "Newly added by " + userName,
	    			"office": {
			            "Carpinteria": {
			                "amount": $carpAmount
			            },
			            "NewYork": {
			                "amount": $nyAmount
			            },
			            "MountainView": {
			                "amount": $mtvAmount
			            },
			            "SanFrancisco": {
			                "amount": $sfAmount
			            },
			            "Sunnyvale": {
			                "amount": $svAmount
			            }
			        }
				}
			}

			var laptop = {
				"laptop" : {
					"name": $name,
					"modified": $currentDate + "  " + $currentTime,
	    			"comments": "Newly added by " + userName,
	    			"office": {
			            "Carpinteria": {
			                "amount": $carpAmount
			            },
			            "NewYork": {
			                "amount": $nyAmount
			            },
			            "MountainView": {
			                "amount": $mtvAmount
			            },
			            "SanFrancisco": {
			                "amount": $sfAmount
			            },
			            "Sunnyvale": {
			                "amount": $svAmount
			            }
			        }
				}
			}

			var apple_perif = {
				"apple_perif" : {
					"name": $name,
					"modified": $currentDate + "  " + $currentTime,
	    			"comments": "Newly added by " + userName,
	    			"office": {
			            "Carpinteria": {
			                "amount": $carpAmount
			            },
			            "NewYork": {
			                "amount": $nyAmount
			            },
			            "MountainView": {
			                "amount": $mtvAmount
			            },
			            "SanFrancisco": {
			                "amount": $sfAmount
			            },
			            "Sunnyvale": {
			                "amount": $svAmount
			            }
			        }
				}
			}

			var windows_perif = {
				"windows_perif" : {
					"name": $name,
					"modified": $currentDate + "  " + $currentTime,
	    			"comments": "Newly added by " + userName,
	    			"office": {
			            "Carpinteria": {
			                "amount": $carpAmount
			            },
			            "NewYork": {
			                "amount": $nyAmount
			            },
			            "MountainView": {
			                "amount": $mtvAmount
			            },
			            "SanFrancisco": {
			                "amount": $sfAmount
			            },
			            "Sunnyvale": {
			                "amount": $svAmount
			            }
			        }
				}
			}

			var other_perif = {
				"other_perif" : {
					"name": $name,
					"modified": $currentDate + "  " + $currentTime,
	    			"comments": "Newly added by " + userName,
	    			"office": {
			            "Carpinteria": {
			                "amount": $carpAmount
			            },
			            "NewYork": {
			                "amount": $nyAmount
			            },
			            "MountainView": {
			                "amount": $mtvAmount
			            },
			            "SanFrancisco": {
			                "amount": $sfAmount
			            },
			            "Sunnyvale": {
			                "amount": $svAmount
			            }
			        }
				}
			}
			

		// POST NEW ITEMS	

		var activeCategory = document.getElementById("selectCat");
		var schema = [];
		var apiPath = [];

		if ( activeCategory.selectedIndex == 1 ){
			schema.push(desktop);
			apiPath.push('/api/desktop');
		} else if ( activeCategory.selectedIndex == 2 ) {
			schema.push(laptop);
			apiPath.push('api/laptop');
		} else if ( activeCategory.selectedIndex == 3 ) {
			schema.push(apple_perif);
			apiPath.push('/api/apple');
		} else if ( activeCategory.selectedIndex == 4 ) {
			schema.push(windows_perif);
			apiPath.push('/api/windows');
		} else if ( activeCategory.selectedIndex == 5 ) {
			schema.push(other_perif);
			apiPath.push('/api/other');
		} else {
			alert("Select Category!");
			return false;
		}

		$.ajax({
				url: apiPath,
				type: 'post',
				data: JSON.stringify(schema),
				contentType: 'application/json; charset=utf-8',
				dataType: 'JSON',
				success: function(b) {
					if (b == "null") {
						b == "0";
					}; 
					// location.reload();		
				}
			});

		// if (activeCategory=="Desktops") {
		// 	$.ajax({
		// 		url: '/api/api',
		// 		type: 'post',
		// 		data: JSON.stringify(product),
		// 		contentType: 'application/json; charset=utf-8',
		// 		dataType: 'JSON',
		// 		success: function(b) {
		// 			if (b == "null") {
		// 				b == "0";
		// 			}; 
		// 			// location.reload();		
		// 		}
		// 	}); 
		// }else if (activeCategory == "Laptops") {
		// 	$.ajax({
		// 		url: '/api/api',
		// 		type: 'post',
		// 		data: JSON.stringify(laptops),
		// 		contentType: 'application/json; charset=utf-8',
		// 		dataType: 'JSON',
		// 		success: function(b) {
		// 			if (b == "null") {
		// 				b == "0";
		// 			}; 
		// 			// location.reload();		
		// 		}
		// 	});
		// } else {
		// alert('Select Category!');
		// return false;
		// } debugger;

		// POST NEW ITEM LOGS
			$.ajax({
				url: '/api/logs/',
				type: 'post',
				data: JSON.stringify(addLogs),
				contentType: 'application/json; charset=utf-8',
				dataType: 'JSON',
				success: function() {
				location.reload();	
				}
			});
		});
			return true;
	}); 

	// ADD MORE FIELDS 
	$("#form").delegate('.addAnother', 'click', function() {
		$tr = $(this).closest('tr').next('tr').show();
		$(this).closest('tr').find('.addAnother').hide();
	});

	// CLEAR ADD FIELDS
	$(".clear").on('click', function() {
		$tr = $("#form tbody tr");
		$tr.find('input.name').val("");
		$tr.find("input[name='amount']").val(0);
		$tr.not(':first').hide();
		$tr.find('input.addAnother').show();
	});

	//FOCUS INPUT ON HOVER
	$("#form").delegate('td:nth-child(n+2) input', 'mouseover', function() {
		$(this).focus();
		var val = $(this).val();
		$(this).val("");
		$(this).on('mouseleave', function() {
			var editVal = $(this).val();
			if (editVal == "") {
				$(this).val(val);
			}else{
				val = editVal;
			}	
		});
	});

	//DELETE ITEM -----------------------------------------------------------------
	$('#output').delegate('#remove', 'click', function(){
			// CONFIRM DELETE ITEM
			$confirmDelete = confirm("DELETE:  " +
				$(this).closest('td').find('span.itemName').text().toUpperCase() + " ?\n"
			)
			if ($confirmDelete == true) {

			} else {
				return false;
			}
			// LOG DELETE
				$tr = $(this).closest('tr');
				$name = $(this).closest('td').find('span.itemName').text();
				$svCurrent = parseInt($tr.find('span.currentSvAmount').attr('value-id'));
				$mtvCurrent = parseInt($tr.find('span.currentMtvAmount').attr('value-id'));
			    $sfCurrent = parseInt($tr.find('span.currentSfAmount').attr('value-id'));
				$nycCurrent = parseInt($tr.find('span.currentNyAmount').attr('value-id'));
				$carpCurrent = parseInt($tr.find('span.currentCarpAmount').attr('value-id'));
				$newDate = new Date();
				$currentDate = $newDate.toLocaleDateString();
				$currentTime = $newDate.toLocaleTimeString();

				var deleteItem = {
					"logs" : {
						"name": $name,
						"modified": $currentDate + "  " + $currentTime,
		    			"comments": "ITEM DELETED",
		    			"office": {
				            "Carpinteria": {
				                "amount": $carpCurrent 
				            },
				            "NewYork": {
				                "amount": $nycCurrent 
				            },
				            "MountainView": {
				                "amount": $mtvCurrent 
				            },
				            "SanFrancisco": {
				                "amount": $sfCurrent 
				            },
				            "Sunnyvale": {
				                "amount": $svCurrent
				            }
				        }
					}
				}

				$.ajax({
				type: 'post',
				data: JSON.stringify(deleteItem),
				contentType: 'application/json; charset=utf-8',
				url: '/api/logs/',
				dataType: 'JSON',
				success: function() {
					}
				});

				$categoryDelete = $(this).closest('td').find('label').text();

			// //DELETE ITEM
			// 	$.ajax({
			// 		type: 'DELETE',
			// 		url: '/api/api/' + $(this).attr('data-id'),
			// 		success: function(){
			// 		location.reload();
			// 		}
			// 	});

				if ( $categoryDelete == "Desktop" ) {
					//DELETE ITEM
					$.ajax({
						type: 'DELETE',
						url: '/api/desktop/' + $(this).attr('data-id'),
						success: function(){
						location.reload();
						}
					});
				} else if ( $categoryDelete == "Laptop" ) {
					//DELETE ITEM
					$.ajax({
						type: 'DELETE',
						url: '/api/laptop/' + $(this).attr('data-id'),
						success: function(){
						location.reload();
						}
					});
				} else if ( $categoryDelete == "Apple" ) {
					//DELETE ITEM
					$.ajax({
						type: 'DELETE',
						url: '/api/apple/' + $(this).attr('data-id'),
						success: function(){
						location.reload();
						}
					});
				} else if ( $categoryDelete == "Windows" ) {
					//DELETE ITEM
					$.ajax({
						type: 'DELETE',
						url: '/api/windows/' + $(this).attr('data-id'),
						success: function(){
						location.reload();
						}
					});
				} else {
					//DELETE ITEM
					$.ajax({
						type: 'DELETE',
						url: '/api/other/' + $(this).attr('data-id'),
						success: function(){
						location.reload();
						}
					});
				} 
				return true;
	});





	//EDIT ITEM -----------------------------------------------------------------------

		$("#output").delegate('.edit', 'click', function() {
			var $td = $(this).closest('td');
			var $tr = $(this).closest('tr');

			// var amount = prompt("what the amount!?");
			// var comments = prompt("what's this for?");
			$("#output tbody").find('td').removeClass('onEdit');
			$td.addClass('onEdit');
			$td.find('input.amount').focus();
			$tr.find('input.name').val( $tr.find('span.itemName').html() );
			$tr.find("td:nth-child(n+2) input").val(0);
			$td.find('input').val("");
			// $td.find('input.amount').val(amount);
			// $td.find('input.commentEdit').val(comments);
			//move to next input when "Enter/Return" key is pressed
			$td.find('input.amount').keyup(function(key) {
				if ( key.keyCode == 13) {
					$td.find('input.commentEdit').focus();
				};
			});
			//Submit form on "Enter/Return" key
			$td.find('input.commentEdit').keyup(function(key) {
				if ( key.keyCode == 13) {
					$td.find('.saveEdit').click();
				};
			});
		});

		//CANCEL EDIT
		$('#output').delegate('.cancel', 'click', function(){
			$td = $(this).closest('td');
			$tr = $(this).closest('tr');
			$td.removeClass('onEdit');
			$tr.find('input.amount').val("");
		});

		//UPDATE ITEM
		$('#output').delegate('.saveEdit', 'click', function(){

			$td = $(this).closest('td');
			$tr = $(this).closest('tr');

			//Declare AMOUNT
			$svTotal = parseInt($tr.find("td:nth-child(2) input.amount").val()) + parseInt($tr.find('span.currentSvAmount').attr('value-id'));
		    $mtvTotal = parseInt($tr.find("td:nth-child(3) input[name='mtvAmount']").val()) + parseInt($tr.find('span.currentMtvAmount').attr('value-id'));
		    $sfTotal = parseInt($tr.find("td:nth-child(4) input[name='sfAmount']").val()) + parseInt($tr.find('span.currentSfAmount').attr('value-id'));
			$nycTotal = parseInt($tr.find("td:nth-child(5) input[name='nyAmount']").val()) + parseInt($tr.find('span.currentNyAmount').attr('value-id'));
			$carpTotal = parseInt($tr.find("td:nth-child(6) input[name='carpAmount']").val()) + parseInt($tr.find('span.currentCarpAmount').attr('value-id'));
			$commentRequired = $td.find("input.commentEdit").val();
			$newDate = new Date();
			$currentDate = $newDate.toLocaleDateString();
			$currentTime = $newDate.toLocaleTimeString();

			 $name = $tr.find('input.name').val();
			 $comments = $td.find('label').text() + ": " + "( " + $td.find('input.amount').val() + " ) " + $td.find("input[name='comment']").val();
			if ( $commentRequired == ""){
				alert('Please fill in comment');
				return false;
			}

				//EDIT ITEM
				var editProduct = {
					"item": {
			    			"name": $name,
			    			"comments": $comments,
			    			"office": {
					            "Carpinteria": {
					                "amount": $carpTotal
					            },
					            "NewYork": {
					                "amount": $nycTotal
					            },
					            "MountainView": {
					                "amount": $mtvTotal
					            },
					            "SanFrancisco": {
					                "amount": $sfTotal
					            },
					            "Sunnyvale": {
					                "amount": $svTotal
					            }
					        }
					}
				}

				var desktop_Edit = 	{
						"desktop": {
			    			"name": $name,
				    			"comments": $comments,
				    			"office": {
						            "Carpinteria": {
						                "amount": $carpTotal
						            },
						            "NewYork": {
						                "amount": $nycTotal
						            },
						            "MountainView": {
						                "amount": $mtvTotal
						            },
						            "SanFrancisco": {
						                "amount": $sfTotal
						            },
						            "Sunnyvale": {
						                "amount": $svTotal
						            }
						        }
					    }
				}	

				var laptop_Edit = {
					"laptop" : {
						"name": $name,
				    			"comments": $comments,
				    			"office": {
						            "Carpinteria": {
						                "amount": $carpTotal
						            },
						            "NewYork": {
						                "amount": $nycTotal
						            },
						            "MountainView": {
						                "amount": $mtvTotal
						            },
						            "SanFrancisco": {
						                "amount": $sfTotal
						            },
						            "Sunnyvale": {
						                "amount": $svTotal
						            }
						        }
					}
				}

				var apple_perif_Edit = {
					"apple_perif" : {
						"name": $name,
				    			"comments": $comments,
				    			"office": {
						            "Carpinteria": {
						                "amount": $carpTotal
						            },
						            "NewYork": {
						                "amount": $nycTotal
						            },
						            "MountainView": {
						                "amount": $mtvTotal
						            },
						            "SanFrancisco": {
						                "amount": $sfTotal
						            },
						            "Sunnyvale": {
						                "amount": $svTotal
						            }
						        }
					}
				}

				var windows_perif_Edit = {
					"windows_perif" : {
						"name": $name,
				    			"comments": $comments,
				    			"office": {
						            "Carpinteria": {
						                "amount": $carpTotal
						            },
						            "NewYork": {
						                "amount": $nycTotal
						            },
						            "MountainView": {
						                "amount": $mtvTotal
						            },
						            "SanFrancisco": {
						                "amount": $sfTotal
						            },
						            "Sunnyvale": {
						                "amount": $svTotal
						            }
						        }
					}
				}

				var other_perif_Edit = {
					"other_perif" : {
						"name": $name,
				    			"comments": $comments,
				    			"office": {
						            "Carpinteria": {
						                "amount": $carpTotal
						            },
						            "NewYork": {
						                "amount": $nycTotal
						            },
						            "MountainView": {
						                "amount": $mtvTotal
						            },
						            "SanFrancisco": {
						                "amount": $sfTotal
						            },
						            "Sunnyvale": {
						                "amount": $svTotal
						            }
						        }
					}
				}

			//DECLARE CHANGES VALUE
			$svEdit = parseInt($tr.find("td:nth-child(2) input.amount").val());
			$mtvEdit = parseInt($tr.find("td:nth-child(3) input[name='mtvAmount']").val());
		    $sfEdit = parseInt($tr.find("td:nth-child(4) input[name='sfAmount']").val());
			$nycEdit = parseInt($tr.find("td:nth-child(5) input[name='nyAmount']").val());
			$carpEdit = parseInt($tr.find("td:nth-child(6) input[name='carpAmount']").val());
			//DECLARE CURRENT AMOUNT
			$svCurrent = parseInt($tr.find('span.currentSvAmount').attr('value-id'));
			$mtvCurrent = parseInt($tr.find('span.currentMtvAmount').attr('value-id'));
		    $sfCurrent = parseInt($tr.find('span.currentSfAmount').attr('value-id'));
			$nycCurrent = parseInt($tr.find('span.currentNyAmount').attr('value-id'));
			$carpCurrent = parseInt($tr.find('span.currentCarpAmount').attr('value-id'));

				var editLogs = {
					"logs" : {
						"name": $name,
						"modified": $currentDate + "  " + $currentTime,
		    			"comments": $comments,
		    			"office": {
				            "Carpinteria": {
				                "amount": $carpCurrent + " ( " + "<font style='color: red; font-weight: bold;'>" + $carpEdit + "</font>"+ " ) " 
				            },
				            "NewYork": {
				                "amount": $nycCurrent + " ( " + "<font style='color: red; font-weight: bold;'>" + $nycEdit + "</font>" + " ) " 
				            },
				            "MountainView": {
				                "amount": $mtvCurrent + " ( " + "<font style='color: red; font-weight: bold;'>" + $mtvEdit + "</font>" + " ) "
				            },
				            "SanFrancisco": {
				                "amount": $sfCurrent + " ( " + "<font style='color: red; font-weight: bold;'>" + $sfEdit + "</font>" + " ) " 
				            },
				            "Sunnyvale": {
				                "amount": $svCurrent + " ( " + "<font style='color: red; font-weight: bold;'>" + $svEdit + "</font>" + " ) " 
				            }
				        }
					}
				}

			//PROMPT SUBMISSION
			$confirmSubmit = confirm("CONFIRM EDIT: \n\n" +
				$comments.toUpperCase()
				+"\n\n"
				)
				if ($confirmSubmit == true) {

				} else {
					return false;
				}


			var categoryEdit = $tr.find('td:first label').text();
			var editSchema = [];
			var apiEditPath = [];

			// AJAX EDIT CALL

			if ( categoryEdit == "Desktop") {
				apiEditPath.push('/api/desktop/' + $(this).attr('data-id'));
				editSchema = desktop_Edit;
			} else if ( categoryEdit == "Laptop" ) {
				apiEditPath.push('/api/laptop/' + $(this).attr('data-id'));
				editSchema = laptop_Edit;
			} else if ( categoryEdit == "Apple" ) {
				apiEditPath.push('/api/apple/' + $(this).attr('data-id'));
				editSchema = apple_perif_Edit;
			} else if ( categoryEdit == "Windows" ) {
				apiEditPath.push('/api/windows/' + $(this).attr('data-id'));
				editSchema = windows_perif_Edit;
			} else {
				apiEditPath.push('/api/other/' + $(this).attr('data-id'));
				editSchema = other_perif_Edit;
			}

			// AJAX EDIT CALL
			$.ajax({
				type: 'put',
				data: JSON.stringify(editSchema),
				contentType: 'application/json; charset=utf-8',
				url: apiEditPath,
				dataType: 'JSON',
				success: function(e){
					if (e == null) {
						e == "0";
					};
					// location.reload();
				}
			});
			
			// AJAX POST LOG CALL
			$.ajax({
				type: 'post',
				data: JSON.stringify(editLogs),
				contentType: 'application/json; charset=utf-8',
				url: '/api/logs/',
				dataType: 'JSON',
				success: function() {
					location.reload();
				}
			});
			return true;
		});





	// LOGS AJAX CALL ----------------------------------------------------
	$.ajax({
		type: 'get',
		url: '/api/logs/',
		dataType: 'JSON',
		success: function(text) {
			$.each(text, function(i, log){
				$("#tableLog").append(
					"<tr><td>" + log.logs.modified + 
					// "<button data-id='"+log._id+"' id='remove'></button>" +
					"</td><td>" + log.logs.name +
					"</td><td>" + log.logs.office.Sunnyvale.amount +
					"</td><td>" + log.logs.office.MountainView.amount +
					"</td><td>" + log.logs.office.SanFrancisco.amount +
					"</td><td>" + log.logs.office.NewYork.amount +
					"</td><td>" + log.logs.office.Carpinteria.amount +
					"</td><td>" + log.logs.comments +
					"</td></tr>");
			}); 
		}
	});

	// DELETE LOG ITEMS
	$('#tableLog').delegate('#remove', 'click', function(){
		$.ajax({
			type: 'DELETE',
			url: '/api/logs/' + $(this).attr('data-id'),
			success: function(){
			//location.reload();
			}
		});
	});



	//LIVE ITEM SEARCH ----------------------------------
	$("#search").on("keyup", function(){
		var value = $(this).val().toLowerCase();
		$("#output tr").each(function(index) {
			if(index !== 0) {
				$row = $(this);
				 var id = $row.find("td span").first().text().toLowerCase(); 
				// debugger;
				if ( id.indexOf(value) !== 0 ){
					$row.hide();
				}else {
					$row.show();
				}
			}
		}); 
	}); 


}); // END DOCUMENT READY