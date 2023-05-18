import { Page } from './page';

//Page object model for the user verification page after user has sucessfully complete registration using phone number

export class Verification extends Page{
    constructor(){
        super()
    }

    getConfirmTitle(){
        return cy.get('.notification__title');
    }

    getConfirmDesc(){
        return cy.get('.notification__description');
    }

    getVerificationCodeField(){
        return cy.get('[data-test="input-code"]');
    }

    getVerifyButton(){
        return cy.get('[data-test="control-submit"]');
    }

    getRequestCodeButton(){
        return cy.get('[data-test="control-request"]');
    }
}