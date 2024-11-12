import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    mainContent: {
        padding: 20,
        backgroundColor: '#bde1ff', // Light blue background to resemble water
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        color: '#2c3e50',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    boatContainer: {
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: '#6f869e',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    boatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        color: '#2c3e50',
        justifyContent: 'space-between',
    },
    boatIcon: {
        marginRight: 10,
    },
    boatName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    boatDescription: {
        fontSize: 16,
        color: '#d7ffff',
        marginBottom: 15,
        lineHeight: 22,
        textAlign: 'center',
    },
    boatImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});

const Boat = ({name, description, icon_name, picture})=> {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.boatHeader}>
                <Icon name={icon_name} size={30} color="#B23B23" style={styles.boatIcon} />
                <Text style={styles.boatName}>
                    {name}
                </Text>
                <Icon name={icon_name} size={30} color="#B23B23" style={styles.boatIcon} />
            </View>
            <Text style={[styles.boatDescription, {fontSize:18}]}>
                {description}
            </Text>
            <View style={{marginBottom: 20}}>
                <Image source={picture} style={styles.boatImage} />
            </View>
        </View>
    );
};

const AllBoats =() => {
    return (
        <ScrollView style={styles.mainContent}>
            <Text style={styles.title}>GetABoat - For Sale</Text>
            <Boat name='Sea Ray 500 Sundancer' description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.' icon_name="sailboat" picture={require('../img/sea_ray.jpg')}/>
            <Boat name='Four Winns Horizon 180' description='A sporty look and refined details truly set the Horizon 180 above all others.' icon_name="sailboat" picture={require('../img/four_winns.jpg')}/>
            <Boat name='Flipper 640 ST' description='A modern take on the classic, traditional hardtop and perfect for a family picnic.' icon_name="sailboat" picture={require('../img/flipper.jpg')}/>
            <Boat name='Princess V48' description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.' icon_name="sailboat" picture={require('../img/princess.jpg')}/>
            <Boat name='Bayliner 175 Bowrider' description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.' icon_name="sailboat" picture={require('../img/bayliner.jpg')}/>
            <Boat name='Fairline Targa 47' description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.' icon_name="sailboat" picture={require('../img/fairline.jpg')}/>
        </ScrollView>
    )
}

export default AllBoats;
