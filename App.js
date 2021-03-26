import React,{useState} from 'react';
import { View, } from 'react-native';
import GetContactsButton from './src/Components/GetContactsButton'
import {requestPermissionsAsync,getContactsAsync} from 'expo-contacts'
import ContactsList from './src/Components/ContactsList'


export default function App() {

  //store contacts to pass it to list
  const [allContacts, setAllContacts] = useState([])

//Asking for permission to access address Book
//Gets all contact from book 
  const retrieveContacts=async()=>{
    const { status } = await requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await getContactsAsync();
      
      if (data.length > 0) {
        const contact = data;
        setAllContacts(contact)
      }
    }
  }

  return (
    <>
      <View testID={"application"} style={{height:'15%',width:'100%',backgroundColor:'black'}}>
    </View>
      <ContactsList allContacts={allContacts}/>
      <GetContactsButton retrieveContacts={retrieveContacts}/>
</>
  );
}

