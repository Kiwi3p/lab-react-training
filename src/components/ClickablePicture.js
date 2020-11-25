import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        img: this.props.img
    }

    handleImgClick = () => {
        this.setState({
            img: this.props.imgClicked
        });
    };

    render() {
        return (
            <div>
                <img onClick={this.handleImgClick} src={this.state.img} />
            </div>
        )
    }
}

export default ClickablePicture;