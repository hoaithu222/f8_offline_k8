var cart = [];

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn-one');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var id = button.getAttribute('data-id');
            var name = button.getAttribute('data-name');
            var price = parseInt(button.getAttribute('data-price'));
            var quantity = parseInt(document.getElementById('quantity_' + id).value);
            addToCart(id, name, price, quantity);
        });
    });
    loadCart();
});

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
    var cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Giỏ hàng không có sản phẩm</p>';
        return;
    }

    var cartTable = document.createElement('table');
    cartTable.setAttribute('cellpadding', '0');
    cartTable.setAttribute('cellspacing', '0');
    cartTable.setAttribute('width', '100%');
    cartTable.setAttribute('border', '1');
    cartTable.setAttribute('id', 'cart_table');

    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['STT', 'Tên sản phẩm', 'Giá', 'Số lượng', 'Thành tiền', 'Xóa'];
    headers.forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    cartTable.appendChild(thead);

    var tbody = document.createElement('tbody');
    var totalAmount = 0;
    var totalQuantity = 0;
    cart.forEach(function (item, index) {
        var row = document.createElement('tr');

        var cellIndex = document.createElement('td');
        cellIndex.textContent = index + 1;
        row.appendChild(cellIndex);

        var cellName = document.createElement('td');
        cellName.textContent = item.name;
        row.appendChild(cellName);

        var cellPrice = document.createElement('td');
        cellPrice.textContent = item.price;
        row.appendChild(cellPrice);

        var cellQuantity = document.createElement('td');
        var quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.setAttribute('data-id', item.id);
        quantityInput.addEventListener('change', function () {
            updateQuantity(item.id, parseInt(this.value));
        });
        cellQuantity.appendChild(quantityInput);
        row.appendChild(cellQuantity);

        var cellTotal = document.createElement('td');
        cellTotal.textContent = item.price * item.quantity;
        row.appendChild(cellTotal);

        var cellRemove = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.setAttribute('data-index', index);
        removeButton.addEventListener('click', function () {
            if (confirm('Are you sure?')) {
                removeFromCart(this.getAttribute('data-index'));
            }
        });
        cellRemove.appendChild(removeButton);
        row.appendChild(cellRemove);

        tbody.appendChild(row);

        totalQuantity += item.quantity;
        totalAmount += item.price * item.quantity;
    });

    cartTable.appendChild(tbody);

    var tfoot = document.createElement('tfoot');
    var footerRow = document.createElement('tr');

    var footerCellTotalText = document.createElement('td');
    footerCellTotalText.setAttribute('colspan', '3');
    footerCellTotalText.textContent = 'Tổng';
    footerRow.appendChild(footerCellTotalText);

    var footerCellTotalQuantity = document.createElement('td');
    footerCellTotalQuantity.textContent = totalQuantity;
    footerRow.appendChild(footerCellTotalQuantity);

    var footerCellTotalAmount = document.createElement('td');
    footerCellTotalAmount.setAttribute('colspan', '2');
    footerCellTotalAmount.textContent = totalAmount;
    footerRow.appendChild(footerCellTotalAmount);

    tfoot.appendChild(footerRow);
    cartTable.appendChild(tfoot);

    cartContainer.appendChild(cartTable);

    var hr = document.createElement('hr');
    cartContainer.appendChild(hr);

    var updateButton = document.createElement('button');
    updateButton.style.display = 'inline-block';
    updateButton.style.marginRight = '10px';
    updateButton.textContent = 'Cập nhật giỏ hàng';
    updateButton.addEventListener('click', function () {
        alert('Cập nhật giỏ hàng thành công');
        saveCart();
        updateCart();
    });

    var clearButton = document.createElement('button');
    clearButton.textContent = 'Xóa giỏ hàng';
    clearButton.addEventListener('click', function () {
        if (confirm('Are you sure?')) {
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
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    var storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}
