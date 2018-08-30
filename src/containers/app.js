import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesList, directorsList } from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';

class App extends Component {

    componentDidMount(){
        //Dispatching action creators one by one.
        /* this.props.getMovies();
        this.props.getDirectors(); */
        this.props.moviesList();
        this.props.directorsList();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <MoviesList {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.movies
    }
}

//Dispatching action creators one by one.
/* const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => {
            dispatch(moviesList());
        },
        getDirectors: () => {
            dispatch(directorsList());
        }
    }
} */

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            moviesList, 
            directorsList 
        }
        , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);