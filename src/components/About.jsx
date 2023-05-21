import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen flex flex-col sm:justify-center items-center text-center p-5 gap-8 text-gray-300'
		>
			<Zoom>
				<h1 className='text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600'>
					About
				</h1>
			</Zoom>
			<Fade>
				<p>
					botSense is team of IoT engineers addressing common people needs by
					bringing tech and innovation to life. we help in reducing human effort
					for many activities, and provides tons of information. When people
					have data, they feel more in control of every aspect that surrounds
					them.
				</p>
			</Fade>
			<br />
			<Zoom>
				<h1 className='text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600'>
					Mission
				</h1>
			</Zoom>
			<Fade>
				<p>
					To be an innovative technology integrator. Building on our
					technologies, competencies and customer interests, and creating value
					for our stakeholders and customers. We’ll achieve this by focusing on
					the intersection of our client’s emerging needs and the acceleration
					of business and technological change.
				</p>
			</Fade>
		</div>
	);
};

export default About;
