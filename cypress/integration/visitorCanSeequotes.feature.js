describe('Visitor can see the quotes', () => {
  before(() => {
    cy.visit("/");
  });
  
  it('visitor can see list of the quotes', () => {
    cy.get("[data-cy=button]").contains("Quotes").click();
    cy.get("[data-cy=quotes]").within(()=> {
      cy.get("[data-cy=id]").should("contain", "1");
      cy.get("[data-cy=author]").should("contain","Kevin Kruse")
    }) 
  });
});