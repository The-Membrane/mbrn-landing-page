import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '@interchain-ui/react/styles';
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";

function CreateCosmosApp({ Component, pageProps }: AppProps) {

  return (<>{<>    
        <title>Membrane's Gate</title>  
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
  }</>);
}

export default CreateCosmosApp;