const addProducts = () => {
const productName = document.getElementById('product-name');

const names = productName.value;
const productQuantity = document.getElementById('product-quantity');

const quantity = productQuantity.value;
productName.value = "";
productQuantity.value = "";

displayProducts(names , quantity)
saveProductsToLocalStorage(names , quantity)
}

const displayProducts = (products , quantity) => {
    const li = document.createElement('li')
    li.innerText = `${products}: ${quantity}`
    const ul = document.getElementById('product-container')

    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart; 

}

const saveProductsToLocalStorage = (product , quantity) => {

const cart = getStoredShoppingCart();
cart[product] = quantity;
const cartStringify = JSON.stringify(cart);
localStorage.setItem('cart', cartStringify)
}


const displayProductsFromLocalStorage = () => {
const savedCart = getStoredShoppingCart();
for(const product in savedCart){
const quantity = savedCart[product]
displayProducts(product , quantity)
}
}
displayProductsFromLocalStorage()