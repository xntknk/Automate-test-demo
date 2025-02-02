import { product_group } from "../PageObject/productGroupPOM.cy";

const prodGroup = new product_group
const url = 'https://mts-bol-dev.inconstruction.website/product-management/group'
describe('Product group CRUD', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login('approval1@bol.com', '0123456789')
    });

    it('Create New Group', () => {
        
        prodGroup.gotoPage(url) //visit product group page
        prodGroup.clickCreateBtn() //Click Create New button
        prodGroup.typeGroupName("Create by Cypress","Create by Cypress(Lao)") //Input Group Name
        prodGroup.selectProduct("IT", "IT devices") //Select Product
        prodGroup.selectProductType("Lap", "Laptops") //Select Product Type
        prodGroup.submitBtn() //Submit

    });
    it('Edit the product group', () => {

        prodGroup.gotoPage(url) //visit product group page
        prodGroup.clickEditBtn("Create by Cypress") // Click edit button
        prodGroup.addItem("IT", "IT devices", "mou", "Mouses")// Add more Item 

    });
    it('Delete', () => {

        prodGroup.gotoPage(url)
        prodGroup.delItem("Create by Cypress")// Delete the item in group
        prodGroup.delGroup("Create by Cypress")// Delete group
        
        
    });
});