import { login } from '../../pages/LoginPage';

describe('login with valid user', () => {
    context('check', () => {
        it('User denied access with invalid details', () => {
            login.visit('login')
            login.username.type('invalidUser')
            login.password.type('invalidPassword{enter}')
            login.errorMsg.contains('Your username is invalid!')
        })
    })
})