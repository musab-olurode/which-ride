import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { HamburgerIcon } from './icons/hamburger';

const NavBar = () => {
	return (
		<div className='container mx-auto'>
			<div className='navbar bg-base-100'>
				<div className='flex-1'>
					<a className='hover:cursor-pointer'>
						<Image src={Logo} width={168} height={40} alt='logo' />
					</a>
				</div>
				<div className='flex-none'>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-square btn-ghost lg:hidden'>
							<HamburgerIcon />
						</label>
						<ul
							tabIndex={0}
							className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<a>The App</a>
							</li>
							<li>
								<a>About Us</a>
							</li>
							<li>
								<a>Get in Touch</a>
							</li>
						</ul>
					</div>

					<ul className='menu menu-horizontal p-0 font-bold hidden lg:flex'>
						<li>
							<a>The App</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
						<li>
							<a>Get in Touch</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
