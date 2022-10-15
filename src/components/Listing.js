import React from "react";
import PropTypes from 'prop-types';

export default function Listing(props) {
    const { obj } = props;    
    const class1 = obj.quantity>20?"level-high":obj.quantity<10?"level-low":"level-medium";
    const classname = "item-quantity" + ' ' + class1;

    return (      
            <div className="item">
                <div className="item-image">
                    <a href={obj.url}>
                        <img src={obj.MainImage.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{obj.title}</p>
                    <p className="item-price">{obj.price}</p>                    
                    <p className={classname}>{obj.quantity}</p>
                </div>
            </div>       
    )
} 

Listing.defaultProps = {
    items: [],
}

Listing.propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
}