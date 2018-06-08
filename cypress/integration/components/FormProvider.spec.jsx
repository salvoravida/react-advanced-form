import React from 'react'
import Scenario from '@examples/components/FormProvider/DebounceTime'
import { defaultDebounceTime } from '@lib/src/components/FormProvider'

describe('FormProvider', function() {
  before(() => {
    cy.loadStory(<Scenario />)
  })

  it('Propagates the default value of "debounceTime"', () => {
    cy
      .get('[name="fieldOne"]')
      .type('fo')
      .wait(defaultDebounceTime)
      .should('have.class', 'is-invalid')
      .type('o')
      .wait(defaultDebounceTime)
      .should('not.have.class', 'is-invalid')
      .should('have.class', 'is-valid')
  })

  it('Supports custom value of "debounceTime"', () => {
    cy
      .get('[name="fieldTwo"]')
      .type('fo')
      .should('have.class', 'is-invalid')
      .type('o')
      .wait(0)
      .should('not.have.class', 'is-invalid')
      .should('have.class', 'is-valid')
  })
})
