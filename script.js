// like
var heart = document.getElementsByClassName("fa-heart");
Array.from(heart).map((el)=>{
  el.addEventListener("click",()=>{
   el.classList.toggle("like")
  })
})



// console.log(heart)
$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change',
    function(e){
        update_amounts();
    });
});
function update_amounts(){
    var sum =0.0;
    $('#myTable > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

// qty inc dec
var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");

var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1);
    update_amounts();
});

var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal = Number($n.val()));
    if (QtyVal > 0){
        $n.val(QtyVal-1);
    }
    update_amounts();
});

// delete
let removeCartItemButtons = document.querySelectorAll('.delete-btn');
for (let i = 0; i < removeCartItemButtons.length; i++) {

    let button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}
function removeCartItem(event) {
    let buttonCliked = event.target;
    conuttosole.log(buttonCliked.parentElement.parentElement)
    bnCliked.parentElement.parentElement.parentElement.remove()
   // updateCartTotal()
}


