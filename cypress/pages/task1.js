/// <reference types="cypress" />


export class task1{
    #navbarMainMenu="#nav-xshop a.nav-a"
    #helpTopicsList=".help-topics-list-wrapper li"
    #helpContentList=".active .fs-match-card-title"
    #findMoreSolutionsSearchBar="#helpsearch"
    #yourOrdersButton="#a-autoid-0-announce"
    #wasThisInformationHelpfulButtons="#hmd-FeedbackBox .a-declarative"
    #wasHelpfulMsg="#hmd-ConfirmYesBox p"
    #wasntHelpfulMsg="#hmd-ReasonBox p"
    #wasntHelpfulMsgAfterSubmitReason="#hmd-ConfirmNoBox > .a-box-inner > p"
    #wasntHelpfulSelectReasonBox=".a-radio input"
    #wasntHelpfulSubmitButton="#a-autoid-3"


    searchMoreSolutions=()=>{
        cy.get(this.#findMoreSolutionsSearchBar,{timeout:3000}).should('be.visible').type('i have another question')
    }

    goToYourOrders=()=>{
        cy.get(this.#yourOrdersButton,{timeout:5000}).should('be.visible').click()
        cy.get("#ap_email").should('be.visible')
    }

    wasThisInformationHelpful=(yesOrNo)=>{
        if(yesOrNo === 'yes'){
            cy.get(this.#wasThisInformationHelpfulButtons,{timeout:5000}).eq(0).should('be.visible').click()
            cy.get(this.#wasHelpfulMsg,{timeout:3000}).should('contain','Thank you for your feedback.')
        }
        else if(yesOrNo === 'no'){
            cy.get(this.#wasThisInformationHelpfulButtons,{timeout:5000}).eq(1).should('be.visible').click()
            cy.get(this.#wasntHelpfulMsg).should('contain','Please select what best describes the information:')
            cy.get(this.#wasntHelpfulSelectReasonBox).eq(0).check()
            cy.get(this.#wasntHelpfulSubmitButton).click()
            cy.get(this.#wasntHelpfulMsgAfterSubmitReason,{timeout:3000}).should('contain','unable to respond directly to your feedback')
        }
    }

    validateMainMenu=(mainMenuNamesList)=>{
        cy.get(this.#navbarMainMenu).then((navbarMainMenu)=>{
            for (let index = 0; index < navbarMainMenu.length; index++) {
                cy.get(this.#navbarMainMenu).eq(index).should('contain',mainMenuNamesList[index])
            }
        })
    } 
    
    goToCustomerServicePage=()=>{
        this.clickOnSpecificButtonFromList(this.#navbarMainMenu,'Customer Service')
    } 

    clickWheresMyStuff=()=>{
        this.clickOnSpecificButtonFromList(this.#helpTopicsList,'Where\'s my stuff')
    }

    moveToTrackYourPackage=()=>{
        this.clickOnSpecificButtonFromList(this.#helpContentList,'Track your package')
    }

    clickOnSpecificButtonFromList = (identify, buttonName) => {
        cy.get(identify, { timeout: 5000 }).each(($button) => {
          cy.wrap($button).wait(200).invoke('text').then(($name) => {
              if ($name.includes(buttonName)) {
                cy.wrap($button).click({ force: true });
              }
            })
        })
    }
}