import { getProductById } from '@api/products';

const EditProduct = ({ productInfo = {} }) => {
	return (
		<div>
			<></>
		</div>
	);
};

export const getServerSideProps = async ({ params: { id }, res }) => {
	let result = await getProductById(id);

	if (false) {
		res.writeHead(301, { Location: '/404' });
		res.end();

		return true;
	}

	return {
		props: {
			productInfo: result.data,
		},
	};
};

export default EditProduct;
