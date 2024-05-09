export class user_approval {

    gotoPage(){

        cy.visit("https://mts-bol-dev.inconstruction.website/users/approval")
        cy.wait(3000)

    }
    clickEditBtn(approval_page){

        cy.get("td div span").each(($el, index, $list) => {

            const text=$el.text()
            if(text.includes(approval_page))
            {
                cy.get('[class="icon edit"]').eq(index).click()
            }
        })

    }
    addApprovalBtn(){

        cy.get('button span').contains("Add Approver").click()
        

    }



}