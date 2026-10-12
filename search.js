function safeRegex(query) {
    if (!query) return null;
    try { return new RegExp(query, "i");} catch (e) { 
        return null;
    
    }
}
function highlightText(text, query) {
    var safeText = String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var reg = safeRegex(query);
    if (!reg) return safeText;
    return safeText.replace(reg, function(m) { return "<mark>" + m + "</mark>";});

}
function filterRecords(records, query) {
    var reg = safeRegex(query);
    if (!reg) return records;
    return records.filter(function(r) {
        return reg.test(String(r.description || "")) ||
            reg.test(String(r.category || "")) ||
            reg.test(String(r.amount || ""));
    });
}