import React, { Component } from 'react'
import {Button, View} from 'react-native'

export default ({retrieveContacts})=>{
    return(
        <View style={{marginBottom:'50%'}}>

            <Button 
            title={"Retrieve My Contacts"}
            onPress={retrieveContacts}
            />
                    </View>


    )
}