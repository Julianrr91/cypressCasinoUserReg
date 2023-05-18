//Base page class needed as parent class for the object model paging
export class Page {
    load(){
        return cy.visit('/',{failOnStatusCode: false});
    }

    closePopUp(){
        return cy.get('.mfp-close').click();
    }
}
