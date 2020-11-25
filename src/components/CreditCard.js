import React from 'react';

function CreditCard(props) {
    return (
        <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="type">
                <img src={`/img/${props.type}`} />
            </div>
            <div className="number">
                    •••• •••• •••• {props.number.slice(-4)}
            </div>
            <div className="expires-bank">
                <span>Expires 03/21 </span>
            <span className="bank">BNP</span></div>
            <div className="owner">Maxence Bouret</div>
        </div>
    )
}

export default CreditCard;