import React from 'react';

class IdCard extends React.Component {
    state = { 
        lastName: "test",
        firstName: "test",
        gender: 'male',
        height: 178,
        birth: new Date("1992-07-14"),
        picture: "https://randomuser.me/api/portraits/men/44.jpg"
    }

    
    render() {
        return(
            <div>
                <img src={this.props.picture} alt="yes" />
                <p>{this.props.firstName} {this.props.lastName}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.height}, {this.props.birth.toDateString()},</p>
            </div>
        )
    }
}

export default IdCard;
