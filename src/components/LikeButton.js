import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0
    }

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleIncrementClick}>the 🧛‍♂️ is: {this.state.count}</button>
            </div>
        )
    }
}

export default LikeButton;