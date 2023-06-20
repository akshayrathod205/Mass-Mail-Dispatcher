const fileInput = document.getElementById("file-input");
var validEmails = [];
var invalidEmails = [];


// Read and display the contents of a CSV file
fileInput.addEventListener("change", () => {
    // Read contents of CSV file
    var file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csv = event.target.result;
        var lines = csv.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var emails = lines[i].trim();
            // Email validation regex
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
            if (emailRegex.test(emails)) {
                validEmails.push(emails);
            } else {
                invalidEmails.push(emails);
            }
        }

        // Display valid and invalid emails
        document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
        document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");
        document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
        document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";

        axios.post('http://localhost:5000/api/v1/mail', {
            mail: validEmails,
        })
    };
});