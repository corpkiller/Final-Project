
//  plus minus button
// jQuery(document).ready(function(){
//     // This button will increment the value
//     $('.qtyplus').click(function(e){
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name='+fieldName+']').val());
//         // If is not undefined
//         if (!isNaN(currentVal)) {
//             // Increment
//             $('input[name='+fieldName+']').val(currentVal + 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name='+fieldName+']').val(0);
//         }
//     });
//     // This button will decrement the value till 0
//     $(".qtyminus").click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name='+fieldName+']').val());
//         // If it isn't undefined or its greater than 0
//         if (!isNaN(currentVal) && currentVal > 0) {
//             // Decrement one
//             $('input[name='+fieldName+']').val(currentVal - 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name='+fieldName+']').val(0);
//         }
//     });
// });
// plus minus button

//google map
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(3.605945, 98.676192),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
