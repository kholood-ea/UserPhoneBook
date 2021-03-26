import 'react-native'
import React from 'react';
import App from '../../App'
import { render,cleanup } from '@testing-library/react-native';

beforeEach(cleanup);

describe('<App/>', () => {
  it('renders the application', () => {
      const {queryByTestId} = render( < App/> );
      expect(queryByTestId('application')).toBeTruthy();
  });

});

