import { useState } from 'react';

import { Products } from '@components'

import styles from './style.module.scss';

const ProductsPage = ({ }) =>
{
    const [products] = useState([
		{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},
		{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},
		{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		},{
			tittle:'7 Skills of Highly Effective Programmers',
			imageURL:'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
				description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
				userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
				userName: 'Test test',
				price: 400,
				onUserClick: () => {},
                onReedMore: () => {}
		}
    ])
	return (
		<div className={styles.root}>
            <h2 className={styles.root_headline}>Продукты</h2>
            <Products cards={ products } />
		</div>
	);
};

export default ProductsPage;
