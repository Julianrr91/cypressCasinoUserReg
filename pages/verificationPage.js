import { Page } from './page';

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