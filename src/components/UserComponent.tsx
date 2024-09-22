import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserModel } from '../model/UserModel'
import Row from './Row';
import { Textconponent } from './TextComponent';

interface Props {
    user : UserModel;
}

const UserComponent = (Props: Props) => {
    const {user} = Props

    const mykey = 'mykey';

    const handleCreateConversation = () => {
      console.log(user.key);
    }

  return (
    <TouchableOpacity
    onPress={handleCreateConversation}
    style = {[{
        padding:12,
        marginBottom: 6
    }]}>
        <Row >
          <Textconponent text={user.name} flex={1}/>
        </Row>
        <Textconponent text={user.email} color={'e0e0e0'}/>
    </TouchableOpacity>
  )
}

export  {UserComponent}