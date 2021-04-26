const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter your project title?',
    name: 'projTitle',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

]

).then((data) => {
  const filename = `README.md`;
  const readMe = `
  # ${data.projTitle}
 }`;

  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});

