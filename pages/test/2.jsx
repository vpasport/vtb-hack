import { useRouter } from 'next/router';

const TestPaage = () => {
	const router = useRouter();

	return (
		<>
			<div>
				<button onClick={() => router.push('/test')}>
					TO OTHER PAGE
				</button>
			</div>
		</>
	);
};

export default TestPaage;
