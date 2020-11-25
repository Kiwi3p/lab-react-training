import React from 'react';

function roundNumbers(props){
   props.rating = Math.floor(this.rating);
   
}

function RatingNull(props) {
    return (
        <div className="Rating-display">
        <p>{Math.floor(props.rating === 0 ? '☆☆☆☆☆' : props.rating === 1 ? '★☆☆☆☆' : props.rating === 2 ? '★★☆☆☆' : props.rating === 3 ? '★★★☆☆' : props.rating === 4 ? '★★★★☆' : props.rating === 5 ? '★★★★★' : '') }</p>
        {props.children}
    </div>
    )
}

function Rating(props) {
    let ratingNew = (Math.floor(props.rating));
    return (
        <p>{ratingNew === 0 ? '☆☆☆☆☆' : ratingNew === 1 ? '★☆☆☆☆' : ratingNew === 2 ? '★★☆☆☆' : ratingNew === 3 ? '★★★☆☆' : ratingNew === 4 ? '★★★★☆' : ratingNew === 5 ? '★★★★★' : ''}</p>
    )
}

export default Rating;