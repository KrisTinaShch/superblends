document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ingredient-item").forEach((button) => {
        button.addEventListener("click", function () {
            const ingredientItem = this.closest(".ingredient-item");

            const colorContainer = ingredientItem.closest(".slimfit-blend-ingredients");
            const colorClasses = ["orange", "red", "green"];

            const colorClass = colorClasses.find(cls => colorContainer?.classList.contains(cls)) || "orange";

            const ingredientImageSrc = ingredientItem.querySelector(".ingredient-main-image")?.src;
            const popupTitle = ingredientItem.querySelector(".ingredient-name").dataset.title || " ";
            const popupDescription = ingredientItem.querySelector(".ingredient-name").dataset.description || " ";

            const popup = document.createElement("div");
            popup.classList.add("ingredient-popup", colorClass); // добавляем цвет

            popup.innerHTML = `
                <div class="ingredient-popup-content">
                    <span class="ingredient-popup-close">&times;</span>
                    ${ingredientImageSrc !== undefined ? `<img class="ingredient-popup-image" src="${ingredientImageSrc}" alt="${popupTitle}">` : ""}
                    <h3 class="ingredient-popup-title ks-heading-h3">${popupTitle}</h3>
                    <p class="ingredient-popup-description ks-paragraph">${popupDescription}</p>
                </div>
            `;

            document.body.appendChild(popup);

            setTimeout(() => {
                popup.classList.add("visible");
            }, 10);

            popup.querySelector(".ingredient-popup-close").addEventListener("click", function () {
                popup.classList.remove("visible");
                setTimeout(() => popup.remove(), 300);
            });

            popup.addEventListener("click", function (event) {
                if (event.target === popup) {
                    popup.classList.remove("visible");
                    setTimeout(() => popup.remove(), 300);
                }
            });
        });
    });
});


// TABS

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});



$('.review-carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});