import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movies } from '../actions/fetchMoviesList';
import {View,Text,Image,ScrollView} from 'react-native';

class MoviesList extends Component {


    componentWillMount() {
        this.props.movies();
    }
    render() {
        const postItem = this.props.posts.map(movie => (
            <View key={movie.ID}  style={{alignItems:"center"}}>
                <Image  source={{uri:movie.Image}} style={{height:100,width:100}} />

                <Text>{movie.Name}</Text>
            </View>
        ));
        return (
            <ScrollView>
                <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",bottom:5}}>Popular Movies</Text>
                {postItem}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.moviesList.items
});
export default connect(mapStateToProps, { movies })(MoviesList);