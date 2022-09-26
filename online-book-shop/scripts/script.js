'use strict';

// initial variables
let price = 0, totalCost = 0;

// button which adds elements to cart
const addButton = document.querySelector('#add-to-cart-button');
const checkboxElement = document.querySelector('.checkbox');

//function which holds all operations related to adding elements
function addToCart() {

    
    if(checkboxElement.checked) {
        totalCost += 10;
    }


    // getting the book and its' amount                                      (step 1)
    const selectedProduct = document.querySelector('#select-id');
    const productNumber = document.querySelector('#product-number');

    //checking the books name and setting price according to it              (step 2)
    if (selectedProduct.value === '1984') price = 10.50;
    if (selectedProduct.value === 'Beyound good and evil') price = 12.90;
    if (selectedProduct.value === 'Crime and punishment') price = 21.80;
    if (selectedProduct.value === 'Portraint of Dorian Gray') price = 22.00;

    // updating total cost of purchase                                       (step 3)    
    totalCost = totalCost + +productNumber.value * price;

    // getting access to cart table                                          (step 4.1)
    const cartTable = document.querySelector('#cart-table');

    // creating new list item                                                (step 4.2)
    const cartProduct = document.createElement('li');
    // adding "cart-product" class to list item [class="cart-product"]
    cartProduct.classList.add('cart-product');

    // creating new span for name of product                                 (step 4.3)               
    const cartProductName = document.createElement('span');
    // adding "cart-product-name" class to span [class="cart-product-name"]
    cartProductName.classList.add('cart-product-name');
    // setting the text of span to name of book                            
    cartProductName.textContent = selectedProduct.value;
    // adding span to list item                                            
    cartProduct.appendChild(cartProductName);

    // creating new span for amount of product                              (step 4.4)          
    const cartProductNumber = document.createElement('span');
    // adding "cart-product-number" class to span [class="cart-product-number"]
    cartProductNumber.classList.add('cart-product-number');
    // setting the text of span to amount of book                            
    cartProductNumber.textContent = productNumber.value;
    // adding span to list item                                            
    cartProduct.appendChild(cartProductNumber);

    // creating new span for cost of product                               (step 4.5)
    const cartProductCost = document.createElement('span');
    // adding "cart-product-cost" class to span [class="cart-product-cost"]
    cartProductCost.classList.add('cart-product-cost');
    // setting the text of span to cost of book                            
    cartProductCost.textContent = '$' + (+productNumber.value * price).toFixed(2);
    // adding span to list item                                            
    cartProduct.appendChild(cartProductCost);

    // adding new purchase to cart                                         (step 5)
    cartTable.appendChild(cartProduct);

    //accessing the total cost element & updating the text                 (step 6)
    const totalCostBlock = document.querySelector('#total-cost');
    totalCostBlock.textContent = `Total Cost: ${totalCost.toFixed(2)}`;

    // accessing the cart block and making it visible                      (step 7)
    document.querySelector('#cart-block').style.display = 'block';

    // and clearing the input and select                                   (step 8)
    selectedProduct.value = '';
    productNumber.value = '';
}

//linking function with click event of button
addButton.addEventListener('click', addToCart);