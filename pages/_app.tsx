import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '@interchain-ui/react/styles';
import React from 'react';

function CreateCosmosApp({ Component, pageProps }: AppProps) {

  return (<>{<>    
        <title>Membrane's Gate</title>  
        <Component {...pageProps} />
      </>
  }</>);
}

export default CreateCosmosApp;