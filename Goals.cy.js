describe('Apply filters work', () => {
  beforeEach(() => {
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
    cy.get('#id_username').type('Rateeba');
    cy.get('#id_password').type('asdftyui');
    cy.get('select[name="login_as"]').select('staff')
    cy.get('.btn').click();
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
  })


  it('Apply filters work with no goals selected but other filter: not obsarved selected and a group', () => {
  
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a goal');

  });



  it('Apply filters work with no goals selected, other filter but select a group', () => {
    cy.get('[style="height: 10vh"] > :nth-child(1)').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a goal');

  });


  

  it('Apply filters work with no goals selected, other filter or group', () => {
    cy.get('[style="height: 10vh"] > :nth-child(1)').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a goal');

  });
  

  

  it('Apply filters work with not select goals or other filter or group or level', () => {
    cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('[style="height: 10vh"] > :nth-child(1)').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a goal');

  });


  

  it('Apply filters work with no level selected but select goals, group and other filters', () => {
    cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get('#observer_table_div').children().should('have.length', 0);
  });



  it('Apply filters work with no gruop selected but goals, other filter, level are selected', () => {
  
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
   
   cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a group');

  });



  it('Apply filters work with no level selected but goals, group and other filters are selected', () => {
    cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get('#observer_table_div').children().should('have.length', 0);
    });


   it('Apply filters work with no level selected or goals', () => {
    cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get('#observer_table_div').children().should('have.length', 0);
  });


    it('Apply filters work with just goal selected', () => {
      cy.get('[style="height: 10vh"] > :nth-child(1)').click();
      cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
   
   cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
      cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    cy.get('@alertStub').should('have.been.calledWithExactly', 'Please selet a group');

  });



    it('Apply filters work with no level selected or other filter ', () => {
      cy.get('[style="height: 10vh"] > :nth-child(1)').click()
    cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get('#observer_table_div').children().should('have.length', 0);
    });

})


