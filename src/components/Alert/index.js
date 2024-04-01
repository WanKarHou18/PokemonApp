import React, { useEffect } from 'react';
import { Alert } from 'react-native';

//third party
import PropTypes from 'prop-types';

const CustomErrorAlert = ({
     message, 
     visible, 
     onDismiss,
     setError,
}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onDismiss();
        setError(null);
      }, 3000);
    }
  }, [visible]);

  return (
    <>
      {visible && (
        Alert.alert(
          '',
          message,
          [
            { text: 'OK', onPress: onDismiss }
          ],
          { cancelable: false }
        )
      )}
    </>
  );
};


CustomErrorAlert.propTypes = {
  message: PropTypes.string.isRequired, 
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired, 
  setError: PropTypes.func.isRequired,
};

export default CustomErrorAlert;