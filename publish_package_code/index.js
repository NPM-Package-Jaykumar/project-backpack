#!/usr/bin/env node
let exec=require("shelljs").exec,program=require("commander");var clc=require("cli-color");program.version("1.0.0").description("Clone a project from a Git repository and set it up.").option("--help","Display help").option("-r, --repository <path>","Specify the repository to clone from").option("-d, --directory <path>","Specify the directory to clone into (default: current directory)").action(async o=>{if(o.help)console.log(`
 Help Desk:`),console.log(`

        1) -r vuexy-nextjs-typescript: This will create a nextjs project with typescript using vuexy theme with basic architecture. It uses folder structure routing. 
        
          => Suggestion: "project-backpack -r vuexy-nextjs-typescript -d folder_name_1"
        

        `);else{console.log(`
Supported Terminals:

1) Gitbash terminal

`);let l=o.directory||".";let c="",e="";"vuexy-nextjs-typescript"!==(o.repository||".")?console.log("Invalid repository option."):(c="https://github.com/RN-T-org/R-N-T.git",e="nextjs-typescript project",console.log(clc.yellow(`Setting up ${e} into ${l}...`)),await exec("rm -rf "+l,(e,o,r)=>{e?console.error("Error deleting directory: "+e.message):(console.log(`Existing ${l} directory cleared...`),exec(`git clone ${c} `+l,(e,o,r)=>{e?console.error("Error creating project: "+e.message):(console.log(clc.yellow(`
Checking duplicate folder if exist then overwriting it...`)),exec(`rm -rf ${l}/.git`,(e,o,r)=>{e?console.error("Directory Error: "+e.message):(console.log("Successfully write files..."),console.log(clc.green("New project setup successfully.")),console.log(clc.yellow(`
Adding Yarn globally for dependency...`)),exec("npm i -g next yarn",(e,o,r)=>{e?console.error("Directory Error: "+e.message):(console.log(clc.green("Successfully added Yarn globally...")),console.log(clc.yellow(`
-------------------------------- `)),console.log(clc.yellow(`
Run: `)+clc.greenBright("cd "+l)),console.log(clc.yellow(`
Run: `)+clc.greenBright("yarn && yarn run dev")),console.log(clc.yellow(`
-------------------------------- `)),console.log("\n\nCreated by: "+clc.bgBlue("Jaykumar Gohil")),console.log(clc.whiteBright("Happy Codding...")))}))}))}))}))}}),program.parse(process.argv);