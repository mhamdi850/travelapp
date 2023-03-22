import React from 'react'
import { SafeAreaView, Text,View } from 'react-native'
import styles from './style'

const Title = (props) => {
    return(
        <Text style={styles.title}>{props.text}</Text>
      
    )
}

Title.defaultProps={
    text:'Default Text'
}

export default Title