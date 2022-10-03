import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import { wrapper } from '../store';

import '../styles/globals.css';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <NextNProgress />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
