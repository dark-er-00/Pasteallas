let listOfOrders = JSON.parse(localStorage.getItem("cart")) || [];

const ul = document.getElementById("items");
const totalDisplay = document.getElementById("total-price");

function renderCart() {
    ul.innerHTML = "";
    let total = 0;

    if (listOfOrders.length === 0) {
        ul.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "0.00";
        return;
    }

    listOfOrders.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        ul.innerHTML += `
            <li class="item">
                <img src="${item.src || '../images/favicon.jpg'}" alt="">

                <div>
                    <h3>${item.name}</h3>
                    <p>₱${item.price} x ${item.quantity}</p>
                    <p><strong>₱${itemTotal}</strong></p>
                </div>

                <div class="item-controls">
                    <button class="minus" data-index="${index}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="plus" data-index="${index}">+</button>
                    <button class="remove" data-index="${index}">Remove</button>
                </div>
            </li>
        `;
    });

    totalDisplay.textContent = total.toFixed(2);
}

ul.addEventListener("click", function(e) {
    const index = e.target.dataset.index;

    if (e.target.classList.contains("plus")) {
        listOfOrders[index].quantity += 1;
    }

    if (e.target.classList.contains("minus")) {
        if (listOfOrders[index].quantity > 1) {
            listOfOrders[index].quantity -= 1;
        } else {
            listOfOrders.splice(index, 1);
        }
    }

    if (e.target.classList.contains("remove")) {
        listOfOrders.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(listOfOrders));
    renderCart();
});

renderCart();