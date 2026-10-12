var key ="student_finance_records";
function saveTransacts(records) {
    var textData = JSON.stringify(records);
    localStorage.setItem(key, textData);
}
function loadTransacts() {
    var textData = localStorage.getItem(key);
    if(textData === null) {
        return [];
    }
    return JSON.parse(textData);
}