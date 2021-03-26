import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import SingleContactCard from '../../src/Components/SingleContactCard'

const contact=
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
    
  describe('<SingleContactCard/>', () => {
    it(' renders the card that shows contact info', () => {
        const { queryByTestId } = render(<SingleContactCard testID={'single-contact-card'}contact={contact}/>);
        expect(queryByTestId('single-contact-card')).toBeTruthy();  
    });

    it(' calls contact card onPress function', () => {

      const onPress=jest.fn()
      const selectContact=jest.fn()
      const { queryByTestId } = render(<SingleContactCard testID={'single-contact-card'} setSelectedContact={selectContact}setListHidden={onPress}contact={contact}/>);

      fireEvent.press(queryByTestId('single-contact-card'));
      expect(onPress).toBeCalledTimes(1); 
      expect(selectContact).toBeCalledTimes(1);  
 
  });
  })