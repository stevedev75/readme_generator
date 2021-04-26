const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter your project title?',
    name: 'projTitle',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please enter your project description?',
    name: 'projDescription',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please describe the Installation',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'input',
    message: 'Please describe the usage',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'input',
    message: 'Please list your Contributors',
    name: 'contributors',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

]

).then((data) => {
  const filename = `README.md`;
  const readMe = `
  # ${data.projTitle} / ${data.license} License

  # Description
  # ${data.projDescription}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
`;

  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});

