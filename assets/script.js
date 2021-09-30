// Name replacement
let yourName = "Joleena Velez" // HINT: Replace this with your own name!
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Local Storage
let newValuegb = localStorage.getItem('gb-total')
if (newValuegb) {
    document.getElementById("qty-gb").textContent = (newValuegb);
}
let newValuecc = localStorage.getItem('cc-total')
if (newValuecc) {
    document.getElementById("qty-cc").textContent = (newValuecc);
}
let newValuesugar = localStorage.getItem('sugar-total')
if (newValuesugar) {
    document.getElementById("qty-sugar").textContent = (newValuesugar);
}
let totalCookies = localStorage.getItem('cookie-total')
if (totalCookies) {
    document.getElementById('qty-total').textContent = (totalCookies);
}

// Gingerbread

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    let newValuegb = ++gb;
    document.getElementById("qty-gb").textContent = (newValuegb);
        localStorage.setItem('gb-total', newValuegb);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
}) 
// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    let newValuegb = --gb;
    document.getElementById("qty-gb").textContent = (newValuegb);
        localStorage.setItem('gb-total', newValuegb);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
}) 

// Chocolate Chip

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    let newValuecc = ++cc;
    document.getElementById("qty-cc").textContent = (newValuecc);
        localStorage.setItem('cc-total', newValuecc);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    let newValuecc = --cc;
    document.getElementById("qty-cc").textContent = (newValuecc)
        localStorage.setItem('cc-total', newValuecc);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
})

 // Sugar Sprinkle

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
 document.getElementById('add-sugar').addEventListener('click', function() {
    let newValuesugar = ++sugar;
    document.getElementById("qty-sugar").textContent = (newValuesugar)
        localStorage.setItem('sugar-total', newValuesugar);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
})
// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
 document.getElementById('minus-sugar').addEventListener('click', function() {
    let newValuesugar = --sugar;
    document.getElementById("qty-sugar").textContent = (newValuesugar)
        localStorage.setItem('sugar-total', newValuesugar);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
})
