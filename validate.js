
function validateDesc(text) {
    if (!text || text.trim() === "") {
        return "Description is required.";
    }

    if (text !== text.trim()) {
        return "Remove spaces at the beginning or end.";
    }

    if (/\b(\w+)\s+\1\b/i.test(text)) {
        return "You repeated a word in the description.";
    }

    return null;
}

function validateAmount(amount) {
    if (!/^\d+(\.\d{1,2})?$/.test(amount) || Number(amount) <= 0) {
        return "Enter a positive amount with up to 2 decimal places.";
    }

    return null;
}

function validateDate(date) {
    if (!date) {
        return "Please select a date.";
    }

    var parts = date.split("-");
    var year = Number(parts[0]);
    var month = Number(parts[1]);
    var day = Number(parts[2]);

    var newDate = new Date(year, month - 1, day);

    if (
        parts.length !== 3 ||
        newDate.getFullYear() !== year ||
        newDate.getMonth() !== month - 1 ||
        newDate.getDate() !== day
    ) {
        return "Please enter a valid date.";
    }

    return null;
}

function validateCategory(category) {
    if (!/^[a-zA-Z -]+$/.test(category)) {
        return "Category can only contain letters and spaces.";
    }

    return null;
}
