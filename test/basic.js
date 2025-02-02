const test = require('ava')
const { findCypressSpecs } = require('..')

test('string ignore pattern v9', (t) => {
  t.plan(1)
  const specs = findCypressSpecs({
    integrationFolder: 'cypress/e2e',
    testFiles2: '**/*.js',
    ignoreTestFiles: 'utils.js',
    version: '9.7.0',
  })
  t.deepEqual(specs, [
    'cypress/e2e/spec.cy.js',
    'cypress/e2e/featureA/user.cy.ts',
  ])
})

test('array string ignore pattern v10', (t) => {
  t.plan(1)
  const specs = findCypressSpecs({
    version: '10.0.0',
    e2e: {
      specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
      excludeSpecPattern: ['utils.js'],
    },
  })
  t.deepEqual(specs, [
    'cypress/e2e/spec.cy.js',
    'cypress/e2e/featureA/user.cy.ts',
  ])
})

test('string ignore pattern v10', (t) => {
  t.plan(1)
  const specs = findCypressSpecs({
    version: '10.0.0',
    e2e: {
      specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
      excludeSpecPattern: 'utils.js',
    },
  })
  t.deepEqual(specs, [
    'cypress/e2e/spec.cy.js',
    'cypress/e2e/featureA/user.cy.ts',
  ])
})

test('specific files', (t) => {
  t.plan(1)
  const specs = findCypressSpecs({
    version: '10.0.0',
    e2e: {
      specPattern: 'cypress/e2e/featureA/user.cy*.ts',
      excludeSpecPattern: ['utils.js'],
    },
  })
  t.deepEqual(specs, ['cypress/e2e/featureA/user.cy.ts'])
})
