import React from 'react';
import { ProductCard, Popup } from '@components';

import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Products = ({ cards }) =>
{
    
    return (
        <div className={ styles.products }>
            { !!cards && (
                cards.map((card, index) =>
                    React.createElement(ProductCard, {
                        ...card,
                        className: styles.products_card,
                        key: index
                    }))
            )}  
            
            <Popup
                    type='custom'
                    button='none'
                    isOpenNow={ true }
                    contentLabel="Custom"
                    closePopupNow={ () => setIsOpen(!isOpenNow) }>
            
                    <div className={ styles.products_description }>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore facilis
                            sapiente reprehenderit dolores veniam rem modi
                            repudiandae perferendis enim, quos quis sed optio quisquam accusantium quaerat
                            voluptatum aliquid magni!
                        </p>
                    </div>
			</Popup>
        </div>    
    );
};

Products.propTypes = {
	cards: PropTypes.array
};

export {Products}