#!/usr/bin/env node
const exec=require("shelljs")["exec"],program=require("commander");program.version("1.0.0").description("Clone a project from a Git repository and set it up.").option("--help","Display help").option("-r, --repository <path>","Specify the repository to clone from").option("-d, --directory <path>","Specify the directory to clone into (default: current directory)").action(async _=>{if(_.help)console.log(`
 Help Desk:`),console.log(`

        1) -r vuexy-nextjs-typescript: This will create a nextjs project with typescript using vuexy theme with basic architecture. It uses folder structure routing. 
        
          => Suggestion: "project-backpack -r vuexy-nextjs-typescript -d folder_name_1"
        

        `);else{const t=_.directory||".";_=_.repository||".";let r="",e="";"vuexy-nextjs-typescript"!==_?console.log("Invalid repository option."):(r="https://github.com/RN-T-org/R-N-T.git",e="nextjs-typescript project",console.log(`Setting up ${e} into ${t}...`),await exec("rm -rf "+t,(e,_,o)=>{e?console.error("Error deleting directory: "+e.message):(console.log(`Existing ${t} directory cleared...`),exec(`git clone ${r} `+t,(e,_,o)=>{e?console.error("Error creating project: "+e.message):exec(`rm -rf ${t}/.git`,(e,_,o)=>{e?console.error("Directory Error: "+e.message):(console.log("Cleaning unwanted files..."),console.log("New project setup successfully."),console.log(`
                                       ______                __           __   __         
                                      / ____/_______  ____ _/ /____  ____/ /  / /_  __  __
                                     / /   / ___/ _ \\/ __ \`/ __/ _ \\/ __  /  / __ \\/ / / /
                                    / /___/ /  /  __/ /_/ / /_/  __/ /_/ /  / /_/ / /_/ / 
                                    \\____/_/   \\___/\\__,_/\\__/\\___/\\__,_/  /_.___/\\__, /  
                                                                                 /____/   

`),console.log(`
              ██╗ █████╗ ██╗   ██╗██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗      ██████╗  ██████╗ ██╗  ██╗██╗██╗     
              ██║██╔══██╗╚██╗ ██╔╝██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗    ██╔════╝ ██╔═══██╗██║  ██║██║██║     
              ██║███████║ ╚████╔╝ █████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝    ██║  ███╗██║   ██║███████║██║██║     
         ██   ██║██╔══██║  ╚██╔╝  ██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗    ██║   ██║██║   ██║██╔══██║██║██║     
         ╚█████╔╝██║  ██║   ██║   ██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║    ╚██████╔╝╚██████╔╝██║  ██║██║███████╗
          ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝
                                                                                                                             
                                  `),console.log(`
                                                                       
                                    |_|  _. ._  ._        _  _   _| o ._   _        
                                    | | (_| |_) |_) \\/   (_ (_) (_| | | | (_| o o o 
                                            |   |   /                      _|                                                         
              `))})}))}))}}),program.parse(process.argv);