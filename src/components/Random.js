import React from 'react';


class Random extends React.Component {
    state = { 
        min: 0,
        max: 0
    }

    
    render() {
        return(
            <div>
                <h1>{this.props.min}, {this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min))} {this.props.max}</h1>
            </div>
        )
    }
}

export default Random;
//<strong>Brith:</strong> {birth.toDateString()}