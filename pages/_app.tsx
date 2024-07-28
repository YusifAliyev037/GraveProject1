import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// import {AppRouterCacheProvider} from '@mui/material-nextjs/'


const cache = createCache({ key: "css", prepend: true });


export default function App({ Component, pageProps }: AppProps) {
  return (

    <CacheProvider value={cache}>
    {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </CacheProvider>
)


}
