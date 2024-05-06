export class product_group {


    gotoPage() {

        cy.visit('https://mts-bol-dev.inconstruction.website/product-group')
        cy.wait(3000)

    }

    clickCreateBtn(){
        cy.get('[aria-label="Create New"]').click()
        cy.get('H4').should('be.visible')
    }

    typeGroupName(group_name){
        cy.get('input[id="Group Name"]').type(group_name)
    }
    
    selectProduct(type_name, product_name){
        cy.get('span[aria-label="Select Product"]').click()
        cy.get('input[role="searchbox"]').should('be.visible').type(type_name)
        cy.wait(3000)
        cy.get('div.w-full').each(($el, index, $list) => 
        {
            if($el.text() == product_name)
            {
                cy.wrap($el).click()

            }
        })
    }
    selectProductType(type_product, product_type){
        cy.get('span[aria-label="Select Product Type"]').click()
        cy.get('input[role="searchbox"]').should('be.visible').type(type_product)
        cy.get('div.w-full').each(($el, index, $list) => 
        {
            if($el.text() == product_type)
            {
                cy.wrap($el).click()
            }
        })
    }
    submitBtn(){
        cy.get('button span').contains('Submit').click()
    }

    clickEditBtn(group_name){
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
            {
                const text=$el.text()
                if(text.includes(group_name))
                {
                    cy.get('[class="icon edit"]').eq(index).click()
                }
                
            })
    }

    addItem(type_name, product_name, type_product, product_type){

        this.selectProduct(type_name, product_name)
        this.selectProductType(type_product, product_type)
        

    }

    delItem(group_name){

        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
            {
                const text=$el.text()
                if(text.includes(group_name))
                {
                    cy.get('[class="icon edit"]').eq(index).click()
                }
                
            })
        cy.get(':nth-child(1) > .text-right > .p-button > .icon').click()
        cy.get('button span').contains('Yes').click()
        cy.get('button span').contains('Submit').click()

    }
    delGroup(group_name){

        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
            {
                const text=$el.text()
                if(text.includes(group_name))
                {
                    cy.get('[class="icon delete"]').eq(index).click()
                }
                
            })
            cy.get('button span').contains('Delete').click()

    }



    

}