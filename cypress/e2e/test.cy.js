describe('Expenses List', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("Can find an element", () => {
        cy.get(".expense-item") .should ('have.length', 1)

    })

    it('adds a new expense', () => {
        const expense = {
            title: 'New Expense',
            amount: 99.99,
            date: '2023-03-08'
        }

        cy.contains('Add Expense').click()
        cy.get('form input[type="text"]')
            .type("New Expense")
        cy.get('form input[type="number"]')
            .type("99.99")
        cy.get('form input[type="date"]')
            .type("2023-03-08")

        cy.get('button[type="submit"]').click()
        cy.get(".expense-item").should ("have.length", 2)
    })

    it('Could filter elements', () => {
        cy.get(".expenses-filter select").select(1)
        cy.get(".expense-item").should ("have.length", 2)
    })

})