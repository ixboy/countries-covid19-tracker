import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ListCountries from '../components/__mocks__/ListCountries';
import store from '../redux/configureStore';

describe('Group of tests for countries page', () => {
  it('renders countires list correctly', () => {
    const list = renderer
      .create(<Provider store={store}><ListCountries /></Provider>)
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  test('List is created', () => {
    const { container } = render(<Provider store={store}><ListCountries /></Provider>);
    const list = container.querySelector('.container');
    expect(list).toBeInTheDocument();
    expect(container).toHaveTextContent('Afghanistan');
    expect(container).toHaveTextContent('Recovered');
  });

  test('The countries Card should have the words Total, Covid, cases, etc...', () => {
    const { container } = render(<Provider store={store}><ListCountries /></Provider>);
    expect(container).toHaveTextContent('Total');
    expect(container).toHaveTextContent('Covid');
  });
});
