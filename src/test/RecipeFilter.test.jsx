import React from 'react';
import Router from '../App';
import { mount } from '@cypress/react';
import RecipeFilter from '../components/RecipeCreator/RecipeFilter';

it('renders learn react link', () => {
  mount(
  <Router>
    <RecipeFilter />
  </Router>);
  cy.document().its('contentType').should('eq', 'text/html')

});