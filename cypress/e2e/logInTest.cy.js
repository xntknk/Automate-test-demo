describe('Login Testcase', () => {
    it('Test Login Token', () => {
        
        cy.LoginAPI().then(function()
        {
            cy.visit("https://mts-bol-dev.inconstruction.website/",
            {

                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }

            })
        })
        cy.get('h1').contains("Dashboard")

    });
});