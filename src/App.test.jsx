import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.document().its('contentType').should('eq', 'text/html')
  cy.window().then((win) => {
    console.log(win.location)
  })

});