import {Control} from "../transformers/control";
import {ControlPathTransformer} from "../transformers/control-transformer";
import {loginIds} from "../locators/LoginLocators";

class BasePage {

    public openUrl(path: string) {
        cy.visit('https://the-internet.herokuapp.com/' + path)
    }

    public clickOnButton(buttonName: string) {
        cy.fixture('elements').then((jsonPath) => {
            let element = jsonPath
            let textBoxItem: Control = ControlPathTransformer.getControl(buttonName, element);
            let buttonElement = cy.get(`${textBoxItem.getLocator()}`);
            buttonElement.click()
        })
    }

    public fillValueInInputField(textbox: string, value: string) {
        cy.fixture('elements').then((jsonPath) => {
            let element = jsonPath
            let textBoxItem: Control = ControlPathTransformer.getControl(textbox, element);
            let textBoxElement = cy.get(`${textBoxItem.getLocator()}`);
            textBoxElement.type(value)
        })
    }

    pub

}

export const basePage = new BasePage();

