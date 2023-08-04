#!/usr/bin/env node

const { exec } = require("shelljs");
const program = require("commander");
var clc = require("cli-color");

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
      console.log(`\nSupported Terminals:\n\n1) Gitbash terminal\n\n`);
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
      console.log(clc.yellow(`Setting up ${message} into ${directory}...`));
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
            console.log(
              clc.yellow(
                `\nChecking duplicate folder if exist then overwriting it...`
              )
            );
            exec(`rm -rf ${directory}/.git`, (error, stdout, stderr) => {
              if (error) {
                console.error(`Directory Error: ${error.message}`);
                return;
              }
              console.log(`Successfully write files...`);
              console.log(clc.green("New project setup successfully."));
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
              console.log(
                clc.yellow(`\nAdding Yarn globally for dependency...`)
              );
              exec(`npm i -g next yarn`, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Directory Error: ${error.message}`);
                  return;
                }
                console.log(clc.green(`Successfully added Yarn globally...`));

                console.log(clc.yellow(`\n-------------------------------- `));

                console.log(
                  clc.yellow(`\nRun: `) + clc.greenBright(`cd ${directory}`)
                );
                console.log(
                  clc.yellow(`\nRun: `) +
                    clc.greenBright(`yarn && yarn run dev`)
                );
                console.log(clc.yellow(`\n-------------------------------- `));

                console.log("\n\nCreated by: " + clc.bgBlue("Jaykumar Gohil"));
                console.log(clc.whiteBright("Happy Codding..."));
              });
            });
          }
        );
      });
    }
  });

program.parse(process.argv);
