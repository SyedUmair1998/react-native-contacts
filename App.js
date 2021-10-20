import React, {useState} from 'react';
import {View,StyleSheet,Text,PermissionsAndroid, Button } from 'react-native';
import  Contacts  from 'react-native-contacts';


const App =  () => {
  const handleClick = async () =>
  {
  let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
  if (status === 'denied' || status === 'never_ask_again') {
    throw Error('Permissions not granted to access Contacts')
  }
    // Contacts.getAll()
    // .then((contacts) => {
    //   console.log(Object.keys(contacts[1]));
    //   console.log( contacts[contacts.length-1]);
    //   // work with contacts
    // })
    // .catch((e) => {
    //   console.log(e); //handle error })
    // })

    // Contacts.getCount()
    // .then(data=>console.log(data))
    // .catch(error=>console.log(error))


// Contacts.getContactsMatchingString('dummy')
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// Contacts.getContactsByPhoneNumber('0334')
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// Contacts.getContactsByEmailAddress('abc@example.com')
// .then(data=>console.log(data))
// .catch(error=>console.log(error))


// Adding a contacts in contact list
// var newPerson = {
//   emailAddresses: [{
//     label: "work",
//     email: "umair@example.com",
//   }],
//   displayName: "Umair2",
//   familyName: "Umair2",
//   givenName: "Friedrich2"
// }

// Contacts.addContact(newPerson)
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// Contacts.openContactForm(newPerson).then(contact => {
//   console.log(contact);
// })

// Contacts.getAll().then(contacts => {
//   let someRecord = contacts[0]
//   someRecord.givenName = "Syed Ammar";
//   Contacts.updateContact(someRecord)
//     .then((data) => {
//       console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// })


Contacts.deleteContact({recordID:"395"}).then(recordId => {
  console.log(recordId);
}).catch((err)=>{
  console.log('error');
})
        
}
    
      
    
    
  
return(
<View style={styles.main}>
  <Button title="get contacts" onPress = {handleClick} />

</View>


)}
const styles = StyleSheet.create({
  main : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
  })



  export default App;