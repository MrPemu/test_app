describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('ion-searchbar').type('ipsum nulla')
  })
})