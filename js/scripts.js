var iceCream = ["Chocolate", "Vanilla", "Cookie Dough", "Mint", "Strawberry"];

$(function(){
  iceCream.forEach(function(flavor){
    $("#flavors").append("<li>" + flavor + "</li>");
  })

});
