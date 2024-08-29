describe('Custom Video Player Tests', () => {
    it('check if the diff components exist', () => {
        // Check if the video element has the correct src attribute
        cy.get('video').first().should('have.attr', 'src').should('include', 'video.mp4');
        
        // Check if the progress bar filled element exists
        cy.get('.progress__filled').should('exist');
        
        // Check if the play/pause button exists and has the correct class
        cy.get('.player__button.toggle').should('exist');
        
        // Check if there are exactly two input elements
        cy.get('input').should('have.length', 2);
        
        // Check if the 10s and 25s skip buttons are present
        cy.contains('« 10s').should('exist');
        cy.contains('25s »').should('exist');
    });
});
