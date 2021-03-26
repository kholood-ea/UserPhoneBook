import React from 'react';
import GetContactsButton from '../../src/Components/GetContactsButton'
import { render, fireEvent } from '@testing-library/react-native';


describe('<GetContactsButton/>', () => {
  it('renders the button that retrieves contacts', () => {
      const {queryByTestId} = render( < GetContactsButton/> );
      expect(queryByTestId('retrieve-contacts-button')).toBeTruthy();

  });

  it(' calls retrieve contacts onPress function', () => {

    const retrieveContacts=jest.fn()
    const { queryByTestId } = render(<GetContactsButton retrieveContacts={retrieveContacts}/>);

    fireEvent.press(queryByTestId('retrieve-contacts-button'));
    expect(retrieveContacts).toBeCalledTimes(1); 

});
});
