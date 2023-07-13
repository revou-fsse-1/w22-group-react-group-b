import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import "@/styles/ext.css";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
