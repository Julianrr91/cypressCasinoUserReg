require('@cypress/xpath');
import { Page } from '../pages/page';

//Page object model for the landing page of the site
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