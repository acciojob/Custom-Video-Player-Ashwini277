it('check if the diff components exist', () => {
    cy.get('video').first().should('have.attr', 'src').should('include', 'video.mp4');
    cy.get('.progress__filled');
    cy.get('.player__button.toggle');
    cy.get('input').should('have.length', 2);
    cy.contains('« 10s');
    cy.contains('25s »');
});
