/// <reference types="cypress" />


export class task1{
    #navbarMainMenu="#nav-xshop a.nav-a"
    #helpTopicsList=".help-topics-list-wrapper li"
    #helpContentList=".active .fs-match-card-title"
    #changeAddressPopUp=".a-button-input"

    //track your package page
    

    validateMainMenu=(mainMenuNamesList)=>{
        cy.get(this.#navbarMainMenu).then((navbarMainMenu)=>{
            for (let index = 0; index < navbarMainMenu.length; index++) {
                cy.get(this.#navbarMainMenu).eq(index).should('contain',mainMenuNamesList[index])
            }
        })
    } 

    closeChangeAddressPopUp=()=>{
        cy.get(this.#changeAddressPopUp,{timeout:2000}).eq(0).click()
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