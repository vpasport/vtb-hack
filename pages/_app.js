import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import { wrapper } from '@store';
import { NotificationContextProvider } from '@contexts';
import { Menu } from '@components';

import '@styles/globals.css';
import '@styles/globals.scss';

function MyApp({ Component, ...rest }) {
  const { pathname } = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <NotificationContextProvider>
        <NextNProgress />
        <div className='root' data-test='test'>
          {pathname !== '/404' && <Menu />}
          <div className='content'>
            <Component {...props.pageProps} />
          </div>
        </div>
      </NotificationContextProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
