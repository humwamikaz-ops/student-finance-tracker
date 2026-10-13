
function updateUI() {
    var records = getAllRecords();

    var countElem = document.getElementById("records-count");
    if (countElem) {
        countElem.textContent = records.length;
    }

    var total = 0;
    var cats = {};

    for (var i = 0; i < records.length; i++) {
        var amount = parseFloat(records[i].amount) || 0;
        total = total + amount;

        var category = records[i].category || "other";
        cats[category] = (cats[category] || 0) + amount;
    }

    var totalElem = document.getElementById("total");
    if (totalElem) {
        totalElem.textContent = "$" + total.toFixed(2);
    }

    var topCat = "None";
    var max = -1;

    for (var category in cats) {
        if (cats[category] > max) {
            max = cats[category];
            topCat = category;
        }
    }

    var cards = document.querySelectorAll("#dashboard .card");

    if (cards[2]) {
        cards[2].querySelector("strong").textContent =
            "Top category: " + topCat;
    }

    var capElem = document.getElementById("cap-message");

    if (capElem) {
        var remaining = 300 - total;
        if (remaining >= 0) {
            capElem.setAttribute("aria-live", "assertive");
            capElem.setContent = "Cap: $" + remaining.toFixed(2) + "left";
        }
        else {
            capElem.setAttribute("aria-live", "assertive");
            capElem.textContent = " !Exceeeded by $" + Math.abs(remainin).toFixed(2) + "!"
        }
}

function setupTabs() {
    var links = document.querySelectorAll("header nav a");
    var sections = document.querySelectorAll("main > section");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            var id = link.getAttribute("href").substring(1);

            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            links.forEach(function (item) {
                item.classList.remove("active");
            });

            var section = document.getElementById(id);

            if (section) {
                section.classList.add("active");
                link.classList.add("active");
            }
        });
    });

    var dashboard = document.getElementById("dashboard");

    if (dashboard) {
        dashboard.classList.add("active");
    }
    }
}
