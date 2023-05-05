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
})