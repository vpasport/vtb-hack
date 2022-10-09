import { useRouter } from 'next/router';
import React from 'react';
import { ProductCard, Popup, Loader } from '@components';

import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Products = ({ cards = [], loading = false }) => {
	const router = useRouter();

	return (
		<div className={styles.products}>
			{loading ? (
				<div className={styles.products_loader}>
					<Loader />
				</div>
			) : (
				!!cards &&
				cards.map(({ id, ...card }) => (
					<ProductCard
						key={id}
						className={styles.products_card}
						imageURL={card.imageURL}
						tittle={card.title}
						description={card.description}
						userAvatar={
							card.user?.userAvatar ||
							'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album'
						}
						userName={card.user?.userName || 'Тест тест'}
						price={card.price}
						onReedMore={() => router.push(`/products/view/${id}`)}
						onUserClick={() =>
							router.push(`/users/${card.user.id}`)
						}
					/>
				))
			)}
			{/* <Popup
        }
				type='custom'
				button='none'
				isOpenNow={true}
				contentLabel='Custom'
				closePopupNow={() => setIsOpen(!isOpenNow)}>
				<div className={styles.products_description}>
					<h3>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.{' '}
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus dolore facilis sapiente reprehenderit dolores
						veniam rem modi repudiandae perferendis enim, quos quis
						sed optio quisquam accusantium quaerat voluptatum
						aliquid magni!
					</p>
				</div>
			</Popup> */}
		</div>
	);
};

Products.propTypes = {
	cards: PropTypes.array,
};

export { Products };
