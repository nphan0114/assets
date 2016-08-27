
$(document).ready(function(){


// DataTabel

$("table").DataTable({
ajax: {
'url': 'http://localhost:3000/api/products',
'dataSrc': '',
},
columns: [
{'data': 'item.name'},
{'data': 'item.sku'},
{'data': 'item.price'},
{'data': 'updated_at'}
]

});



// 	$.ajax({
// 		url: '/api/products',
// 		type: 'Get',
// 		dataType: 'json',
// 		success: function (data){
// 			console.log(data);
// 			$.each(data, function(i, item){
// 			$('#itemOut').append(
// 				"<tr><td>" +
// 				item.item.name +
// 				"<button class='remove' data-id='"+item._id+"'>X</button>" +
// 				"</td><td>" +
// 				item.item.sku+
// 				"</td><td>" +
// 				item.item.price +
// 				"</td><td>" +
// 				item.updated_at +
// 				"</td></tr>"
// 				);
// 			});
// 		}
// 	});

// var tHeader = "<thead>" +
// 				"<tr>" +
// 					"<th>Name</th>" +
// 					"<th>Sku</th>" +
// 					"<th>Price</th>" +
// 					"<th>Updated</th>" +
// 				"</tr>" +
// 				"</thead>";


$(".button").on('click', function(e) {
var name = $("input.name").val();
var sku = $("input.sku").val();
var price = $("input.price").val();

var color = $("input.color").val();
var size = $("input.size").val();
var brand = $("input.brand").val();

var newDate = new Date();
var currDate = newDate.toString();

if (e == "" || e == null) {
return false;

}

var product = {
updated_at: currDate,
item: {
  name: name,
  sku: sku,
  price: price
}
}

$.ajax({
type: 'post',
url: 'api/products',
dataType: 'JSON',
contentType: 'application/json',
data: JSON.stringify(product),
success: function(itemz){

  location.reload();
}
});

return true;

});


$("#itemOut").delegate('.remove', 'click', function() {
$.ajax({
type: 'delete',
url: '/api/products/' + $(this).attr('data-id'),
success: function() {
  location.reload();
}
});
});

});
