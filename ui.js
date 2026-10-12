function updateUI(){
    var records = getAllRecords();

    var countElem = document.getElementById("records-count");
    if (countElem) countElem.textContent = records.length;
    var total = 0;
    var cats = {};
    for (var i = 0; i < records.length; i++){
        var amt = parseFloat(records[i].amount) || 0;
        total += amt;
        var c= records[i].category || "other";
        cats[c] = (cats[c] || 0) +amt;
    }
    var totalElem = document.getElementById("total");
    if (totalElem) totalElem.textContent = "$" + total.toFixed(2);
    var topCat = "None", max = -1;
    for (var k in cats) {
        if (cats[k] > max) { max = cats[k]; topCat =k;}

    }
    var cards = document.querySelectorAll("#dashboard .card");
    if (cards[2]) cards[2].querySelector("strong").textContent = "Top category: " + topCat;

    var capElem = document.getElementById("cap-message");
    if (capElem) capElem.textContent = "Cap: $" + (300 - total).toFixed(2) + " left";
}
function setupTabs() {
    var buttons = document.querySelectorAll("header nav button");
    var sections = document.querySelectorAll("main > section");

    buttons.forEach(function(btn, idx) {
        btn.addEventListener("click", function() {
            buttons.forEach(function(b) { b.classList.remove("active"); });
            sections.forEach(function(s) { s.classList.remove("active"); });
            btn.classList.add("active");
            if (sections[idx]) sections[idx].classList.add("active");
        });
    });
}