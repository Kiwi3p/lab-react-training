import React from 'react';



class BoxColor extends React.Component {
    state = { 
        r: 255,
        g: 255,
        b: 255,
    }

    
    render() {
        return(
            <div style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
                <h1>{this.props.r}, {this.props.g}, {this.props.b})</h1>
            </div>
        )
    }
}

export default BoxColor;
//<strong>Brith:</strong> {birth.toDateString()}