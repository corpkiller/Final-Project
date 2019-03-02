function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(3.605945, 98.676192),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

  //   function changeTotalFromCount(input) {
  //     var unitPrice = parseInt(input.getAttribute("data-unitPrice"));
  //     var count = input.value;
  
  //     var price = unitPrice * count;
  //     var formattedPrice = 'Rp. ' + price.toFixed(2);
  
  //     var label = input.parentNode.nextElementSibling;
  //     label.innerHTML = '';
  //     label.appendChild(document.createTextNode(formattedPrice));
  //     getTotalPrice();
  // }
  
  // function getTotalPrice() {
  //     var total = 0,
  //         inputs = document.getElementsByTagName('input');
  //     for (var i = 0; i < inputs.length; i++) {
  //         if(inputs[i].value) {
  //             total +=   parseFloat(inputs[i].getAttribute("data-unitPrice")) * parseInt(inputs[i].value,10);
  //         }
  
         
  //   }
  //     if(total > 0) {
  //     document.getElementById('totalPriceDisplay').innerText = 'Rp. ' +  total.toFixed(2);
          
  //         }
  // }
  
  
  // function initTotals() {
  //     var inputs = document.getElementsByTagName('input');
  //     for (var i = 0; i < inputs.length; i++) {
  //            changeTotalFromCount(inputs[i]);
  //     }
  // }
  
  // window.onload = initTotals;

  function changeTotalFromCount(input){
    var unitPrice = parseInt(input.getAttribute("data-unitPrice"));
    console.log(unitPrice);
    var count = input.value;
    console.log(count);
    var price = unitPrice * count;
    console.log(price);
    $("#total").html(accounting.formatMoney(price, "Rp. ", 0));
  }
