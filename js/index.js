// ITERATION 1

function updateSubtotal(document) {

  const price = Number(document.querySelector('.price span').innerText)
  const quantity = Number(document.querySelector('.quantity input').value)
  const total = price * quantity;
  document.querySelector('.subtotal span').innerHTML = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productList = document.querySelectorAll('tr.product');
/* OPTION 1 */


   const total = [];

   for (let i = 0; i < productList.length; i++){
    

    const price = Number(productList[i].querySelector('.price span').innerText);
    
    const quantity = productList[i].querySelector('.quantity input').value;
    
    
    const subTotalValue = price * quantity;
    
    productList[i].querySelector('.subtotal span').innerHTML = subTotalValue;

    total.push(Number(productList[i].querySelector('.subtotal span').innerHTML))



/* OPTION 2 */

// productList.forEach(product => {
//   updateSubtotal(product);
// });

}

  // ITERATION 3

    const totalSum = total.reduce((acc, currentValue) => {return acc + currentValue}, 0);
    console.log(totalSum);
    document.querySelector('#total-value span').innerText = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);

  target.parentNode.parentNode.remove()
  calculateAll()
}

// Bonus: ITERATION 5

function createProduct() {

  const mainProductTable = document.querySelector('tbody');
  const newProductName = document.querySelector('input[placeholder= "Product Name"]');
  const newProductPrice = document.querySelector('input[placeholder= "Product Price"]');
  
  const newProductItem = document.createElement('tr')
  newProductItem.innerHTML = `
    <tr class="product">
    <td class="name">
      <span>${newProductName.value}</span>
    </td>
    <td class="price">$<span>${newProductPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  newProductItem.setAttribute('class', 'product')
  mainProductTable.appendChild(newProductItem);

  newProductItem.querySelector('.btn-remove').addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button =>{
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct)
})
