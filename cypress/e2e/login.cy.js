describe('template spec', () => {
  it('passes', () => {
    // Clear all cookies
    cy.clearCookies()
    cy.visit('https://demoqa.com/');
    cy.contains('div[class="card-body"]>h5', 'Forms').click();
    cy.contains('span[class="text"]', 'Practice Form').click();
    cy.get('#firstName').type('Saif');
    cy.get('#lastName').type('Aslam');
    cy.get('#userEmail').type('saifullahaslam.78@');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type("0334445156");
    cy.get('#subjectsContainer').click();
    cy.get('#subjectsInput').type("English{enter}");
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#currentAddress').type('abc');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-3-input').type("NCR{enter}");
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3',{timeout:30000}).click();
    cy.get('#react-select-4-input').type("Delhi{enter}");



  })
})