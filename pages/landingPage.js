require('@cypress/xpath');
import { Page } from '../pages/page';

export class LandingPage extends Page{
    constructor(){
        super();
    }

    getSignIn(){
        return cy.xpath('//div[@data-login-toggle]');
    }

    getSignUp(){
        return cy.get('[data-test="nav-reg-head"]');
    }
} 