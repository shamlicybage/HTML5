// function calculate(){
//   var price=  prompt("Enter Price",price);
//   console.log(price);

//   var discount= prompt("Enter the discount !!",discount);
//   console.log(discount);

//   var discounted_price = price - price*(discount/100);
//   console.log(discounted_price);
//   alert("Discounted price is "+discounted_price);
// }
  var button=document.getElementById("btn");
  console.log(button);
  button.addEventListener('click',()=>{
    var price=  prompt("Enter Price",price);
    var discount= prompt("Enter the discount !!",discount);
    var discounted_price = price - price*(discount/100);
    alert("Discounted price is "+discounted_price);

  })
