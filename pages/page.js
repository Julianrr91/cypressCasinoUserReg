export class Page {
    load(){
        return cy.visit('/',{failOnStatusCode: false});
    }

    closePopUp(){
        return cy.get('.mfp-close').click();
    }
}
