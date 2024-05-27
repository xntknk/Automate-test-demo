import { SLA } from "../../PageObject/SLA_POM.cy";

const sla = new SLA

describe('SLA CRUD', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login("approval1@bol.com", "0123456789")
    });

    it('SLA CRUD', () => {

        sla.gotoPage() 
        sla.typeSearchbox('de') //type the keyword and check the result
        sla.clickEditBtn('Deduction') // select service you want to edit
        sla.selectDor(3) // select Day of response
        sla.selectRemind("Week") // select remind Note *** If you want to select 1 week please use "Week"
        sla.Assign('Staff') //select tole to assign
        sla.details('Hello World')
        sla.selectStatus('Active') // Active / Inactive
        sla.clickSaveBtn()
    });
});