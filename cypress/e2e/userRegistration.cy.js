import { UserRegistration } from "../../pages/userRegistration";
import { LandingPage } from "../../pages/landingPage";
import { RegistrationSuccess } from "../../pages/registrationSuccess";
import { Verification } from "../../pages/verificationPage";
import { generateRandomNumber } from "../fixtures/random";
import dataFile from '../fixtures/example.json';

describe('User Registration tests', () => {
  
  const userRegistrationPage = new UserRegistration();
  const landingPage = new LandingPage();
  const registrationSuccess = new RegistrationSuccess();
  const verificationPage = new Verification();

  it('Verify if a user cannot be registered using email form without filling all mandatory fields', { tags: ['@smoke'] }, () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getEmailError().should('not.be.visible');
    userRegistrationPage.getTermsAndConditionsError().should('not.be.visible');
    userRegistrationPage.getPasswordError().should('not.be.visible');
    userRegistrationPage.getPasswordConfirmationError().should('not.be.visible');
    userRegistrationPage.getCreateAccountButton().click();
    userRegistrationPage.getEmailError().should('be.visible');
    userRegistrationPage.getTermsAndConditionsError().should('be.visible');
    userRegistrationPage.getPasswordError().should('be.visible');
    userRegistrationPage.getPasswordConfirmationError().should('be.visible');
  })

  it('Verify if a user cannot be registered using phone form without filling all mandatory fields', { tags: ['@smoke'] }, () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getFormSelectPhone().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getPhoneError().should('not.be.visible');
    userRegistrationPage.getTermsAndConditionsError().should('not.be.visible');
    userRegistrationPage.getPasswordError().should('not.be.visible');
    userRegistrationPage.getPasswordConfirmationError().should('not.be.visible');
    userRegistrationPage.getCreateAccountButton().click();
    userRegistrationPage.getPhoneError().should('be.visible');
    userRegistrationPage.getTermsAndConditionsError().should('be.visible');
    userRegistrationPage.getPasswordError().should('be.visible');
    userRegistrationPage.getPasswordConfirmationError().should('be.visible');
  })

  it('Verify if a user cannot be registered using email form having a different password on the confirm password field', () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getPasswordConfirmationError().should('not.be.visible');
    userRegistrationPage.getEmailField().type(`email${generateRandomNumber()}@mail.com`);
    userRegistrationPage.getTermsAndConditionsCheck().click();
    userRegistrationPage.getPasswordField().type(dataFile.data.password);
    userRegistrationPage.getPasswordField().type(dataFile.data.wrongPassword);    
    userRegistrationPage.getCreateAccountButton().click();
    userRegistrationPage.getPasswordConfirmationError().should('be.visible');
  })

  it('Verify if a user cannot be registered using phone form having a different password on the confirm password field', () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getFormSelectPhone().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getPasswordConfirmationError().should('not.be.visible');
    userRegistrationPage.getEmailField().type(`email${generateRandomNumber()}@mail.com`);
    userRegistrationPage.getTermsAndConditionsCheck().click();
    userRegistrationPage.getPasswordField().type(dataFile.data.password);
    userRegistrationPage.getPasswordField().type(dataFile.data.wrongPassword);    
    userRegistrationPage.getCreateAccountButton().click();
    userRegistrationPage.getPasswordConfirmationError().should('be.visible');    
  })

  it('Verify if a user can be registered using email form', { tags: ['@smoke'] }, () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getEmailField().type(`email${generateRandomNumber()}@mail.com`);
    userRegistrationPage.getTermsAndConditionsCheck().click();
    userRegistrationPage.getPasswordField().type(dataFile.data.password);
    userRegistrationPage.getPasswordField().type(dataFile.data.password);    
    userRegistrationPage.getCreateAccountButton().click();
    registrationSuccess.getCongratulationsTitle().should('be.visible');
    registrationSuccess.getCongratulationsDesc().should('be.visible');
    registrationSuccess.getViewProfileButton().should('exist');
    registrationSuccess.getBrowseGamesButton().should('exist');
  })

  it('Verify if a user can be redirected to confimr phone page using phone form', { tags: ['@smoke'] }, () => {
    landingPage.load();
    landingPage.closePopUp();
    landingPage.getSignUp().click();
    userRegistrationPage.getNoBonusRadio().click();
    userRegistrationPage.getPhoneField().type(`310201${generateRandomNumber}`); 
    userRegistrationPage.getTermsAndConditionsCheck().click();
    userRegistrationPage.getPasswordField().type(dataFile.data.password);
    userRegistrationPage.getPasswordField().type(dataFile.data.password);    
    userRegistrationPage.getCreateAccountButton().click();
    verificationPage.getConfirmTitle().should("exist");
    verificationPage.getConfirmDesc().should("exist");
    verificationPage.getVerificationCodeField().should("exist");
    verificationPage.getVerifyButton().should("exist");
    verificationPage.getRequestCodeButton().should("exist");
  })
})
