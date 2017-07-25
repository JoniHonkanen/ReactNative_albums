import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

class AlbumDetail extends Component {

    constructor(props) {

        console.log('PROPSI ', props);
        super(props);
    }
    // CARD komponentit props.children mahdollistaa alemman
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            source={{ uri: this.props.album.thumbnail_image }}
                            style={styles.thumbnailStyle}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerContentStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.props.album.image }}
                    />
                </CardSection>
                <CardSection>
                    <Button onPressButton={() => Linking.openURL(this.props.album.url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
