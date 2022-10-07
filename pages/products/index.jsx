import { useState } from 'react';

import { Products } from '@components'

import styles from './style.module.scss';

const ProductsPage = ({ }) =>
{
    const [[products]] = useState([
        
    ])
	return (
		<div className={styles.root}>
            <h2 className={styles.root_headline}>Задания</h2>
            <Products products={ products } />
		</div>
	);
};

export default ProductsPage;
