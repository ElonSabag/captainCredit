/// <reference types="cypress" />


export class task2{
  //login
  #homePageLoginButton="#nav-link-accountList"
  #enterEmail="#ap_email"
  #confirmEmail=".a-button-inner > #continue"
  #enterPassword="#ap_password"
  #submitButton="#signInSubmit"
  #rememberMeButton="[name='rememberMe']"


  

  #searchBar="#twotabsearchtextbox"
  #searchButton="#nav-search-submit-button"
  #productsList=".rush-component.s-latency-cf-section .s-product-image-container"
  #addToCartButton ="#add-to-cart-button"
  #currentColor="#inline-twister-expanded-dimension-text-color_name"
  #colorList="#inline-twister-expander-content-color_name li.a-declarative"

  #currentStyle="#inline-twister-expanded-dimension-text-style_name"
  #styleList="#inline-twister-expander-content-style_name .swatch-list-item-text" //start from 1
  // #addToCartMsgScissors=".a-size-medium-plus"
  #addToCartMsg="#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading"
  #productImage="#imgTagWrapperId"


  //cart
  #cartPage="#nav-cart"
  #prodcutsNamesList=".sc-product-link span span span.a-truncate-cut"
  #cartProductsDeleteButtons="[name^='submit.delete']"
  #quantityDropdownList="[data-action='a-dropdown-button']"
  #deliveryMsgList=".sc-delivery-messaging span span" 
  #emptyCartMsg=".a-spacing-mini.a-spacing-top-base"

  login=(email,password)=>{
    cy.get(this.#homePageLoginButton).click({ force: true }).wait(1000)
    cy.get(this.#enterEmail).type(email).wait(1000)
    cy.get(this.#confirmEmail).click({ force: true }).wait(1000)
    cy.get(this.#enterPassword).type(password)
    cy.get(this.#submitButton).click({ force: true })
    cy.get(this.#cartPage,{timeout:10000})
  }

  searchProduct=(productName)=>{
    cy.get(this.#searchBar).type(productName).wait(100)
    cy.get(this.#searchButton).click()
  }

  clickOnProduct=(productNumberFromList)=>{
    cy.get(this.#productsList).eq(productNumberFromList).click()
  }

  addProductToCart=()=>{
    cy.get(this.#addToCartButton,{timeout:4000}).click()
  }

  validateProductAdded=()=>{
    cy.get(this.#addToCartMsg, {timeout:10000}).invoke('text').should('contain','Added to Cart')
  }

  waitUntilImgVisible=()=>{
    cy.get(this.#productImage)
        .wait(10000)
        .should('be.visible')
  }

  changeColor=(color)=>{
    cy.get(this.#colorList).then((colorList)=>{
      for (let index = 0; index < colorList.length; index++) {
        cy.get(colorList).eq(index).trigger('mouseover').wait(1000)
        cy.get(this.#currentColor).invoke('text').then((currentColorName)=>{
            if (currentColorName === color) {
              cy.get(colorList).eq(index).click()
              expect(currentColorName).to.eql(color)
            }
          }) 
        }
      })
    }

    moveToCart=()=>{
      cy.get(this.#cartPage).click()
    }

    numberOfProductsInCart=()=>{
      cy.get(this.#cartProductsDeleteButtons).should('exist')
      cy.get(this.#cartProductsDeleteButtons).then((cartItems)=>{return cartItems.length})
    }

    emptyCart=()=>{
      cy.get(this.#cartProductsDeleteButtons).then((cartProductsDeleteButton)=>{
        for (let index = 0; index <= cartProductsDeleteButton.length; index++) {
          cy.get(this.#cartProductsDeleteButtons).eq(0).click({ force: true })
        }
        cy.get(this.#cartProductsDeleteButtons).eq(0).click({ force: true })
      })
      cy.get(this.#emptyCartMsg,{timeout:10000})
    }

    orderMoereScissors=()=>{
      cy.get(this.#quantityDropdownList).then((quantityDropdown)=>{
        cy.get(this.#quantityDropdownList).eq(0).click()
        cy.get("#quantity_4").click()
      })
    }

    scissorsDeliveryStatus=()=>{
        cy.get(this.#deliveryMsgList).eq(0).invoke('text').should('contain','Shipping fee applies')
        this.orderMoereScissors()
        cy.get(this.#deliveryMsgList).eq(0).invoke('text').should('contain','FREE Shipping')
    }
}
