import React from 'react';

const MoviesList = (props) => {

    const renderTitles = (titles) => {
        return (
            titles ?
            titles.map((item, i) => {
                return (
                    <div key={i}>{item.name}</div>
                )
            })
            :
            null
        );
    };

    const renderDirectors = (titles) => {
        return (
            titles ?
            titles.map((item, i) => {
                return (
                    <div key={i}>{item.name}</div>
                )
            })
            :
            null
        );
    };

    return (
        <div>
            <div>
                {renderTitles(props.data.titles)}
            </div>
            <br/>
            <div>
                {renderDirectors(props.data.directors)}
            </div>
        </div>
    );
};

export default MoviesList;