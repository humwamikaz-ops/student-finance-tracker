
var records = loadTransacts();

function getAllRecords() {
    return records;
}

function addRecord(data) {
    var maxNum = 0;

    for (var i = 0; i < records.length; i++) {
        var num = parseInt(records[i].id.replace("rec_", ""));

        if (num > maxNum) {
            maxNum = num;
        }
    }

    var now = new Date().toISOString();

    var newRecord = {
        id: "rec_" + (maxNum + 1),
        description: data.description,
        amount: parseFloat(data.amount),
        category: data.category,
        date: data.date,
        createdAt: now,
        updatedAt: now
    };

    records.push(newRecord);
    saveTransacts(records);

    return newRecord;
}

function updateRecord(id, data) {
    for (var i = 0; i < records.length; i++) {
        if (records[i].id === id) {
            records[i].description = data.description;
            records[i].amount = parseFloat(data.amount);
            records[i].category = data.category;
            records[i].date = data.date;
            records[i].updatedAt = new Date().toISOString();

            saveTransacts(records);
            return records[i];
        }
    }

    return null;
}

function deleteRecord(id) {
    for (var i = 0; i < records.length; i++) {
        if (records[i].id === id) {
            records.splice(i, 1);
            saveTransacts(records);
            return true;
        }
    }

    return false;
}

function replaceRecords(newRecords) {
    records = newRecords;
    saveTransacts(records);
}
