const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const forth = document.getElementById("forth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const eighth = document.getElementById("eighth");
const ninth = document.getElementById("ninth");
const coupon = document.getElementById("coupon");
// button dom
const congo = document.getElementById("congo-btn");
const applyBtn = document.getElementById("apply-btn");
const purchaseBtn = document.getElementById("purchase-btn");
// price dom
const itemList = document.getElementById("item-list");
const totalPrice = document.getElementById("total-price");
const discount = document.getElementById("discount");
const total = document.getElementById("total");

// product click event function
let totalPriceSum = 0;
first.addEventListener("click", function () {
  setElement("K. Accessories");
  const price = convertStringToNumber("prod1-price");
  totalPriceSet(price);
  validationCheck();
});

second.addEventListener("click", function () {
  setElement("K. Accessories");
  const price = convertStringToNumber("prod2-price");
  totalPriceSet(price);
  validationCheck();
});

third.addEventListener("click", function () {
  setElement("Home Cooker");
  const price = convertStringToNumber("prod3-price");
  totalPriceSet(price);
  validationCheck();
});

forth.addEventListener("click", function () {
  setElement("Sports Back Cap");
  const price = convertStringToNumber("prod4-price");
  totalPriceSet(price);
  validationCheck();
});

fifth.addEventListener("click", function () {
  setElement("Full Jersey Set");
  const price = convertStringToNumber("prod5-price");
  totalPriceSet(price);
  validationCheck();
});

sixth.addEventListener("click", function () {
  setElement("Sports cates");
  const price = convertStringToNumber("prod6-price");
  totalPriceSet(price);
  validationCheck();
});

seventh.addEventListener("click", function () {
  setElement("Single Relax Chair");
  const price = convertStringToNumber("prod7-price");
  totalPriceSet(price);
  validationCheck();
});

eighth.addEventListener("click", function () {
  setElement("Children play");
  const price = convertStringToNumber("prod8-price");
  totalPriceSet(price);
  validationCheck();
});

ninth.addEventListener("click", function () {
  setElement("Flexible Sofa");
  const price = convertStringToNumber("prod9-price");
  totalPriceSet(price);
  validationCheck();
});

// button event function
congo.addEventListener("click", function () {
  coupon.value = "";
  const paragraphs = itemList.children;
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].parentNode.removeChild(paragraphs[i]);
    i--;
  }
  totalPrice.innerText = "";
  discount.innerText = "";
  total.innerText = "";
  purchaseBtn.setAttribute("disabled", "disabled");
});

applyBtn.addEventListener("click", function () {
  const couponInputValue = coupon.value;
  if (couponInputValue === "SELL200") {
    const discountValue = totalPriceSum * (20 / 100);
    const totalValue = totalPriceSum - discountValue;
    discount.innerText = discountValue.toFixed(2);
    total.innerText = totalValue.toFixed(2);
  }
});

// button enable disabled

function validationCheck() {
  if (totalPriceSum > 0) {
    purchaseBtn.removeAttribute("disabled");
    if (totalPriceSum >= 200) {
      applyBtn.removeAttribute("disabled");
    }
  }
}

// reusable function
function convertStringToNumber(elementId) {
  const inputValue = document.getElementById(elementId);
  const inputValueString = inputValue.innerText;
  const value = parseFloat(inputValueString);
  return value;
}

function totalPriceSet(price) {
  totalPriceSum += price;
  totalPrice.innerText = totalPriceSum.toFixed(2);
}

function setElement(value) {
  const count = itemList.childElementCount;
  const p = document.createElement("p");
  p.classList.add("pt-3");
  p.classList.add("text-xl");
  p.classList.add("font-medium");
  p.innerText = `${count + 1}. ${value}`;
  itemList.appendChild(p);
}
