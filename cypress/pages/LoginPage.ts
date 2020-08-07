import { loginIds } from '../locators/LoginLocators';

class LoginPage {
    public visit(path: string) {
        cy.visit('https://the-internet.herokuapp.com' + path);
        cy.url().should('include', 'login')
    }

    get username() {
        return cy.get(`${loginIds.username}`);
    }
    get password() {
        return cy.get(`${loginIds.password}`);
    }
    get successMsg() {
        return cy.get(`${loginIds.successMsg}`);
    }
    get errorMsg() {
        return cy.get(`${loginIds.errorMsg}`);
    }
    get logOutButton() {
        return cy.get(`${loginIds.logOutButton}`);
    }

}
export const login = new LoginPage();