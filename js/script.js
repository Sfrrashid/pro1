
let addTocartBtn=document.getElementsByClassName('addToCartBtn');
let cartContainer = document.getElementsByClassName('cartContainer')[0];



















for ( var i =0; i<addTocartBtn.length; i++) {

    addTocartBtn[i].addEventListener('click', addtocart)
}

function addtocart(e){


    productContainer =e.target.parentElement
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    //console.log(productTitle)

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        // if (cartTitles[i].innerText == productTitle) {
        //     alert('Product already to cart');
        //    return;
        // }
    }


    AddRowInCart(productTitle, productPrice);

}
function AddRowInCart(productTitle, productPrice) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `
<div class="col-4 my-3 cartTitle"> ${productTitle} </div>
<div class="col-4 my-3 cartPrice "> ${productPrice}</div>
 <div class="col-4 my-3 removeButton btn btn-danger "> Remove from cart</div>`;
    div.innerHTML = insideDiv
    cartContainer.appendChild(div);

   

    



let removeButton = document.getElementsByClassName('removeButton');
for (var x=0; x<removeButton.length;x++){

removeButton[x].addEventListener('click', removefromcart)

}

} 




function removefromcart (e) {
e.target.parentElement.remove();

}






