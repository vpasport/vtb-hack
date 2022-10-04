import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import { wrapper } from '@store';
import { NotificationContextProvider } from '@contexts';

import '@styles/globals.scss';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <NotificationContextProvider>
        <NextNProgress />
        <Component {...props.pageProps} />
      </NotificationContextProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
