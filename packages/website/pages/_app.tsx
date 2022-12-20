import { AppProps } from 'next/app';
import { DashProvider } from '@dash-ui-lib/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <DashProvider>
      <Component {...pageProps} />
    </DashProvider>
  );
}

export default CustomApp;
