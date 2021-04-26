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

  {
    type: 'input',
    message: 'Please list your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'input',
    message: 'Please list your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'list',
    message: 'Please choose your license',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL'],
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'input',
    message: 'Please enter your GitHub path',
    name: 'gitHub',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },

  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  }
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
  * [Contribution](#contributors)
  * [Credits](#credits)
  * [License](#license)
  
  # Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributors}

  ### Instructions
  ${data.instructions}

  ## Credits
  ${data.credits}

  ## License
  This application is covereed under the ${data.license} license.

  # Questions
    For questions, you may email me at the address below, or review my work in my GitHub repository.
  * Email: ${data.email}
  * GitHub: ${data.gitHub}`;

  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});

