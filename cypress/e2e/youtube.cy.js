describe('Buscando un video en Youtube', function() {
    it.skip('Buscar el video de cypress', function() {
        cy.visit("https://youtube.com");
        cy.get("input#search").click();
        cy.get("input#search").type("cypress js en español {enter}");
        cy.get("#video-title").contains("🤖 Tutorial de Cypress | Cypress Testing");
        cy.get("#video-title").contains("🤖 Tutorial de Cypress | Cypress Testing").click();
    });
    // Borrar historial de reproducciones
    describe('Eliminar historial de reproducciones', function(){
        it('Borrar todo el historial de reproducciones en YouTube', function(){
            cy.visit("https://youtube.com");
            cy.get('a#endpoint[href="/feed/history"]').click();
            cy.get('button[aria-label="Borrar todo el historial de reproducciones"]').click();
            cy.get('button[aria-label="Borrar historial de reproducciones"]').click();
            cy.get("#message").contains("Esta lista no tiene videos.").should('be.visible');
        });
        
    })
});