// Name replacement
let yourName = "Joleena Velez" // HINT: Replace this with your own name!
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Local Storage

// Making adjustments

// Gingerbread

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    let newValuegb =  ++gb;
    document.getElementById("qty-gb").textContent = (newValuegb);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
}) 
// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    let newValuegb = --gb;
    if (gb < 0) {
        gb = 0
        document.getElementById("qty-gb").textContent = gb;
    } else {
    document.getElementById("qty-gb").textContent = (newValuegb);
    let totalCookies = (gb + cc + sugar);
    if (totalCookies < 0) totalCookies = 0;
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
        }
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
    if (cc < 0) {
        cc = 0
        document.getElementById("qty-cc").textContent = cc;
    } else { document.getElementById("qty-cc").textContent = (newValuecc)
        localStorage.setItem('cc-total', newValuecc);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
}
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
    if (sugar < 0) {
        sugar = 0
        document.getElementById("qty-sugar").textContent = sugar;
    } else
    document.getElementById("qty-sugar").textContent = (newValuesugar)
        localStorage.setItem('sugar-total', newValuesugar);
    let totalCookies = (gb + cc + sugar);
    document.getElementById("qty-total").textContent= (totalCookies);
        localStorage.setItem('cookie-total', totalCookies);
})