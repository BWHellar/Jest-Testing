import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({adapter: new EnzymeAdapter() });

// Factory function to create a ShallowWrapper for the App component
// @function setup
// @param {object} props - Component props specific to this setup.
// @param {any} state - Initial state for the setup
// @returns {ShallowWrapper}
const setup = (props={}, stat=null) => {
  return shallow(<App {...props} />)
}

// Return ShallowWrapper containing node witht he given data-test value.
// @param{ShallowWrapper} wrapper- Enzyme shallow wrapper to search within.
// @param {string} cal - Value of the data-test attribute for the search.
// @retruns {ShallowWrapper}
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders incrememnt button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('clicking button increments counter', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

