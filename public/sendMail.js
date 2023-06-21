const submit = document.querySelector("#send-btn");
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const file = document.querySelector("#file-input").files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    var csvdata = event.target.result;
    let rowData = csvdata
      .split("\n")
      .map((email) => email.trim())
      .filter((email) => email !== "");
    console.log(rowData);
    axios
      .post("http://localhost:3002/api/v1/mail", {
        mail: rowData,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
});




// const fileInput = document.getElementById("csv-form");
// const submit = document.getElementById("send-btn");
// var validEmails = [];
// var invalidEmails = [];

// // Read and display the contents of a CSV file
// fileInput.addEventListener("change", async (e) => {
//     e.preventDefault();
//     // Read contents of CSV file
//     var file = document.getElementById("file-input").files[0];
//     var reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = function (event) {
//         var csv = event.target.result;
//         var lines = csv.split('\n');
//         for (var i = 0; i < lines.length; i++) {
//             var emails = lines[i].trim();
//             // Email validation regex
//             var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
//             if (emailRegex.test(emails)) {
//                 validEmails.push(emails);
//             } else {
//                 invalidEmails.push(emails);
//             }
//         }
//         submit.addEventListener("click", async () => {
//             axios
//                 .post('http://localhost:3002/api/v1/mail', {
//                     mail: validEmails,
//                 })
//                 .then((res) => {
//                     console.log(res.data);
//                     alert("Emails sent successfully!");
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     alert("Error sending emails!");
//                 });
//         });

//         // Display valid and invalid emails
//         document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
//         document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");
//         document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
//         document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
//     };
// });

// // Send valid emails to the server
// // submit.addEventListener("click", async () => {
// //     axios
// //         .post('http://localhost:3002/api/v1/mail', {
// //             mail: validEmails,
// //         })
// //         .then((res) => {
// //             console.log(res.data);
// //             alert("Emails sent successfully!");
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //             alert("Error sending emails!");
// //         });
// // });