import { ContextProvider } from "../contexts/Context";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}
