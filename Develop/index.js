const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
  .prompt([
    {
      type: "input",
      message: "what is the title of your application?",
      name: "title"
    },
    {
      type: "input",
      message: "Give a description of your application",
      name: "description"
    },
    {
      type: "checkbox",
      message: "What Licence will you be using?",
      name: "license",
      choices: [ 
        "BSD", 
        "MIT",
        "GPL", 
        
      ]},
    {
      type: "input",
      message: "Provide installation instructions",
      name: "installation"
    },
    {
      type: "input",
      message: "Provide Usage information:",
      name: "usage"
    },
    {
      type: "input",
      message: "Contribution Guidelines:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "test"
    },
    {
      type: "input",
      message: "Provide technologies used seperated by comma",
      name: "technologies"
    },
    {
      type: "input",
      message: "provide github username",
      name: "github"
    },
    {
      type: "input",
      message: "provide email address",
      name: "email"
    }
  ])
  .then(function(response) {
    async function writeMd() {
        try {

            let mdToWrite = 
`# ${response.title} 



## Description:
* ${response.description}          
 
## Table of contents
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Technologies](#technologies)
* [Questions](#questions)
            
            
## License
* ${response.license}        
            
## Installation
* ${response.installation}

       
## Usage
* ${response.usage}
            
## Contributing
* ${response.contributing}
            
## Test
* ${response.test}
            
## Technologies
Project is created with:
* ${response.technologies}
            
            
## Questions

* GutHub Username: ${response.github}

github.com/${response.github}

### You can email me at:

${response.email}`

          await writeFileAsync("index.md", mdToWrite);

          console.log(`Sucess! README was Generated!`)      

        } catch(err) {
          console.log(err)
        }
      }
      
      writeMd();
      
  });