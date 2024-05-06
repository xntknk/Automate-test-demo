// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', (username, password) => 
{
    cy.session([username,password], () =>
    {
        cy.visit('https://mts-bol-dev.inconstruction.website/')
        cy.get('#email-address').type(username)
        cy.get('#password').type(password)
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    })
    
})
// Cypress.Commands.add("login", () => 
// {
//   cy.request("POST", "https://mts-bol-dev.inconstruction.website/login",
//   {
//     "userEmail": "approval1@bol.com",
//     "userPassword": "0123456789"
//   }).then(function(response)
//   {
//     expect(response.status).to.eq(200)
//     Cypress.env('token',response.body.token);
//   })

// });

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })