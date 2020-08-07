import {basePage} from "../../pages/BasePage";

describe('login with valid user', () => {
    context('check', () => {
        it('', () => {
            basePage.openUrl('login')
            basePage.fillValueInInputField('Login/Username', "tomsmith")
            basePage.fillValueInInputField('Login/Password', "SuperSecretPassword!{enter}")
            basePage.clickOnButton('Login/Login Button')
            debugger
        })
    })

//     login.username.type('invalidUser')
//     login.password.type('invalidPassword{enter}')
//     login.errorMsg.contains('Your username is invalid!')
//     login.logOutButton.should('not.exist')
//     // basePage.fillValueInInputField('login/password',"password_test")
//     console.log("frrf")
// })
// it('User granted access with valid details', () => {
//     login.visit('path')
//     login.username.type('tomsmith')
//     login.password.type('SuperSecretPassword!{enter}')
//     login.successMsg.contains('You logged into a secure area!')
//     login.logOutButton.should('exist')
})