import { config } from "../../PageObject/ConfigurationPom.cy";

const cfg = new config

describe('Configuration & Partner Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login('approval1@bol.com', '0123456789')
    });
    
    it('(Partner) Create the partner', () => {
        cfg.gotoPage('https://mts-bol-dev.inconstruction.website/setting/configurations/partner')
        cfg.createPartnerBtn();
        cfg.clickSubmit();
        cfg.checkReq();
        cfg.enterCompany('Cypress')
        cfg.selectStatus('Inactive');
        cfg.clickSubmit();
        cfg.checkCreateSuccess('Cypress');

        });
    it('(Partner) Test Search', () => {
            cfg.gotoPage('https://mts-bol-dev.inconstruction.website/setting/configurations/partner')
            cy.wait(5000)
            cfg.searchKeyword('Cypr')
        });

    it('(Partner) Edit the partner', () => {
        cfg.gotoPage('https://mts-bol-dev.inconstruction.website/setting/configurations/partner')
        cy.wait(5000)
        cfg.clickEditBtn('Cypress');
        cfg.clearfield()
        cfg.enterCompany('Cypress Edit')
        cfg.clickSubmit()
        cfg.checkCreateSuccess('Cypress Edit')
        
    });
    it('(Partner) Delete the partner', () => {
        cfg.gotoPage('https://mts-bol-dev.inconstruction.website/setting/configurations/partner')
        cy.wait(5000)
        cfg.clickDelBtn('Cypress')
        cfg.confirmDel()
        
    });

    it.only('(Config) Create', () => {
        cfg.gotoPage('https://mts-bol-dev.inconstruction.website/setting/configurations/')
        cfg.createConfigBtn('Create')
        cfg.enterUsername('Mr.Cypress')
        cfg.passwordGen('123')
        cfg.eyeIcon();
        cfg.selectPartner('OSC')
        
    });
    });
