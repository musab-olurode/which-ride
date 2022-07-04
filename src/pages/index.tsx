import { NextPage } from 'next';
import Features from 'src/components/Features';
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import NavBar from 'src/components/NavBar';
import Process from 'src/components/Process';
import SignUp from 'src/components/SignUp';

const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Process />
			<Features />
			<SignUp />
			<Footer />
		</>
	);
};

export default Home;
