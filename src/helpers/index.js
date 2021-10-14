import {Alert} from 'react-native';

export const createCustomAlert = (label,message,onContinue,onContinuePress,onCancel,onCancelPress) =>{
    Alert.alert(
     label,
     message,
      [
        {
          text: onCancel,
          onPress: onCancelPress,
          style: "cancel"
        },
        { 
          text: onContinue, 
          onPress: onContinuePress
        }
      ]
    );
  }