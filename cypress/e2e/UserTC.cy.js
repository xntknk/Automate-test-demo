import { user_all } from "../../PageObject/UserPOM.cy";

const user = new user_all 
describe('User CRUD', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.login('approval1@bol.com', '0123456789')
    });

    it('Create User', () => {
        user.gotoPage() //visit User page
        user.clickCreateBtn() // CLick Create button

        // Check Require Field
        user.clickSaveBtn() //Click Save button
        user.reqFieldCheck() // Check Require field

        //Enter Info
        user.enterFname("Mister") // Firstname
        user.enterLname("Cypress")  // Lastname
        user.enterMobileNo("0123456789") // Mobile Number
        user.enterEmail("mrcypress@email.com") // Email
        user.selectRole("view","Viewer") // Select role
        user.enterDept('Reporter') // Department
        user.enterSubDept('Viewer') // Sub department
        user.enterPosition('Reporter') // Position
        // user.toggleSwitch() //toggle enable/disable optional
        user.clickSaveBtn() // Save
        cy.wait(5000)
        user.gotoPage()

    it('Edit User', () => {

        user.gotoPage()
        user.clickEditBtn("Mister Cypress") // Click Edit button
        user.enterFname("MR.") // Edit Fname
        user.enterLname("CP") // Edit last name
        user.enterMobileNo("0") //Edit mobile number
        user.selectRole('staff','Staff') // Edit role
        user.enterDept('Reporter1') // Department
        user.enterSubDept('Viewer1') // Sub department
        user.enterPosition('Reporter1') // Position
        user.toggleSwitch() // Enable/Disable
        user.clickSaveBtn() // Save


    })


        
        
    });
});