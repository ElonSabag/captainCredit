/// <reference types="cypress" /> 

import { task2 } from '../pages/task2'

const task = new task2()

const amazonWebPageLink = "https://www.amazon.com/"
const productsToAddBeforeTest=["https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_3?keywords=gaming+headsets&pd_rd_r=f2fe01a6-dcca-4098-8b41-20d8de560fa1&pd_rd_w=Hyb7o&pd_rd_wg=WiahM&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=NY7HWJEEVTRE80PNM8Q8&qid=1683119775&sr=8-3","https://www.amazon.com/SAMSUNG-Internal-Gaming-MZ-V8P2T0B-AM/dp/B08RK2SR23/ref=sr_1_5?qid=1683119840&s=electronics&sr=1-5&th=1"]
const scissorsLink ="https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z?th=1"
const pencilSharpener="Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray \,\ Blue (EPS4-BLUE)"
const cartLink="https://www.amazon.com/gp/cart/view.html?ref_=nav_cart"
const email="examplenovaop@gmail.com"
const password="elon0268"

describe('Aliasing', () => {
    beforeEach(() => {
      cy.visit(productsToAddBeforeTest[0])
      task.addProductToCart()
      task.validateProductAdded()
      cy.visit(productsToAddBeforeTest[1])
      task.addProductToCart()
      task.validateProductAdded()
      cy.wait(1000000)
    })

    it('Add pencil sharpener to the cart', () => {
      cy.visit(amazonWebPageLink)
      task.searchProduct(pencilSharpener)
      task.clickOnProduct(0)
      task.addProductToCart()
      task.validateProductAdded()
    })

    it('add scissors to the cart',()=>{
     cy.visit(scissorsLink)
     task.changeColor('Red, Black, Blue')
     task.addProductToCart()
     task.validateProductAdded()

     cy.visit(cartLink).wait(2000)
     task.scissorsDeliveryStatus()
    })

    afterEach(()=>{
      cy.visit(amazonWebPageLink)
      task.login(email,password)
      cy.visit(cartLink).wait(2000)
      task.emptyCart()
      cy.wait(2000)
    })
  })
  