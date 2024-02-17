import { WindowSize } from "@/Component/WindowSize"; 

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WindowSize>
      <Component {...pageProps} />
    </WindowSize>
  );
}