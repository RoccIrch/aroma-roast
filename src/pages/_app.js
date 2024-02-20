import { Analytics } from '@vercel/analytics/react';

import "@/styles/globals.css";

const App = ({ Component, pageProps }) => (
    <>
        <Component {...pageProps} />
        <Analytics />
    </>
)

export default App;