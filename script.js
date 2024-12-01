const addFoodBtn = document.getElementById("add-food-btn")

const popupMenu = document.getElementById("popup-menu")
const overlay = document.getElementById("overlay")

let foodData

fetch("./foods.json")
    .then(response => response.json())
    .then(data => {
        foodData = data
    })

const openOverlay = () => {
    popupMenu.style.display = "flex"
    overlay.style.display = "block"
    displayFoodMenu()
}

const displayFoodMenu = () => {
    popupMenu.innerHTML = `
    <h4 id="add-food-title">Add Food</h4>
    <input type="search" id="food-search" class="search-input" placeholder="Search for foods">
    <div class="table-wrapper">
        <table id="add-food-table" class="add-food-table">
            <thead>
                <tr class="table-header">
                    <th class="table-header-item">Item</th>
                    <th class="table-header-item">Calories</th>
                </tr>
            </thead>
            <tbody id="add-food-table-body">

            </tbody>
        </table>
    </div>
    <div class="add-food-user-input">
        <div class="label-and-input choose-weight-div">
            <label for="choose-weight">Amount (g)</label>
            <input type="text" id="choose-weight">
        </div>
    </div>
    <button id="submit-btn">Submit</button>
    `
    const addFoodTableBody = document.getElementById("add-food-table-body")
    populateFoods(addFoodTableBody)
}


const populateFoods = (area) => {
    foodData.forEach(item => {
        area.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.calories}</td>
        </tr>
        `
    })

    let rows = area.querySelectorAll("tr")

    rows.forEach(row => {
        row.addEventListener("click", () => {
            rows.forEach(r => r.classList.remove("selected-row"))
            row.classList.add("selected-row")
        })
    })
}




addFoodBtn.addEventListener("click", openOverlay)

