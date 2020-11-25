import React from 'react';


class Greetings extends React.Component {
    state = { 
        lang: "de",
        children: "Testing"
    }

    
    render() {
        return(
            <div>
                <h1>{this.props.lang}</h1>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

export default Greetings;
//<strong>Brith:</strong> {birth.toDateString()}