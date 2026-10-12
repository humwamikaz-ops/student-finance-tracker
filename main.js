
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("#transaction-form");

    setupTabs();
    updateUI();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var description = document.querySelector("#dsc").value;
        var amount = document.querySelector("#amount").value;
        var category = document.querySelector("#category").value;
        var date = document.querySelector("#date").value;

        var error = validateDesc(description);

        if (!error) {
            error = validateAmount(amount);
        }

        if (!error) {
            error = validateDate(date);
        }

        if (!error) {
            error = validateCategory(category);
        }

        if (error) {
            alert(error);
            return;
        }

        addRecord({
            description: description,
            amount: amount,
            category: category,
            date: date
        });

        updateUI();
        form.reset();

        alert("Transaction saved!");
    });
});
