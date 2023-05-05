/// <reference types="cypress" /> 

import { task1 } from '../pages/task1'

const task = new task1()

const amazonWebPageLink = "https://www.amazon.com/"
const mainMenuList=['Today\'s Deals', 'Customer Service', 'Registry', 'Gift Cards', 'Sell']

describe('task1', () =>  {
    it('move to track your package page', () => {
        cy.visit(amazonWebPageLink)
        task.closeChangeAddressPopUp()
        task.validateMainMenu(mainMenuList)
        task.goToCustomerServicePage()
        task.clickWheresMyStuff()
        task.moveToTrackYourPackage()
    })

    // it('test track your package page', () => {
    //     cy.visit(amazonWebPageLink)

    // })
      
})