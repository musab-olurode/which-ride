import { InView } from 'react-intersection-observer';
import clsx from 'clsx';

const SignUp = () => {
	return (
		<section className='bg-[#F2C94C] py-16 px-2 md:px-0'>
			<div className='container mx-auto text-center'>
				<div className='max-w-fit mx-auto overflow-hidden'>
					<p className='text-4xl font-bold'>Sign up to our beta form</p>
					<div className='leading-tight mt-5 text-[20px]'>
						Sign up to our mailing list to find out more information <br /> and
						keep up to date about our activities
					</div>
					<InView triggerOnce>
						{({ inView, ref }) => (
							<div ref={ref} className='flex mt-10'>
								<input
									type='email'
									placeholder='email'
									className={clsx(
										'bg-transparent text-white flex-grow mr-4 border-white border-2 px-6 placeholder:text-white outline-none',
										inView && 'animate-slide-from-left'
									)}
								/>
								<button
									className={clsx(
										'btn bth-ghost rounded-none md:px-10 capitalize',
										inView && 'animate-slide-from-right'
									)}>
									Subscribe
								</button>
							</div>
						)}
					</InView>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
