import { config } from "../../PageObject/ConfigurationPom.cy";

const cfg = new config
const partnerUrl = 'https://mts-bol-dev.inconstruction.website/setting/configurations/partner'
const configUrl = 'https://mts-bol-dev.inconstruction.website/setting/configurations/'
describe('Configuration & Partner Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login('approval1@bol.com', '0123456789')
    });
    
    it('(Partner) Create the partner', () => {
        cfg.gotoPage(partnerUrl)
        cfg.createPartnerBtn();
        cfg.clickSubmit();
        cfg.checkReq();
        cfg.enterCompany('Cypress')
        cfg.selectStatus('Inactive');
        cfg.clickSubmit();
        cfg.checkCreateSuccess('Cypress');

        });
    it('(Partner) Test Search', () => {
            cfg.gotoPage(partnerUrl)
            cy.wait(5000)
            cfg.searchKeyword('Cypr')
        });

    it('(Partner) Edit the partner', () => {
        cfg.gotoPage(partnerUrl)
        cy.wait(5000)
        cfg.clickEditBtn('Cypress');
        cfg.clearfield()
        cfg.enterCompany('Cypress Edit')
        cfg.clickSubmit()
        cfg.checkCreateSuccess('Cypress Edit')
        
    });
    it('(Partner) Delete the partner', () => {
        cfg.gotoPage(partnerUrl)
        cy.wait(5000)
        cfg.clickDelBtn('Cypress')
        cfg.confirmDel()
        
    });

    it.only('(Config) Create', () => {
        const username = 'Mr.Cypress'
        const button = 'Cancel'
        const pwd = '123456789'
        const partner = 'OSC_tester'
        const user_status = 'Inactive'
        const detail = 'Hello World'

        cfg.gotoPage(configUrl)
        cfg.createConfigBtn()
        cfg.enterUsername(username)
        cfg.passwordGen(pwd)
        cfg.eyeIcon();
        cfg.selectPartner(partner)
        cfg.selectStatus(user_status)
        cfg.writeDetails(detail)
        cfg.checkbox()
        cfg.clickSaveOrCancelBtn(button, username)
    });
    });
