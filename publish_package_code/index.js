#!/usr/bin/env node
const exec=require("shelljs")["exec"],program=require("commander");program.version("1.0.0").description("Clone a project from a Git repository and set it up.").option("--help","Display help").option("-r, --repository <path>","Specify the repository to clone from").option("-d, --directory <path>","Specify the directory to clone into (default: current directory)").action(async o=>{if(o.help)console.log(`
 Help Desk:`),console.log(`

        1) -r vuexy-nextjs-typescript: This will create a nextjs project with typescript using vuexy theme with basic architecture. It uses folder structure routing. 
        
          => Suggestion: "project-backpack -r vuexy-nextjs-typescript -d folder_name_1"
        

        `);else{const s=o.directory||".";o=o.repository||".";let t="",e="";"vuexy-nextjs-typescript"!==o?console.log("Invalid repository option."):(t="https://github.com/RN-T-org/R-N-T.git",e="nextjs-typescript project",console.log(`Setting up ${e} into ${s}...`),await exec("rm -rf "+s,(e,o,r)=>{e?console.error("Error deleting directory: "+e.message):(console.log(`Existing ${s} directory cleared...`),exec(`git clone ${t} `+s,(e,o,r)=>{e?console.error("Error creating project: "+e.message):exec(`rm -rf ${s}/.git`,(e,o,r)=>{e?console.error("Directory Error: "+e.message):(console.log("Cleaning unwanted files..."),console.log("New project setup successfully."),console.log("Created by:"),console.log("Jaykumar Gohil"),console.log("Happy Codding..."),exec("npm i -g next yarn",(e,o,r)=>{e?console.error("Directory Error: "+e.message):console.log("Cleaning unwanted files...")}))})}))}))}}),program.parse(process.argv);