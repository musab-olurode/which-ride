import Image from 'next/image';
import ProcessImg from '../../public/images/process-image.png';
import { InView } from 'react-intersection-observer';
import clsx from 'clsx';

const Process = () => {
	return (
		<section className='bg-primary px-2 md:px-0'>
			<div className='container mx-auto text-white pt-32'>
				<p className='text-center text-4xl'>
					Whichride brings together multiple <br />
					ride hailing providers and local taxi <br />
					firms in one app
				</p>

				<p className='text-center text-[20px] mt-10 leading-tight'>
					Allowing riders to select the provider that offers the <br />
					best price, service or travel time, then seamlessly <br />
					book within the app
				</p>

				<div className='flex flex-col lg:flex-row mt-3'>
					<div className='lg:w-1/2'>
						<div className='flex items-center justify-center lg:justify-end mt-4'>
							<Image
								src={ProcessImg}
								alt='screenshot of the process in the mobile app'
							/>
						</div>
					</div>
					<div className='lg:w-1/2 flex items-center mb-20 lg:mb-0 overflow-hidden'>
						<InView triggerOnce>
							{({ inView, ref }) => (
								<div ref={ref} className='flex flex-col gap-y-11 lg:w-3/5'>
									<div
										className={clsx(
											'group flex flex-col lg:flex-row items-center text-center lg:text-left',
											inView && 'animate-slide-from-right'
										)}>
										<span className='rounded-full whitespace-nowrap bg-white group-hover:bg-yellow-500 text-text flex place-content-center px-2 py-[1.1rem] lg:mr-10'>
											Step 1
										</span>
										<div>
											<p className='text-2xl mb-4 font-bold'>Enter location</p>
											<span>
												Enter your destination to see a list of taxi providers
												near you.
											</span>
										</div>
									</div>
									<div
										className={clsx(
											'group flex flex-col lg:flex-row items-center text-center lg:text-left',
											inView && 'animate-slide-from-right-2'
										)}>
										<span className='rounded-full whitespace-nowrap bg-white group-hover:bg-yellow-500 text-text flex place-content-center px-2 py-[1.1rem] lg:mr-10'>
											Step 2
										</span>
										<div>
											<p className='text-2xl mb-4 font-bold'>
												Find the perfect ride
											</p>
											<span>
												Filter results by driver rating, driver sex, waiting
												times, price or speed. Reduce carbon footprint by only
												showing hybrid or electric cars.
											</span>
										</div>
									</div>
									<div
										className={clsx(
											'group flex flex-col lg:flex-row items-center text-center lg:text-left',
											inView && 'animate-slide-from-right-3'
										)}>
										<span className='rounded-full whitespace-nowrap bg-white group-hover:bg-yellow-500 text-text flex place-content-center px-2 py-[1.1rem] lg:mr-10'>
											Step 3
										</span>
										<div>
											<p className='text-2xl mb-4 font-bold'>Pay and Save</p>
											<span>
												Once you select a ride, we search the web for coupons to
												get you an even better deal, then book seamlessly within
												our app and earn points while you ride.
											</span>
										</div>
									</div>
								</div>
							)}
						</InView>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
