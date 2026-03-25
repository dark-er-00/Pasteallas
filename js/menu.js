const riceMeals = document.getElementById("RiceMeals");
const comboMeals = document.getElementById("ComboMeals");
const chickenWings = document.getElementById("ChickenWings");
const frappe = document.getElementById("Frappe");
const burgers = document.getElementById("Burgers");
const sausages = document.getElementById("Sausages");
const pasta = document.getElementById("Pasta");
const coffeeSeries = document.getElementById("CoffeeSeries");
const moguCoolers = document.getElementById("MoguSeries");
const yakultSeries = document.getElementById("YakultSeries");
const snacks = document.getElementById("Snacks");
const milktea = document.getElementById("Milktea");
const menuItems = document.getElementById("menu-items");

riceMeals.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Chicken Wings</p>
            <div class="item">
                <img src="" alt="">
                <h3>2 pcs. Wings with Rice</h3>
                <p>₱89.00</p>
                <button class="add-to-cart" data-name="2pcs Chicken Wings" data-price="89">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>3 pcs. Wings with Rice</h3>
                <p>₱109.00</p>
                <button class="add-to-cart" data-name="3pcs Chicken Wings" data-price="109">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>4 pcs. Wings with Rice</h3>
                <p>₱129.00</p>
                <button class="add-to-cart" data-name="4pcs Chicken Wings" data-price="129">Add to Cart</button>
            </div>

            <p>Chicken Nuggets (Served with Side Fries)</p>
            <div class="item">
                <img src="" alt="">
                <h3>4 pcs. Nuggets w/ rice and sides</h3>
                <p>₱89.00</p>
                <button class="add-to-cart" data-name="4pcs Chicken Nuggets" data-price="89">Add to Cart</button>
            </div>

            <p>Sausage Rice (Served with Side Fries)</p>
            <div class="item">
                <img src="" alt="">
                <h3>Fried Sausage</h3>
                <p>₱89.00</p>
                <button class="add-to-cart" data-name="Fried Sausage" data-price="89">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Sauted Sausage</h3>
                <p>₱89.00</p>
                <button class="add-to-cart" data-name="Sauted Sausage" data-price="89">Add to Cart</button>
            </div>

            <p>Shanghai with Rice</p>
            <div class="item">
                <img src="" alt="">
                <h3>Shanghai with Rice</h3>
                <p>₱59.00</p>
                <button class="add-to-cart" data-name="Shanghai with Rice" data-price="59">Add to Cart</button>
            </div>

            <p>Siomai Rice</p>
            <div class="item">
                <img src="" alt="">
                <h3>8 pcs. Siomai with Rice</h3>
                <p>₱59.00</p>
                <button class="add-to-cart" data-name="Siomai Rice" data-price="59">Add to Cart</button>
            </div>

            <p>Flavored Fried Siomai w/ Rice</p>
            <div class="item">
                <img src="" alt="">
                <h3>Flavored Fried Siomai w/ Rice</h3>
                <p>₱79.00</p>
                <button class="add-to-cart" data-name="Flavored Fried Siomai w/ Rice" data-price="79">Add to Cart</button>
            </div>

            <p>Katsu Meal with Homemade Katsu Sauce</p>
            <div class="item">
                <img src="" alt="">
                <h3>Pork Katsu</h3>
                <p>₱99.00</p>
                <button class="add-to-cart" data-name="Pork Katsu" data-price="99">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Chicken Katsu</h3>
                <p>₱99.00</p>
                <button class="add-to-cart" data-name="Chicken Katsu" data-price="99">Add to Cart</button>
            </div>`;
});

comboMeals.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Any Pasta with Drinks</p>
            <div class="item">
                <img src="" alt="">
                <h3>16oz Drinks (Milktea, Coffee, Lemonade)</h3>
                <p>₱150.00</p>
                <button class="add-to-cart" data-name="16oz Drinks (Milktea, Coffee, Lemonade)" data-price="150">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Upsize to 22oz</h3>
                <p>₱160.00</p>
                <button class="add-to-cart" data-name="Upsize to 22oz" data-price="160">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Upgrade to Frappe or Cheesecake</h3>
                <p>₱195.00</p>
                <button class="add-to-cart" data-name="Upgrade to Frappe or Cheesecake" data-price="195">Add to Cart</button>
            </div>

            <p>Burger with Drinks</p>
            <div class="item">
                <img src="" alt="">
                <h3>Quarter Pounder and Drinks (16oz)</h3>
                <p>₱170.00</p>
                <button class="add-to-cart" data-name="Quarter Pounder and Drinks (16oz)" data-price="170">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Chicken Burger and Drinks (16oz)</h3>
                <p>₱170.00</p>
                <button class="add-to-cart" data-name="Chicken Burger and Drinks (16oz)" data-price="170">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cheesy QPB and Drinks (16oz)</h3>
                <p>₱190.00</p>
                <button class="add-to-cart" data-name="Cheesy QPB and Drinks (16oz)" data-price="190">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Bacon QPB and Drinks (16oz)</h3>
                <p>₱210.00</p>
                <button class="add-to-cart" data-name="Bacon QPB and Drinks (16oz)" data-price="210">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Double Decker and Drinks (16oz)</h3>
                <p>₱240.00</p>
                <button class="add-to-cart" data-name="Double Decker and Drinks (16oz)" data-price="240">Add to Cart</button>
            </div>

            <p>Hungarian Sausage with Drinks</p>
            <div class="item">
                <img src="" alt="">
                <h3>16oz Drinks (Milktea, Coffee, Lemonade)</h3>
                <p>₱150.00</p>
                <button class="add-to-cart" data-name="16oz Drinks(Milktea, Coffee, Lemonade)" data-price="150">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Upsize to 22oz</h3>
                <p>₱160.00</p>
                <button class="add-to-cart" data-name="Upsize to 22oz" data-price="160">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Upgrade to Frappe or Cheesecake</h3>
                <p>₱195.00</p>
                <button class="add-to-cart" data-name="Upgrade to Frappe or Cheesecake" data-price="195">Add to Cart</button>
            </div>

            <p>Wings Meal</p>
            <div class="item">
                <img src="" alt="">
                <h3>2 pcs. Wings + Rice + Small Drink (16oz)</h3>
                <p>₱160.00</p>
                <button class="add-to-cart" data-name="2 pcs. Wings + Rice + Small Drink (16oz)" data-price="160">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>3 pcs. Wings + Rice + Small Drink (16oz)</h3>
                <p>₱180.00</p>
                <button class="add-to-cart" data-name="3 pcs. Wings + Rice + Small Drink (16oz)" data-price="180">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>4 pcs. Wings + Rice + Small Drink (16oz)</h3>
                <p>₱200.00</p>
                <button class="add-to-cart" data-name="4 pcs. Wings + Rice + Small Drink (16oz)" data-price="200">Add to Cart</button>
            </div>

            <p>Busolve Meal</p>
            <div class="item">
                <img src="" alt="">
                <h3>Any Pasta + 2 Chicken Wings</h3>
                <p>₱145.00</p>
                <button class="add-to-cart" data-name="Any Pasta + 2 Chicken Wings" data-price="145">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Any Pasta + 3 Chicken Wings</h3>
                <p>₱165.00</p>
                <button class="add-to-cart" data-name="Any Pasta + 3 Chicken Wings" data-price="165">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Any Pasta + 2 Wings + Small Drink (16oz)</h3>
                <p>₱215.00</p>
                <button class="add-to-cart" data-name="Any Pasta + 2 Wings + Small Drink (16oz)" data-price="215">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Any Pasta + 3 Wings + Small Drink (16oz)</h3>
                <p>₱235.00</p>
                <button class="add-to-cart" data-name="Any Pasta + 3 Wings + Small Drink (16oz)" data-price="235">Add to Cart</button>
            </div>`;
});

chickenWings.addEventListener("click", function() {
    menuItems.innerHTML = 
    `<p>Chicken Wings</p>
            <div class="item">
                <img src="" alt="">
                <h3>6 pcs. (2 Flavors)</h3>
                <p>₱189.00</p>
                <button class="add-to-cart" data-name="6 pcs. (2 Flavors)" data-price="189">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>8 pcs. (2 Flavors)</h3>
                <p>₱229.00</p>
                <button class="add-to-cart" data-name="8 pcs. (2 Flavors)" data-price="229">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>10 pcs. (2 Flavors)</h3>
                <p>₱269.00</p>
                <button class="add-to-cart" data-name="10 pcs. (2 Flavors)" data-price="269">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>12 pcs. (3 Flavors)</h3>
                <p>₱299.00</p>
                <button class="add-to-cart" data-name="12 pcs. (3 Flavors)" data-price="299">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>15 pcs. (3 Flavors)</h3>
                <p>₱349.00</p>
                <button class="add-to-cart" data-name="15 pcs. (3 Flavors)" data-price="349">Add to Cart</button>
            </div>

            <div id="flavors">
                <p>Lemon Glazed<br>
                Soy Garlic<br>
                Classic Buffalo<br>
                Sweet Chili<br>
                Salted Egg<br>
                Spicy Salted Egg<br>
                Mango Habanero<br>
                Barbecue<br>
                Honey Mustard<br>
                YangNyeom</p>

                <p>Teriyaki<br>
                Hickory BBQ<br>
                Spiced Maple<br>
                Sweet & Sour<br>
                Garlic Parmesan<br>
                Plain Fried Chicken<br>
                Cheese Powder<br>
                Sour Cream<br>
                Honey Butter</p>
            </div>`;
});

frappe.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Frappe</p>
            <div class="item">
                <img src="" alt="">
                <h3>Caffe Macchiato (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Caffe Macchiato (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Java Chip (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Java Chip (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cappuccino (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Cappucino (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Mocha (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Mocha (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Dark Chocolate (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Dark Chocolate (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Dark Mocha (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Dark Mocha (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Chocolate (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Chocolate (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cookie Crumble (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Cookie Crumble (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Caramel Macchiato (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Caramel Macchiato (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Hazelnut Macchiato (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Hazelnut Macchiato (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Salted Caramel (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Salted Caramel (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Strawberry Creme (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Strawberry Creme (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Matcha Creme (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Matcha Creme (22oz)" data-price="120">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Ube Creme (22oz)</h3>
                <p>₱120.00</p>
                <button class="add-to-cart" data-name="Ube Creme (22oz)" data-price="120">Add to Cart</button>
            </div>

            <p>Cheesecake</p>
            <div class="item">
                <img src="" alt="">
                <h3>Classic Cheesecake (22oz)</h3>
                <p>₱130.00</p>
                <button class="add-to-cart" data-name="Classic Cheesecake (22oz)" data-price="130">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Oreo Cheesecake (22oz)</h3>
                <p>₱130.00</p>
                <button class="add-to-cart" data-name="Oreo Cheesecake (22oz)" data-price="130">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Blueberry Graham Cheesecake (22oz)</h3>
                <p>₱130.00</p>
                <button class="add-to-cart" data-name="Blueberry Graham Cheesecake (22oz)" data-price="130">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Mango Graham Cheesecake (22oz)</h3>
                <p>₱130.00</p>
                <button class="add-to-cart" data-name="Mango Graham Cheesecake (22oz)" data-price="130">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Strawberry Cheesecake (22oz)</h3>
                <p>₱130.00</p>
                <button class="add-to-cart" data-name="Strawberry Cheesecake (22oz)" data-price="130">Add to Cart</button>
            </div>`;
});

burgers.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Coffee Series</p>
            <div class="item">
                <img src="" alt="">
                <h3>Creamy Mocha (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Creamy Mocha (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cappucino (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Cappucino (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cafe Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Cafe Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Hazelnut Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Hazelnut Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Caramel Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Caramel Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Dark Mocha (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Dark Mocha (22oz)" data-price="85">Add to Cart</button>
            </div>`;
});

sausages.addEventListener("click", function() {

});

pasta.addEventListener("click", function() {

});

coffeeSeries.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Coffee Series</p>
            <div class="item">
                <img src="" alt="">
                <h3>Creamy Mocha (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Creamy Mocha (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cappucino (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Cappucino (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Cafe Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Cafe Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Hazelnut Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Hazelnut Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Caramel Macchiato (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Caramel Macchiato (22oz)" data-price="85">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Dark Mocha (22oz)</h3>
                <p>₱85.00</p>
                <button class="add-to-cart" data-name="Dark Mocha (22oz)" data-price="85">Add to Cart</button>
            </div>`;
});

moguCoolers.addEventListener("click", function() {
    menuItems.innerHTML = 
            `<p>Mogu Koolers</p>
            <div class="item">
                <img src="" alt="">
                <h3>Classic Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Classic Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Mango Fruit Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Mango Fruit Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Green Apple Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Green Apple Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Passion Fruit Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Passion Fruit Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Strawberry Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Strawberry Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Blueberry Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Blueberry Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Lychee Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Lychee Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Grapes Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Grapes Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Honey Peach Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Honey Peach Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>
            <div class="item">
                <img src="" alt="">
                <h3>Kiwi Lemonade (22oz)</h3>
                <p>₱65.00</p>
                <button class="add-to-cart" data-name="Kiwi Lemonade (22oz)" data-price="65">Add to Cart</button>
            </div>`;
});

yakultSeries.addEventListener("click", function() {

});

snacks.addEventListener("click", function() {

});

milktea.addEventListener("click", function() {

});

let total = 0;
let count = 0;

const buttons = document.querySelectorAll(".add-to-cart");

const totalDisplay = document.getElementById("total-price");

const productCount = document.getElementById("product-count");

menuItems.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
        const button = e.target;

        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        total += price;

        totalDisplay.textContent = total.toFixed(2);

        count += 1;
        productCount.textContent = count;

        console.log(name + " added. ₱" + price);
    }
});