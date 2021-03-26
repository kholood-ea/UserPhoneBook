import React, { Component,useState } from 'react'
import { ScrollView} from 'react-native'
import SingleContactCard from './SingleContactCard'
export default ({allContacts})=>{

    const [listHidden, setListHidden] = useState(false)
    const [selectedContact, setSelectedContact] = useState()
    
    return(

       !listHidden?(<ScrollView style={{marginTop:'10%'}} testID={'contact-list'}>

            {allContacts.map((contact,index)=>
              <SingleContactCard 
              testID={'single-contact'}
              contact={contact}  
              index ={index} 
               key ={index}
               setSelectedContact={setSelectedContact}
               listHidden={listHidden}
             setListHidden={setListHidden}
               />                  
            )
        }   
         
        </ScrollView>
       ):
        listHidden && selectedContact &&
            <SingleContactCard 
            setSelectedContact={()=>setSelectedContact(null)}
            testID={'selected-contact'}
            contact={selectedContact}  
           setListHidden={setListHidden}
           listHidden={listHidden}
             /> 
        
       
    )
}