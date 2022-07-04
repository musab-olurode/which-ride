import Image from 'next/image';
import CarIcon from '../../public/icons/car-icon.svg';
import SettingsIcon from '../../public/icons/settings-icon.svg';
import TimeIcon from '../../public/icons/time-icon.svg';
import ShieldIcon from '../../public/icons/shield-icon.svg';
import { InView } from 'react-intersection-observer';
import clsx from 'clsx';

const Features = () => {
	return (
		<section className='relative pb-48'>
			<div className='h-full w-1/2 bg-[#A792FE] bg-opacity-[0.07] absolute -z-10'></div>
			<div className='container mx-auto pt-28 overflow-hidden'>
				<p className='text-center text-4xl font-bold'>Why Whichride</p>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-16 text-center lg:text-left'>
							<div
								className={clsx(
									'block lg:flex lg:justify-end',
									inView && 'animate-slide-from-left-2'
								)}>
								<div className='lg:w-1/2'>
									<Image src={CarIcon} alt='' />
									<p className='font-bold my-3'>More choices</p>
									<div>
										WhichRide lets you compare pricing <br />
										across the major rideshares so you can <br />
										save money on every ride.
									</div>
								</div>
							</div>
							<div
								className={clsx(
									'lg:ml-24',
									inView && 'animate-slide-from-right'
								)}>
								<div>
									<div className=''>
										<Image src={SettingsIcon} alt='' />
										<p className='font-bold my-3'>More choices</p>
										<div>
											WhichRide lets you compare pricing <br />
											across the major rideshares so you can <br />
											save money on every ride.
										</div>
									</div>
								</div>
							</div>
							<div
								className={clsx(
									'block lg:flex lg:justify-end',
									inView && 'animate-slide-from-left'
								)}>
								<div className='lg:w-1/2'>
									<Image src={TimeIcon} alt='' />
									<p className='font-bold my-3'>More choices</p>
									<div>
										WhichRide lets you compare pricing <br />
										across the major rideshares so you can <br />
										save money on every ride.
									</div>
								</div>
							</div>
							<div
								className={clsx(
									'lg:ml-24',
									inView && 'animate-slide-from-right-2'
								)}>
								<div>
									<div className=''>
										<Image src={ShieldIcon} alt='' />
										<p className='font-bold my-3'>More choices</p>
										<div>
											WhichRide lets you compare pricing <br />
											across the major rideshares so you can <br />
											save money on every ride.
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</InView>
			</div>
		</section>
	);
};

export default Features;
