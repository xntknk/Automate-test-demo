export class SLA {
  gotoPage() {
    cy.visit("https://mts-bol-dev.inconstruction.website/sla");
  }

  typeSearchbox(keyword) {
    cy.get('[id="Keyword Search"]').type(keyword + "{enter}");
    cy.wait(2000);
    cy.get("tr td[class='text-undefined undefined']:nth-child(1)").each(
      ($el, index, list) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            expect(text.toLowerCase()).to.include(keyword.toLowerCase());
          });
      }
    );
  }

  clickEditBtn(service_name) {
    cy.get("tr td:nth-child(1)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes(service_name)) {
        cy.get('[class="icon edit"]').eq(index).click();
      }
    });
  }

  selectDor(dor) {
    cy.get('.p-dropdown-trigger').eq(1).click()
    cy.get('.p-dropdown-item').each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          if (text.includes(dor.toString())) {
            cy.wrap($el).click();
          }
        });
    });
  }
  selectRemind(remind){
    cy.get('.p-dropdown-trigger').eq(2).click()
    cy.get('.p-dropdown-item').each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            if (text.includes(remind.toString())) {
              cy.wrap($el).click();
            }
          });
      });

  }
  Assign(role){
    cy.get('.p-multiselect-label-container').click()
    cy.get('[class="p-multiselect-panel p-component"]').each(($el,index) => {
        const text = $el.text();
        
      if (text.includes(role)) {
        cy.log(role)
        cy.get('[role="listbox"]').eq(index).click();
      }
      
      });
      cy.get('.p-multiselect-label-container').click()

  }
  details(detail){
    cy.get('textarea').type(detail)

  }
  selectStatus(status){
    cy.get('.p-dropdown-trigger').eq(3).click()
    cy.get('.p-dropdown-item').each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            if (text.includes(status.toString())) {
              cy.wrap($el).click();
            }
          });
      });
  }

  clickSaveBtn(){

    cy.get('button').contains('Save').click()

  }
}
