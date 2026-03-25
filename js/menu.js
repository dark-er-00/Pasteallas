const riceMeals = document.getElementById("RiceMeals");
const comboMeals = document.getElementById("ComboMeals");
const chickenWings = document.getElementById("ChickenWings");
const frappe = document.getElementById("Frappe");
const burgers = document.getElementById("Burgers");
const sausages = document.getElementById("Sausages");
const pasta = document.getElementById("Pasta");
const coffeeSeries = document.getElementById("CoffeeSeries");
const moguCoolers = document.getElementById("MoguCoolers");
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
    menuItems.innerHTML = `<div class="item">Chicken McNuggets</div>`;
});

frappe.addEventListener("click", function() {
    menuItems.innerHTML = `<div class="item">Caramel Frappe</div>`;
});

burgers.addEventListener("click", function() {
    menuItems.innerHTML = 
    `<div class="item">Quarter Pounder</div>
    <div class="item">Big Mac</div>
    <div class="item">McChicken</div>
    <div class="item">Fries</div>
    <div class="item">Coke</div>`;
});

sausages.addEventListener("click", function() {

});

pasta.addEventListener("click", function() {

});

coffeeSeries.addEventListener("click", function() {
    
});

moguCoolers.addEventListener("click", function() {

});

yakultSeries.addEventListener("click", function() {

});

snacks.addEventListener("click", function() {

});

milktea.addEventListener("click", function() {

});