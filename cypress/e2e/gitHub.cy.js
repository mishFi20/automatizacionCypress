describe('Utilizar la plataforma GitHub', function(){
    it('Buscar y abrir una solicitud de  de cambios específica en GitHub',function(){
        cy.viewport(1024, 780);
        cy.visit('https://github.com/');
        cy.get('button[type="button"][placeholder="Search or jump to..."]').click();
        cy.get('input#query-builder-test').type("cypress {enter}");
        cy.get('a[href="/cypress-io/cypress-example-recipes"]').click();
        cy.get('a#pull-requests-tab[href="/cypress-io/cypress-example-recipes/pulls"]').click();
        cy.get('a#issue_865_link').click();
        cy.get('a#code-tab[href="/cypress-io/cypress-example-recipes"]').click();
        cy.get('button[type="button"][id=":R55ab:"]').click();
        cy.get('button[aria-label="Copy url to clipboard"]').click();
    });
});