// Product Array
let products = [
{id:1,name:"Laptop",category:"Electronics",price:55000},
{id:2,name:"Mouse",category:"Electronics",price:700},
{id:3,name:"Keyboard",category:"Electronics",price:1200},
{id:4,name:"Notebook",category:"Stationery",price:100},
{id:5,name:"Pen",category:"Stationery",price:20},
{id:6,name:"Pencil",category:"Stationery",price:10},
{id:7,name:"Bag",category:"Accessories",price:900},
{id:8,name:"Watch",category:"Accessories",price:1800},
{id:9,name:"Bottle",category:"Accessories",price:250},
{id:10,name:"Calculator",category:"Electronics",price:600}
];
let cart=[];
let discount=0;

// Display Products
function displayProducts(list){
let productDiv=document.getElementById("products");
productDiv.innerHTML="";
list.forEach(product=>{
productDiv.innerHTML+=`
<div class="card">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p>₹${product.price}</p>
<button onclick="addCart(${product.id})">
Add to Cart
</button>
</div>
`;
});
}
displayProducts(products);

// Search
document.getElementById("search").addEventListener("keyup",filterProducts);
document.getElementById("category").addEventListener("change",filterProducts);
function filterProducts(){
let text=document.getElementById("search").value.toLowerCase();
let category=document.getElementById("category").value;
let result=products.filter(product=>{
let searchMatch=product.name.toLowerCase().includes(text);
let categoryMatch=(category=="All" || product.category==category);
return searchMatch && categoryMatch;
});
displayProducts(result);
}

// Add Cart
function addCart(id){
let product=products.find(p=>p.id==id);
let item=cart.find(c=>c.id==id);
if(item){
item.qty++;
}
else{
cart.push({...product,qty:1});
}
showCart();
}

// Show Cart
function showCart(){
let cartBody=document.getElementById("cartItems");
cartBody.innerHTML="";
let total=0;
let items=0;
cart.forEach(item=>{
total+=item.price*item.qty;
items+=item.qty;
cartBody.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<button onclick="decrease(${item.id})">-</button>
${item.qty}
<button onclick="increase(${item.id})">+</button>
</td>
<td>${item.price*item.qty}</td>
<td>
<button onclick="removeItem(${item.id})">
Remove
</button>
</td>
</tr>
`;
});
document.getElementById("totalItems").innerHTML=items;
document.getElementById("totalPrice").innerHTML=(total-discount).toFixed(2);
}

// Increase
function increase(id){
cart.find(item=>item.id==id).qty++;
showCart();
}

// Decrease
function decrease(id){
let item=cart.find(item=>item.id==id);
item.qty--;
if(item.qty==0){
cart=cart.filter(p=>p.id!=id);
}
showCart();
}

// Remove
function removeItem(id){
cart=cart.filter(item=>item.id!=id);
showCart();
}

// Coupon
function applyCoupon(){
let code=document.getElementById("coupon").value;
let total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
discount=0;
if(code=="SAVE10"){
discount=total*0.10;
document.getElementById("couponMsg").innerHTML="10% Discount Applied";
}
else if(code=="SAVE20"){
discount=total*0.20;
document.getElementById("couponMsg").innerHTML="20% Discount Applied";
}
else{
document.getElementById("couponMsg").innerHTML="Invalid Coupon";
}
showCart();
}

// Checkout
function checkout(){
if(cart.length==0){
alert("Cart Empty");
return;
}
let customer=document.getElementById("customer").value;
let invoiceNo=Math.floor(Math.random()*100000);
let date=new Date().toLocaleDateString();
let subtotal=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
let gst=subtotal*0.18;
let grand=subtotal+gst-discount;
let bill=`
<h2>Invoice</h2>
<p>Customer : ${customer}</p>
<p>Invoice No : ${invoiceNo}</p>
<p>Date : ${date}</p>
<hr>
`;

cart.forEach(item=>{
bill+=`
<p>
${item.name}
(${item.qty})
= ₹${item.price*item.qty}
</p>
`;
});

bill+=`
<hr>
<p>Subtotal : ₹${subtotal}</p>
<p>GST (18%) : ₹${gst.toFixed(2)}</p>
<p>Discount : ₹${discount.toFixed(2)}</p>
<h2>Purchase Successful!</h2>
`;

document.getElementById("invoice").innerHTML=bill;
cart=[];
discount=0;
document.getElementById("coupon").value="";
document.getElementById("customer").value="";
}