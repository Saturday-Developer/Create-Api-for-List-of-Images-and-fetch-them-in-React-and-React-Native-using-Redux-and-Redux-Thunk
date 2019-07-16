import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movies } from '../actions/fetchMoviesList';

class MoviesList extends Component {


    componentWillMount() {
        this.props.movies();
    }
    render() {
        const postItem = this.props.posts.map(movie => (
            <div key={movie.ID}>
                <img
                    src={movie.Image}
                    alt="Popular Movie"
                />

                <h3>{movie.Name}</h3>
            </div>
        ));
        return (
            <div>
                <h1>Popular Movies</h1>
                {postItem}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.moviesList.items
});
export default connect(mapStateToProps, { movies })(MoviesList);