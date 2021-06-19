/* eslint-disable no-undef */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('Test for herokuapp website', function() {

    beforeEach('Visitng herokuapp page',()=>{
        cy.visit('http://the-internet.herokuapp.com/');
    });

    it('Visits the herokuapp Demo Page and uploads a PDF file to the Uploader', function() {
    // Confirm website gives 200 response
    cy.request({
        method: "GET",
        url:'the-internet.herokuapp.com', //eslint-disable-line
    }).then(body => {
    expect(body.status).to.eq(200);
    });
    
    Cypress.on("uncaught:exception", () => false);
    
    //Visit the herokuapp website
    cy.contains("File Upload").click();
   
    // Confirm Page Title
    cy.contains("h3", "File Uploader").should("be.visible");
    cy.get("#file-upload").click();
    
    // Find test file and upload
    cy.get("input[type='file']").attachFile("file.pdf");
    cy.get("[id='file-submit']")
            .contains("Upload")
            .click();
    
    //Confirm the file uploaded
    cy.contains("h3", "File Uploaded").should("be.visible");
    cy.get("[id='uploaded-files']").contains("file.pdf");
    });

    it('Visits the herokuapp Demo Page, opens file uploader and tries to upload no files', function() {
    
    Cypress.on("uncaught:exception", () => false);

    //Visit the herokuapp website
    cy.contains("File Upload").click();
        
    // Once page loaded try and select the Upload button with no files uploaded
    cy.get("[id='file-submit']")
        .contains("Upload")
        .click();
    
    // Check the front end gives user an on-screen error
    cy.contains("h1", "Internal Server Error").should("be.visible");
    
    });

    it('Visits the herokuapp Demo Page and uploads a file JPG to the Uploader', function() {

    Cypress.on("uncaught:exception", () => false);
        
    //Visit the herokuapp website
    cy.contains("File Upload").click();
       
    // Confirm Page Title
    cy.contains("h3", "File Uploader").should("be.visible");
    cy.get("#file-upload").click();
        
    // Find test file and upload
    cy.get("input[type='file']").attachFile("test-file.jpg");
    cy.get("[id='file-submit']")
                .contains("Upload")
                .click();
        
    //Confirm the file uploaded
    cy.contains("h3", "File Uploaded").should("be.visible");
    cy.get("[id='uploaded-files']").contains("test-file.jpg");
    });

});