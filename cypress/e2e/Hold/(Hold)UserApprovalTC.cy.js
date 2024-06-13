// HOLD!!!!!!!!!!!!!!!!!!!


import { user_approval } from "../../../PageObject/(Hold)UserApprovalPOM.cy";

const approve = new user_approval

describe('User Approval CRUD', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login('approval1@bol.com', '0123456789')
    });

    it('Add Approver', () => {

        approve.gotoPage()
        approve.clickEditBtn('Deduction')
        approve.addApprovalBtn()
        approve.selectRole()
        
        


        
    });
});