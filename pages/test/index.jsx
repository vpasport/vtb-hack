import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

import { wrapper } from '@store';
import { selectAuthState, setAuthState } from '@store/slices/userSlice';
import { selectOfferState, getOfferById } from '@store/slices/offersSlice';

import { Button } from '@components';

const TestPaage = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const auth = useSelector(selectAuthState);
	const offer = useSelector(selectOfferState);

	return (
		<>
			<div>
				<span>{JSON.stringify(auth)}</span>
				<Button
					type='default'
					onClick={() => dispatch(setAuthState(!auth))}>
					UPDATE AUTH
				</Button>
			</div>
			<div>
				<span>{JSON.stringify(offer)}</span>
				<Button
					type='custom'
					onClick={() =>
						dispatch(getOfferById(offer ? offer.id + 1 : 1))
					}>
					UPDATE AUTH
				</Button>
			</div>
			<div>
				<Button type='default' onClick={() => router.push('/test/2')}>
					TO OTHER PAGE
				</Button>
			</div>
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store) =>
		async ({ params }) => {
			await store.dispatch(getOfferById(0));

			return {
				props: {},
			};
		}
);

export default TestPaage;
