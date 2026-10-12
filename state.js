var records = loadTransacts();
function getAllRecords() {
    return records;

}
function addRecord(data) {
    var maxNum = 0;
    for (var i = 0; i < records.length; i++) {
        var num = parseInt(records[i].id.replace("rec_", ""));
        if (num >maxNum) {

        }
    }
    var now = new Date().toISOString();
    var newRecord = {
        id: "rec_" + (maxNum +1),
        description: data.description,
        amount: parseFloat(data.amount),
        category: data.category,
        date: data.date,
        createdAt: now,
        updatedAt: now

    };
}