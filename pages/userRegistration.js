require('@cypress/xpath');
import { Page } from './page';

export class UserRegistration extends Page{
    constructor(){
        super()         
    }

    getFormSelectEmail(){
        return cy.xpath('//li[contains(text(),"E-mail")]');
    }

    getFormSelectPhone(){
        return cy.xpath('//li[contains(text(),"Phone")]');
    }

    getEmailField(){
        return cy.get('[data-test="input-email"]');
    }

    getPhoneField(){
        return cy.get('[data-test="input-phone"]')
    }

    getTermsAndConditionsCheck(){
        return cy.get('[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]');
    }

    getPasswordField(){
        return cy.get('[data-test="input-password"]');
    }

    getPasswordConfirmationField(){
        return cy.get('[data-test="input-password_confirmation"]');
    }

    getPromoCodeField(){
        return cy.get('[data-test="input-promo_code"]');
    }

    getNoBonusRadio(){
        return cy.get('.special-radio__label[for="bonus-0"]');
    }

    getCreateAccountButton(){
        return cy.get('[data-test="control-submit"]');
    }

    getEmailError(){
        return cy.get('[data-test="error-email"]')
    }
    
    getTermsAndConditionsError(){
        return cy.get('[data-test="error-terms_and_conditions"]');
    }

    getPasswordError(){
        return cy.get('[data-test="error-password"]');
    }

    getPasswordConfirmationError(){
        return cy.get('[data-test="error-password_confirmation"]');
    }

    getPhoneError(){
        return cy.get('[data-test="error-phone"]');
    }

}