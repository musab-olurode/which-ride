import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preload'
						href='/fonts/cera-pro/Cera-Pro-Medium.otf'
						as='font'
						type='font/otf'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/cera-pro/Cera-Pro-Bold.otf'
						as='font'
						type='font/otf'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
