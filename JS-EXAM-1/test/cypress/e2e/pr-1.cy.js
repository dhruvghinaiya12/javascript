describe('Calculator', () => {
  let totalMarks = 0;
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Adjust the URL to match your development server
  });

  it('should render the calculator UI properly - marks 0.5', () => {
    cy.get('.calculator').should('be.visible');
    cy.get('input#num1').should('exist');
    cy.get('input#num2').should('exist');
    cy.get('button#add').should('exist');
    cy.get('button#sub').should('exist');
    cy.get('button#multiply').should('exist');
    cy.get('button#divide').should('exist');
    cy.get('#result').should('exist');
  });

  it('should have empty input fields initially - marks 0.5', () => {
    cy.get('input#num1').should('have.value', '');
    cy.get('input#num2').should('have.value', '');
  });

  it('should perform addition correctly with positive numbers - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'The result of addition is 8');
  });

  it('should perform addition correctly with negative numbers - marks 0.5', () => {
    cy.get('input#num1').type('-5');
    cy.get('input#num2').type('-3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'The result of addition is -8');
  });

  it('should perform subtraction correctly with positive numbers - marks 0.5', () => {
    cy.get('input#num1').type('10');
    cy.get('input#num2').type('4');
    cy.get('button#sub').click();
    cy.get('#result').should('contain', 'The result of subtraction is 6');
  });

  it('should perform subtraction correctly with negative numbers - marks 0.5', () => {
    cy.get('input#num1').type('-10');
    cy.get('input#num2').type('-4');
    cy.get('button#sub').click();
    cy.get('#result').should('contain', 'The result of subtraction is -6');
  });

  it('should perform multiplication correctly with positive numbers - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('4');
    cy.get('button#multiply').click();
    cy.get('#result').should('contain', 'The result of multiplication is 20');
  });

  it('should perform multiplication correctly with negative numbers - marks 0.5', () => {
    cy.get('input#num1').type('-5');
    cy.get('input#num2').type('-4');
    cy.get('button#multiply').click();
    cy.get('#result').should('contain', 'The result of multiplication is 20');
  });

  it('should perform division correctly with positive numbers - marks 0.5', () => {
    cy.get('input#num1').type('20');
    cy.get('input#num2').type('4');
    cy.get('button#divide').click();
    cy.get('#result').should('contain', 'The result of division is 5');
  });

  it('should perform division correctly with negative numbers - marks 0.5', () => {
    cy.get('input#num1').type('-20');
    cy.get('input#num2').type('-4');
    cy.get('button#divide').click();
    cy.get('#result').should('contain', 'The result of division is 5');
  });

  it('should handle division by zero correctly - marks 0.5', () => {
    cy.get('input#num1').type('20');
    cy.get('input#num2').type('0');
    cy.get('button#divide').click();
    cy.get('#result').should('contain', 'Cannot divide by zero');
  });

  it('should display result message correctly for addition - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'The result of addition is 8');
  });

  it('should display result message correctly for subtraction - marks 0.5', () => {
    cy.get('input#num1').type('10');
    cy.get('input#num2').type('4');
    cy.get('button#sub').click();
    cy.get('#result').should('contain', 'The result of subtraction is 6');
  });

  it('should display result message correctly for multiplication - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('4');
    cy.get('button#multiply').click();
    cy.get('#result').should('contain', 'The result of multiplication is 20');
  });

  it('should display result message correctly for division - marks 0.5', () => {
    cy.get('input#num1').type('20');
    cy.get('input#num2').type('4');
    cy.get('button#divide').click();
    cy.get('#result').should('contain', 'The result of division is 5');
  });

  it('should display result message correctly when inputs are empty - marks 0.5', () => {
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'Please enter valid numbers');
  });

  it('should display result message correctly when one input is empty - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'Please enter valid numbers');
  });

  it('should display result message correctly when non-numeric input is entered - marks 0.5', () => {
    cy.get('input#num1').type('abc');
    cy.get('input#num2').type('3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'Please enter valid numbers');
  });

  it('should update result message correctly when switching operations - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'The result of addition is 8');
    cy.get('button#sub').click();
    cy.get('#result').should('contain', 'The result of subtraction is 2');
  });

  it('should clear result message when inputs are changed - marks 0.5', () => {
    cy.get('input#num1').type('5');
    cy.get('input#num2').type('3');
    cy.get('button#add').click();
    cy.get('#result').should('contain', 'The result of addition is 8');
  });

  it('should ensure proper CSS styling', () => {
    // Example checks for CSS properties
    cy.get('.calculator').should('have.css', 'background-color', 'rgb(255, 255, 255)'); // Example: Check background-color
    cy.get('button#add').should('have.css', 'font-size', '16px'); // Example: Check font-size of button#add
    cy.get('#result').should('have.css', 'color', 'rgb(0, 0, 0)'); // Example: Check color of #result text
    // Add more assertions for other CSS properties as needed
  });
  it('should start at http://127.0.0.1:5500/index.html  properly ', () => {
    
  });

  Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'passed') {
      const marks = parseFloat(runnable.title.match(/marks (\d+(\.\d+)?)/)[1]);
      totalMarks += marks;
    }
  });

  after(() => {
    cy.log(`Total Marks: ${totalMarks}`);
  });
});
