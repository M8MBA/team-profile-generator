
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
const generateSite = require('../utils/generate-site.js');

// const generateHTML = cardArr => {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
//   </head>
  
//   <body>
//     <header>
//       <div class="container flex-row justify-space-between align-center py-3">
//       </div>
//     </header>
//     <main class="container my-5">
//       ${cardArr}
//     </main>
//   </body>
//   </html>
//   `;
// }


// const writeToFile = results => {
//   fs.writeFile('../dist/index.html', results, err => {

//       if (err) {
//           console.log(err);
//           return;
//       } else {
//           resolve({
//               ok: true,
//               message:'Team Profile Generated'
//           });
//       };
//   });
// };