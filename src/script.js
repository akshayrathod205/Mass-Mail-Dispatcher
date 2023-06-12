// A callback function to read valid and invalid emails from a csv file and display them in a table
function readEmails() {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    var emails = [];
    var invalidEmails = [];
    reader.onload = function (e) {
        var text = e.target.result;
        var lines = text.split("\n");
        for (var i = 0; i < lines.length; i++) {
            if (validateEmail(lines[i])) {
                emails.push(lines[i]);
            } else {
                invalidEmails.push(lines[i]);
            }
        }
        displayEmails(emails, invalidEmails);
    };
    reader.readAsText(file);
}