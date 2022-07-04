const Footer = () => {
	return (
		<footer className='bg-[#DEB63D] py-6'>
			<div className='container mx-auto text-white flex flex-col md:flex-row text-[11px]'>
				<div className='flex-grow flex justify-center md:block'>
					© {new Date().getFullYear()} Whichride - All rights reserved.
				</div>
				<div className='mt-2 md:mt-0 flex justify-center md:block'>
					<a href='' className='mr-4'>
						Privacy Policy
					</a>
					<a href=''>Terms and Conditions</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
