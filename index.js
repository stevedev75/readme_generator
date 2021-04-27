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
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please describe the usage',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please list your Contributors',
    name: 'contribution',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please list your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please list your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'list',
    message: 'Please choose your license',
    name: 'license',
    choices: ['Apache', 'Eclipse', 'GNU/GPL'],
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please enter your GitHub path',
    name: 'gitHub',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },

  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  }
]
)
  .then((data) => {
    let licenseLink = ""
    if (data.license === "Apache") {
      licenseLink = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }

    else if (data.license === "Eclipse") {
      licenseLink = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }

    else if (data.license === "GNU/GPL") {
      licenseLink = "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }

    const filename = `README.md`;
    const readMe = `
  # ${data.projTitle}
  ## [![License](https://img.shields.io/badge/License-${data.license}-yellow.svg) (${licenseLink})]
 

  # Description
  ## ${data.projDescription}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Instructions
  ${data.instructions}

  ## Credits
  ${data.credits}

  ## License
  This application is covereed under the ${data.license} license.

  ## Questions
    For questions, you may email me at the address below, or review my work in my GitHub repository.
  * Email: ${data.email}
  * GitHub: ${data.gitHub}`;

    console.log(readMe);
    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });