/// <reference types="cypress" /> 

import { task1 } from '../pages/task1'

const task = new task1()

const amazonWebPageLink = "https://www.amazon.com/"
const amazonTrackYourPackagePageLink="https://www.amazon.com/gp/help/customer/display.html?nodeId=GENAFPTNLHV7ZACW"
const mainMenuList=['Today\'s Deals', 'Customer Service', 'Registry', 'Gift Cards', 'Sell']

describe('task1', () =>  {
    it('move to track your package page', () => {
        cy.visit(amazonWebPageLink)
        task.validateMainMenu(mainMenuList)
        task.goToCustomerServicePage()
        task.clickWheresMyStuff()
        task.moveToTrackYourPackage()
    })

    it('test track your package page', () => {
        cy.visit(amazonTrackYourPackagePageLink)
        task.searchMoreSolutions()
        task.wasThisInformationHelpful('yes')
        cy.reload()
        task.wasThisInformationHelpful('no')
        task.goToYourOrders()
    })
      
        // it('should display the "Track Your Package" button', () => {
        //   cy.get('#search-customer-service').type('Track Your Package{enter}')
        //   cy.get('.cs-search-result-container')
        //     .contains('Track Your Package')
        //     .should('be.visible')
        // })
      
        // it('should display the tracking information when a valid order ID is entered', () => {
        //   cy.get('#search-customer-service').type('Track Your Package{enter}')
        //   cy.get('.cs-search-result-container')
        //     .contains('Track Your Package')
        //     .should('be.visible')
        //     .click()
      
        //   cy.get('#search-terms-input').type('123-4567890-1234567')
        //   cy.get('#track-your-package-button').click()
        //   cy.get('.a-section.ship-track-container').should('be.visible')
        // })
      
        // it('should display an error message when an invalid order ID is entered', () => {
        //   cy.get('#search-customer-service').type('Track Your Package{enter}')
        //   cy.get('.cs-search-result-container')
        //     .contains('Track Your Package')
        //     .should('be.visible')
        //     .click()
      
        //   cy.get('#search-terms-input').type('invalid-order-id')
        //   cy.get('#track-your-package-button').click()
        //   cy.get('.a-alert-heading').should('have.text', 'There was a problem')
        // })      
      
})