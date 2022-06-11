import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';

function DisplayComponent(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{uri: item.restaurant_thumb}}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    tinyLogo: {
        width: 80,
        height: 80,
      }
  });

export default DisplayComponent;