// Read valid and invalid emails from a csv file
document.getElementById("file-input").addEventListener("change", function () {
    console.log("file-input change event");
    var file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    var validEmails = [];
    var invalidEmails = [];
    reader.readAsText(file);
    reader.onload = function (e) {
        var text = e.target.result;
        var lines = text.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var email = lines[i].trim();
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/
            if (emailRegex.test(email)) {
                validEmails.push(email);
            } else {
                invalidEmails.push(email);
            }
        }
        document.getElementById("validEmails").innerHTML = validEmails
        document.getElementById("invalidEmails").innerHTML = invalidEmails
        document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
        document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
    };
});