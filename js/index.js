// ITERATION 1

function updateSubtotal(document) {

  const price = Number(document.querySelector('.price span').innerText)
  const quantity = Number(document.querySelector('.quantity input').value)
  const subTotal = Array(Number(document.querySelector('.subtotal span').innerText))
  const result = price * quantity;
  subTotal.unshift(result);
  const total = subTotal[0];
  document.querySelector('.subtotal span').innerHTML = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
