export class user_all {

    gotoPage(){
        cy.visit("https://mts-bol-dev.inconstruction.website/users")
        cy.wait(3000)

    }

    clickCreateBtn(){

        cy.get('[aria-label="Create New"]').click()
        cy.get("h5").contains("Personal Info").should('exist')
        cy.get("h5").contains("Position").should('exist')

    }

    clickSaveBtn(){

        cy.get('button span').contains("Save").click()

    }

    reqFieldCheck(){

        cy.get('.p-error').contains('firstName is required').should('exist')
        cy.get('.p-error').contains('lastName is required').should('exist')
        cy.get('.p-error').contains('email is required').should('exist')

    }

    enterFname(fname){

        cy.get("[id='First name']").type(fname)
        
    }

    enterLname(lname){

        cy.get("[id='Last name']").type(lname)

    }

    enterEmail(email){

        cy.get("[id='Email Address']").type(email)

    }

    enterMobileNo(mobile){

        cy.get("[id='Mobile Number']").type(mobile)

    }

    selectRole(type_role, role_name){

        cy.get("[class='p-dropdown-label p-inputtext p-placeholder']").click()
        cy.get("[role='searchbox']").type(type_role)
        cy.get(".p-dropdown-items-wrapper").each(($el, index, $list) => 
            {
                if($el.text() == role_name) {

                    cy.wrap($el).click()

                }
            })

    }

    enterDept(department){

        cy.get("#Department").type(department)

    }

    enterSubDept(sub_department){

        cy.get("[id='Sub Department']").type(sub_department)

    }

    enterPosition(position){

        cy.get("#Position").type(position)

    }

    toggleSwitch(){

        cy.get(".p-inputswitch-input").click()

    }

    clickCancelBtn(){

        cy.get("button span").contains("Cancel").click()

    }

    clickEditBtn(username){

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => 
        {

            if ($el.text() == username) {

                cy.get('[class="icon edit"]').eq(index).click()

            }

        })

        cy.get('a').should('have.attr','href').and('include', 'https://mts-bol-dev.inconstruction.website/users/')

    }

    



    

}