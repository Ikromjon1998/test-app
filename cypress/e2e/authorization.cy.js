const baseUrl = Cypress.env('BASE_URL');
const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

console.log(baseUrl, username, password);
describe('Authorisation', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(1000);
        cy.get('#username').click().type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click()
        cy.wait(5000);
    });

    it('should login', () => {
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').contains('Ikromjon Ochilov');
        cy.wait(6000);
        cy.visit('https://care-stage.iubh.de/home#/admin/profil_studenten_edit.php4?stid=&lang=de&id=10483514');
        cy.wait(5000);

        cy.get('iframe#main').then(($main) => {
            const $body = $main.contents().find('body');
            cy.wrap($body)
                .find('td.taboff')
                .contains('Daten')
                .as('tabOff'); // alias the element for later use
            cy.get('@tabOff')
                .click();
            cy.wait(5000);
            cy.wrap($body).find('input#vorname').type('Ikromjon');
            cy.wrap($body).find('input#vorname').should('have.value', 'Ikromjon');
        });

        // cy.get('iframe#main').then(($main) => {
        //     const $body = $main.contents().find('body');
        //     cy.wrap($body)
        // });

    });

});
