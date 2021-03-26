import React from 'react'
import {Button, View} from 'react-native'

export default ({retrieveContacts})=>{

    return(
        <View style={{marginBottom:'50%'}}>

            <Button 
            disabled={false}
            testID={"retrieve-contacts-button"}
            title={"Retrieve My Contacts"}
             onPress={retrieveContacts}
            />
                    </View>


    )
}