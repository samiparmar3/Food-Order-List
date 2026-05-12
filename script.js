const cards = document.querySelectorAll(".card");
const list = document.querySelector(".list-container");
const totalBill = document.getElementById("Total-bill");

let total = 0;

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const name = card.querySelector(".FoodName").innerText;

        let priceText = card.querySelector(".FoodPrice").innerText;

        priceText = priceText.replace("₹", "").replace(",", "");

        const price = Number(priceText);

        total += price;

        const li = document.createElement("li");

        li.innerText = `${name} - ₹${price}`;

        list.appendChild(li);

        totalBill.innerText = `Total Bill : ₹${total}`;

    });

});