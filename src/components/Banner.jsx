import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Banner() {
	const [showBanner, setShowBanner] = useState(true);

	const handleBannerClose = () => {
		setShowBanner(false);
	};

	if (!showBanner) {
		return null; // If showBanner is false, don't render the banner
	}

	return (
		<div className='bg-gray-900 py-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col sm:flex-row items-center justify-between'>
					<div className='w-full sm:w-auto flex-1 flex items-center mb-4 sm:mb-0'>
						<p className='text-white font-medium text-center sm:text-left'>
							Attention students! Your internship certificates are now
							available!
						</p>
					</div>
					<div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
						<Link to='certificates' smooth={true} duration={500} offset={-300}>
							<button
								type='button'
								className='bg-gray-800 border border-transparent rounded-md py-2 px-4 inline-flex items-center text-sm leading-5 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								onClick={handleBannerClose}
							>
								Download Now
							</button>
						</Link>
					</div>
					<div className='order-3 mt-2 flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
						<p className='text-sm leading-5 text-gray-300'>
							Certificate ID:{' '}
							<span className='text-white font-medium'>BOTS-CHR</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
