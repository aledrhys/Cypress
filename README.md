# Cypress File Uploader Test

## Pre-requisites:
PC has the following already installed:
- Node.js
- NPM
- Visual Studio Code
(Optional: Cypress is already installed)

## Steps to run test:
1. Open VS Code 
2. Open the Terminal window
3. Change directory in command prompt to required folder that you want to install the Repo
4. Git Clone/Pull down "main" branch to specified directory
5. Run Cypress Install

       npm install cypress --save-dev

6. Run File Upload Install
       
       npm install --save-dev cypress-file-upload

7. To Run Cypress Tests (Defined in Package.json under Scripts)

       npm run cy:open

8. Run the FileUploader test
