import Image from 'next/image';
import HeroImg from '../../public/images/hero-image.png';

const Hero = () => {
	return (
		<section className='container mx-auto md:flex mt-5 px-2 md:px-0 md:mt-20'>
			<div className='md:w-1/2 flex items-center justify-end pr-20'>
				<div>
					<span className='text-5xl font-bold'>
						Compare & book <br /> ride-hailing providers{' '}
					</span>
					<p className='mt-7 text-[20px]'>
						Save money and time with WhichRide. <br />
						Think Compare the market but for taxis.
					</p>
				</div>
			</div>
			<div className='md:w-1/2 flex items-end justify-center md:justify-start animate-pulse-once'>
				<Image src={HeroImg} alt='screenshots of mobile app' />
			</div>
		</section>
	);
};

export default Hero;
