
const filterBtn = document.getElementById("filterBtn");
const filterSidebar = document.getElementById("filterSidebar");

filterBtn.addEventListener("click", function () {
    filterSidebar.classList.toggle("hidden");
});

// Products
const products = document.querySelectorAll(".product-card");
const categoryChecks = document.querySelectorAll(".filter-check");
const searchInput = document.getElementById("searchInput");
const productCount = document.getElementById("productCount");
const noProducts = document.getElementById("noProducts");


// Filter Function
function filterProducts() {

    // Search Input Value
    let searchValue = searchInput.value.toLowerCase();
    let selectedCategories = [];

    categoryChecks.forEach(function (check) {
        if (check.checked) {
            selectedCategories.push(check.value);
        }

    });

    let visibleCount = 0;


    // Display Products
    products.forEach(function (product) {
        let category = product.dataset.category;
        let brand = product.dataset.brand;
        let productName = product.innerText.toLowerCase();
        let searchMatch = productName.indexOf(searchValue) !== -1;

        // Category Condition
        let categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.indexOf(category) !== -1 ||
            selectedCategories.indexOf(brand) !== -1;

        // Display Condition
        if (searchMatch && categoryMatch) {
            product.style.display = "block";
            visibleCount++;
        } 

        else {
            product.style.display = "none";
        }
    });
}


// Checkbox Event
categoryChecks.forEach(function (check) {
    check.addEventListener("change", filterProducts);
});

searchInput.addEventListener("input", filterProducts);
filterProducts();
