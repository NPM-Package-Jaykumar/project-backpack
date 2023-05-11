#!/usr/bin/env node

const { exec } = require("shelljs");
const program = require("commander");

program
  .version("1.0.0")
  .description("Clone a project from a Git repository and set it up.")
  .option("--help", "Display help")
  .option("-r, --repository <path>", "Specify the repository to clone from")
  .option(
    "-d, --directory <path>",
    "Specify the directory to clone into (default: current directory)"
  )
  .action(async (options) => {
    if (options.help) {
      console.log(`\n Help Desk:`);
      console.log(
        `\n
        1) -r vuexy-nextjs-typescript: This will create a nextjs project with typescript using vuexy theme with basic architecture. It uses folder structure routing. 
        \n          => Suggestion: "project-backpack -r vuexy-nextjs-typescript -d folder_name_1"
        \n
        `
      );
    } else {
      const directory = options.directory || ".";
      const repository = options.repository || ".";
      let repositoryUrl = "";
      let message = "";

      if (repository === "vuexy-nextjs-typescript") {
        repositoryUrl = "https://github.com/RN-T-org/R-N-T.git";
        message = "nextjs-typescript project";
      } else {
        console.log("Invalid repository option.");
        return;
      }
      console.log(`Setting up ${message} into ${directory}...`);
      await exec(`rm -rf ${directory}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error deleting directory: ${error.message}`);
          return;
        }
        console.log(`Existing ${directory} directory cleared...`);
        exec(
          `git clone ${repositoryUrl} ${directory}`,
          (error, stdout, stderr) => {
            if (error) {
              console.error(`Error creating project: ${error.message}`);
              return;
            }
            exec(`rm -rf ${directory}/.git`, (error, stdout, stderr) => {
              if (error) {
                console.error(`Directory Error: ${error.message}`);
                return;
              }
              console.log(`Cleaning unwanted files...`);
              console.log("New project setup successfully.");
              console.log("Created by:");
              console.log("Jaykumar Gohil");
              console.log("Happy Codding...");
              /*console.log(`
                                       ______                __           __   __         
                                      / ____/_______  ____ _/ /____  ____/ /  / /_  __  __
                                     / /   / ___/ _ \\/ __ \`/ __/ _ \\/ __  /  / __ \\/ / / /
                                    / /___/ /  /  __/ /_/ / /_/  __/ /_/ /  / /_/ / /_/ / 
                                    \\____/_/   \\___/\\__,_/\\__/\\___/\\__,_/  /_.___/\\__, /  
                                                                                 /____/   

`);
              console.log(`
              ██╗ █████╗ ██╗   ██╗██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗      ██████╗  ██████╗ ██╗  ██╗██╗██╗     
              ██║██╔══██╗╚██╗ ██╔╝██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗    ██╔════╝ ██╔═══██╗██║  ██║██║██║     
              ██║███████║ ╚████╔╝ █████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝    ██║  ███╗██║   ██║███████║██║██║     
         ██   ██║██╔══██║  ╚██╔╝  ██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗    ██║   ██║██║   ██║██╔══██║██║██║     
         ╚█████╔╝██║  ██║   ██║   ██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║    ╚██████╔╝╚██████╔╝██║  ██║██║███████╗
          ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝
                                                                                                                             
                                  `);
              console.log(`
                                                                       
                                    |_|  _. ._  ._        _  _   _| o ._   _        
                                    | | (_| |_) |_) \\/   (_ (_) (_| | | | (_| o o o 
                                            |   |   /                      _|                                                         
              `);*/

              exec(`npm i -g next yarn`, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Directory Error: ${error.message}`);
                  return;
                }
                console.log(`Cleaning unwanted files...`);
              });
            });
          }
        );
      });
    }
  });

program.parse(process.argv);
