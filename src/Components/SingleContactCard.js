import React from 'react'
import {View,Text,TouchableOpacity,Image,Platform} from 'react-native'

export default ({testID, contact, index, setSelectedContact, setListHidden, listHidden})=>{
   
    return(
        <TouchableOpacity 
        style={{borderBottomWidth:1,borderColor:'grey',
        width:'100%',padding:'2%' ,flexDirection:'row'}}
        testID={testID}

        key={index} 
        
        onPress={()=>{
            setSelectedContact(contact)
            setListHidden(!listHidden)
        }}
        >
       
        <Image
        style={{width: 50,height: 50,marginRight:'2%'}}
        source={{
          uri: contact?.image?.uri,
        }}
      />

      <View>
        <Text style={{marginTop:'1%'}}>
            {contact.firstName} {contact.lastName}
        </Text>
        
        {/* Display first phone number */}
        <Text style={{marginTop:'1%',color:'grey'}}>
        {Platform.OS=='ios'?contact.phoneNumbers[0]?.digits:contact.phoneNumbers[0].number}

            {contact.phoneNumbers[0]?.digits} 
        </Text>

        <Text style={{marginTop:'1%',color:'grey'}}>
            {contact.phoneNumbers[0]?.label} 
        </Text>

      </View>

        </TouchableOpacity>
    )
}