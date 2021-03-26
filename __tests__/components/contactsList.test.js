import React from 'react';
import ContactsList from '../../src/Components/ContactsList'
import { render, fireEvent } from '@testing-library/react-native';


const contacts=[
  {
    firstName:"kholood",
    lastName:"Eassa",
    image:{
      uri:"www.google.com"
    },
    phoneNumbers:[
      {
        digits:"+201157000520"
      }
    ]
  }
]

contact={
  firstName:"kholood",
    lastName:"Eassa",
    image:{
      uri:"www.google.com"
    },
    phoneNumbers:[
      {
        digits:"+201157000520"
      }
    ]
}

describe('Contact list is not rendered', () => {
  it('renders the <ContactsList />', () => {
      const { debug,queryByTestId } = render(<ContactsList allContacts={contacts} />);
        expect(queryByTestId('contact-list')).toBeTruthy();
        
      expect(queryByTestId('single-contact')).toBeTruthy();  
      expect(queryByTestId('selected-contact')).toBeFalsy();  

  });


  it(' hides the contacts list when a single contact is pressed ', () => {
    const { debug,queryByTestId } = render(<ContactsList allContacts={contacts} />);
    fireEvent.press(queryByTestId('single-contact'));
    expect(queryByTestId('selected-contact')).toBeTruthy();  
    expect(queryByTestId('contact-list')).toBeFalsy();  

})
})