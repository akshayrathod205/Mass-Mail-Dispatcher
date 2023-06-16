const fileInput = document.getElementById("file-input");
const sendBtn = document.getElementById("send-btn");

// Read and display the contents of a CSV file
fileInput.addEventListener("change", () => {
    console.log("File selected");
    var validEmails = [];
    var invalidEmails = [];

    // Read contents of CSV file
    var file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csv = event.target.result;
        var lines = csv.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var email = lines[i].trim();
            // Email validation regex
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
            if (emailRegex.test(email)) {
                validEmails.push(email);
            } else {
                invalidEmails.push(email);
            }
        }

        // Display valid and invalid emails
        document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
        document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");
        document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
        document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
    };
});

// write a fuction to send email to all valid emails
sendBtn.addEventListener("click", () => {
    
});