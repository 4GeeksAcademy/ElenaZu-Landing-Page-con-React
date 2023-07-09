import React from 'react'
import propTypes from 'prop-types';
const Card = (props) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: propTypes.text,
    title: propTypes.text,
    text: propTypes.text
}
export default Card