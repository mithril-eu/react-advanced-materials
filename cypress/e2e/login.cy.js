// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("e2e tests", () => {
  beforeEach(() => {
    //navigate to login page
    cy.visit("/login")

    //enter the data in the login form
    cy.get('input[name="username"]').type("john@doe.com")
    cy.get('input[name="password"]').type("password")
    cy.get('button[type="submit"]').click()

    // simulate error case on password input
    // cy.contains("Treba bit barem 6").should("be.visible")
  })

  it("User successfully logs in", () => {
    cy.url().should("contain", "/dashboard")
  })

  it("User creates new author", () => {
    //navigate to login page
    // cy.visit("/dashboard/authors")

    cy.get('[data-testid="authorsLink"]').click()
    cy.url().should("contain", "/dashboard/authors")

    cy.get('[data-testid="newAuthorLink"]').click()
    cy.url().should("contain", "/dashboard/authors/new")

    cy.get('input[name="firstName"]').type("Pero")
    cy.get('input[name="lastName"]').type("Peric")
    cy.get('button[type="submit"]').click()

    cy.url().should("contain", "/dashboard/authors")

    // cy.contains("Pero Peric").should("be.visible")
  })
})
