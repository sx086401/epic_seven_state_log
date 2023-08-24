describe('My First Test', () => {
  before(() => {
    cy.intercept(
      { method: 'POST', url: 'http://localhost:8000/api/login' },
      { username: 'e2eTest', message: 'Login successful' }
    ).as('login')

    cy.intercept({ method: 'GET', url: 'http://localhost:8000/api/characters' }, [
      { id: 1, name: '', image_url: '', element: 'dark', star: 5, role: 'ranger' },
    ]).as('getCharacters')

    cy.intercept(
      { method: 'GET', url: 'http://localhost:8000/api/states*' },
      { fixture: 'states.json' }
    ).as('getStates')
  })

  it('Login test', () => {
    cy.visit('/')
    cy.get('input[name=username]').type('e2eTest')
    cy.get('input[name=password]').type('e2eTest')
    cy.get('button').click()
  })
})
