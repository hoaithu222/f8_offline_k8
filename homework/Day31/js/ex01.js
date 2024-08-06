document.addEventListener("DOMContentLoaded", function () {
  var products = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
  ];

  renderProductList(products);
  loadCart();
});

var cart = [];

function renderProductList(products) {
  var productTableBody = document.getElementById("product_list");
  products.forEach(function (product, index) {
    var row = document.createElement("tr");

    var cellIndex = document.createElement("td");
    cellIndex.textContent = index + 1;
    row.appendChild(cellIndex);

    var cellName = document.createElement("td");
    cellName.textContent = product.name;
    row.appendChild(cellName);

    var cellPrice = document.createElement("td");
    cellPrice.textContent = product.price;
    row.appendChild(cellPrice);

    var cellAction = document.createElement("td");
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.id = "quantity_" + product.id;
    cellAction.appendChild(quantityInput);

    var addButton = document.createElement("button");
    addButton.textContent = "Thêm vào giỏ";
    addButton.classList.add("btn-one");
    addButton.setAttribute("data-id", product.id);
    addButton.setAttribute("data-name", product.name);
    addButton.setAttribute("data-price", product.price);
    addButton.addEventListener("click", function () {
      var id = product.id;
      var name = product.name;
      var price = product.price;
      var quantity = parseInt(document.getElementById("quantity_" + id).value);
      if (quantity > 0) {
        addToCart(id, name, price, quantity);
      } else {
        alert("Số lượng phải lớn hơn 0");
      }
    });
    cellAction.appendChild(addButton);
    row.appendChild(cellAction);

    productTableBody.appendChild(row);
  });
}

function addToCart(id, name, price, quantity) {
  var existingItemIndex = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      existingItemIndex = i;
      break;
    }
  }

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ id: id, name: name, price: price, quantity: quantity });
  }

  saveCart();
  updateCart();
}

function updateCart() {
  var cartContainer = document.querySelector(".cart");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Giỏ hàng không có sản phẩm</p>";
    return;
  }

  var cartTable = document.createElement("table");
  cartTable.setAttribute("cellpadding", "0");
  cartTable.setAttribute("cellspacing", "0");
  cartTable.setAttribute("width", "100%");
  cartTable.setAttribute("border", "1");
  cartTable.setAttribute("id", "cart_table");

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headers = ["STT", "Tên sản phẩm", "Giá", "Số lượng", "Thành tiền", "Xóa"];
  headers.forEach(function (header) {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  cartTable.appendChild(thead);

  var tbody = document.createElement("tbody");
  var totalAmount = 0;
  var totalQuantity = 0;
  cart.forEach(function (item, index) {
    var row = document.createElement("tr");

    var cellIndex = document.createElement("td");
    cellIndex.textContent = index + 1;
    row.appendChild(cellIndex);

    var cellName = document.createElement("td");
    cellName.textContent = item.name;
    row.appendChild(cellName);

    var cellPrice = document.createElement("td");
    cellPrice.textContent = item.price;
    row.appendChild(cellPrice);

    var cellQuantity = document.createElement("td");
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.setAttribute("data-id", item.id);
    quantityInput.addEventListener("change", function () {
      var newQuantity = parseInt(this.value);
      if (newQuantity > 0) {
        updateQuantity(item.id, newQuantity);
      } else {
        alert("Số lượng phải lớn hơn 0");
        this.value = item.quantity;
      }
    });
    cellQuantity.appendChild(quantityInput);
    row.appendChild(cellQuantity);

    var cellTotal = document.createElement("td");
    cellTotal.textContent = item.price * item.quantity;
    row.appendChild(cellTotal);

    var cellRemove = document.createElement("td");
    var removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", function () {
      if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        removeFromCart(this.getAttribute("data-index"));
      }
    });
    cellRemove.appendChild(removeButton);
    row.appendChild(cellRemove);

    tbody.appendChild(row);

    totalQuantity += item.quantity;
    totalAmount += item.price * item.quantity;
  });

  cartTable.appendChild(tbody);

  var tfoot = document.createElement("tfoot");
  var footerRow = document.createElement("tr");

  var footerCellTotalText = document.createElement("td");
  footerCellTotalText.setAttribute("colspan", "3");
  footerCellTotalText.textContent = "Tổng";
  footerRow.appendChild(footerCellTotalText);

  var footerCellTotalQuantity = document.createElement("td");
  footerCellTotalQuantity.textContent = totalQuantity;
  footerRow.appendChild(footerCellTotalQuantity);

  var footerCellTotalAmount = document.createElement("td");
  footerCellTotalAmount.setAttribute("colspan", "2");
  footerCellTotalAmount.textContent = totalAmount;
  footerRow.appendChild(footerCellTotalAmount);

  tfoot.appendChild(footerRow);
  cartTable.appendChild(tfoot);

  cartContainer.appendChild(cartTable);

  var hr = document.createElement("hr");
  cartContainer.appendChild(hr);

  var updateButton = document.createElement("button");
  updateButton.style.display = "inline-block";
  updateButton.style.marginRight = "10px";
  updateButton.textContent = "Cập nhật giỏ hàng";
  updateButton.addEventListener("click", function () {
    if (confirm("Bạn có chắc chắn muốn cập nhật giỏ hàng?")) {
      saveCart();
      updateCart();
      alert("Cập nhật giỏ hàng thành công");
    }
  });

  var clearButton = document.createElement("button");
  clearButton.textContent = "Xóa giỏ hàng";
  clearButton.addEventListener("click", function () {
    if (confirm("Bạn có chắc chắn muốn xóa giỏ hàng?")) {
      clearCart();
    }
  });

  cartContainer.appendChild(updateButton);
  cartContainer.appendChild(clearButton);
}

function updateQuantity(id, newQuantity) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = newQuantity;
      break;
    }
  }
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCart();
  }
}
