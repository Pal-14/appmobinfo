import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';




const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return (
      {/* <View style={{padding: 10}}>




    



        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Type here to translate!"
          onChangeText={text => setText(text)}
          defaultValue={text.split('').map((word) => word && '*').join(' ')}
        />
        
      </View> */}
    );
  }
  
  export default PizzaTranslator;