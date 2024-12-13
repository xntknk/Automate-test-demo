export class config {
  //Go to destination page
  gotoPage(url) {
    cy.visit(url);
  }

  // Search & filter
  searchKeyword(keyword) {
    cy.get('[id="Keyword Search"]').type(keyword + "{enter}");
    cy.wait(2000);
    cy.get("tr td[class='undefined']:nth-child(1)").each(($el, index, list) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.toLowerCase()).to.include(keyword.toLowerCase());
        });
    });
  }

  // CLick Create button
  createPartnerBtn() {
    cy.get("button span").contains("Create New").click();
    cy.get('[class="p-dialog-content"]').should("be.visible");
  }
  //Check require field
  checkReq() {
    cy.get(".p-error").should("be.visible");
  }
  // Fill the company name
  enterCompany(company_name) {
    cy.get('[id="Company / Organization"]').type(company_name);
  }
  //Active / Inactive
  selectStatus(status) {
    cy.get('[class="p-dropdown-label p-inputtext"]').eq(1).click();
    cy.get(".p-dropdown-item-label").each(($el, index, list) => {
      if ($el.text() == status) {
        cy.wrap($el).click();
      }
    });
    cy.get('[class="p-dropdown-label p-inputtext"]').contains(status);
  }
  //Click Submit button
  clickSubmit() {
    cy.get("button span").contains("Submit").click();
  }
  // Check popup message
  checkCreateSuccess(company_name) {
    cy.get(".p-toast-summary").should("be.visible").contains("Success");
    cy.get('[data-p-index="0"] > :nth-child(1)').contains(company_name);
  }

  //Edit

  // Click edit button
  clickEditBtn(company_name) {
    cy.get("tr td:nth-child(1)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes(company_name)) {
        cy.get('[class="icon edit"]').eq(index).click();
      }
    });
  }
  // Clear company field
  clearfield() {
    cy.get('[id="Company / Organization"]').clear().should("have.value", "");
  }

  //Delete
  clickDelBtn(company_name) {
    cy.get("tr td:nth-child(1)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes(company_name)) {
        cy.get('[class="icon delete"]').eq(index).click();
        cy.get("h4").contains("Confirm Delete").should("be.visible");
      }
    });
  }
  // Confirm delete
  confirmDel() {
    cy.get(".p-button-label").contains("Delete").click();
  }

  // Configuration element

  // Click Create button
  createConfigBtn() {
    cy.get("button span").contains("Create New").click();
    cy.get("h1").should("have.text", "Create");
  }
  // Enter the username
  enterUsername(username) {
    cy.get('[id="User Name"]').type(username);
  }

  // Enter the bra bra password and click generate button and check if passworad is changed
  passwordGen(ini_pwd) {
    cy.get('[class="p-inputtext p-component p-password-input"]').type(ini_pwd);
    cy.get(".p-button-label").contains("Generate").click();
    cy.get('[class="p-inputtext p-component p-password-input"]').should(
      "not.equal",
      ini_pwd
    );
  }
  // Check if the eye icon work properly
  eyeIcon() {
    cy.get('[class="p-inputtext p-component p-password-input"]').should(
      "have.attr",
      "type",
      "password"
    );
    cy.get('[class="p-icon p-input-icon"]').click();
    cy.get('[class="p-inputtext p-component p-password-input"]').should(
      "have.attr",
      "type",
      "text"
    );
  }
  selectPartner(partner) {
    // Open the dropdown
    cy.get(".p-dropdown-trigger").eq(0).click();

    // Get all dropdown items
    cy.get(".p-dropdown-item").each(($el) => {
      // Check if the text includes the partner
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          if (text.includes(partner)) {
            // Click the item if it matches
            cy.wrap($el).click();
          }
        });
    });
  }

  selectUserStatus(status) {
    // Open the dropdown
    cy.get(".p-dropdown-trigger").eq(1).click();

    // Get all dropdown items
    cy.get(".p-dropdown-item").each(($el) => {
      // Check if the text includes the status
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          if (text.includes(status)) {
            // Click the item if it matches
            cy.wrap($el).click();
          }
        });
    });
  }
  writeDetails(details) {
    cy.get("#Details").type(details);
  }
  checkbox() {
    cy.get("input[type='checkbox']").as("checkboxes").check();
    cy.get("@checkboxes").each((checkbox) => {
      expect(checkbox[0].checked).to.equal(true);
    });
  }
  clickSaveOrCancelBtn(save_cancel, username) {
    cy.get("button span").contains(save_cancel).click();

    if(save_cancel == 'Save'){

      cy.get("tr td:nth-child(1)").should('contain', username)
      

    }
    if(save_cancel == 'Cancel'){

      cy.get("tr td:nth-child(1)").should('not.contain', username)

    }
  }

}
