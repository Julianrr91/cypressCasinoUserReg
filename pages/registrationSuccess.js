import { Page } from './page';

//Page object model for the user verification page after user has sucessfully complete registration using email

export class RegistrationSuccess extends Page{
    constructor(){
        super()
    }

    getCongratulationsTitle(){
        return cy.get('.notification__title');
    }

    getCongratulationsDesc(){
        return cy.get('.notification__description');
    }

    getViewProfileButton(){
        return cy.get('.button.button--s2.button--t1 ');
    }

    getBrowseGamesButton(){
        return cy.get('.button.button--s2.button--t4');
    }
}