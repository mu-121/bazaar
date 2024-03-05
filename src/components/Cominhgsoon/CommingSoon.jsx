import { useState, useEffect } from 'react';
import Mobile from '../../../public/mobile.png';
import { Navbar } from '../Navbar/Navbar';
import Background from './Background.png';

function CommingSoon() {
	const initialUnixTimestamp = 1713524332; // Replace with your desired Unix timestamp for the target date
	const [countdownValues, setCountdownValues] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date(initialUnixTimestamp * 1000); // Convert Unix timestamp to milliseconds
		const now = new Date();
		const difference = targetDate - now;

		const calculateCountdown = () => {
			const now = new Date();
			const difference = targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setCountdownValues({ days, hours, minutes, seconds });
		};

		calculateCountdown(); // Calculate countdown on initial render

		const countdownInterval = setInterval(calculateCountdown, 1000);

		// Clear interval on component unmount
		return () => clearInterval(countdownInterval);
	}, [initialUnixTimestamp]);

	return (
		<>
			<div
				style={{
					backgroundImage: 'url(./Background.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<Navbar />
				<div className='hero min-h-screen '>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='ml-[100px]'>
							<img
								src={Mobile}
								alt=''
							/>
						</div>
						<div className='max-w-lg mr-[100px]'>
							<h1 className='text-5xl font-bold text-[#282828] py-2'>
								We Are Coming Soon!
							</h1>

							<p className='py-6 text-[#282828]'>
								Get ready to revolutionize your shopping journey like never
								before! We're thrilled to announce the upcoming launch of our
								innovative shopping app thatwill redefine how you shop online.
							</p>
							<div className='flex gap-5 text-[#282828]'>
								<div>
									<span className='countdown font-mono text-4xl border border-[#FFD700] border-solid rounded-2xl py-4 px-4'>
										<span style={{ '--value': countdownValues.days }}></span>
									</span>
									days
								</div>
								<div>
									<span className='countdown font-mono text-4xl border border-[#FFD700] border-solid rounded-2xl py-4 px-4'>
										<span style={{ '--value': countdownValues.hours }}></span>
									</span>
									hours
								</div>
								<div>
									<span className='countdown font-mono text-4xl border border-[#FFD700] border-solid rounded-2xl py-4 px-4'>
										<span style={{ '--value': countdownValues.minutes }}></span>
									</span>
									min
								</div>
								<div>
									<span className='countdown font-mono text-4xl border border-[#FFD700] border-solid rounded-2xl py-4 px-4'>
										<span style={{ '--value': countdownValues.seconds }}></span>
									</span>
									sec
								</div>
							</div>
							<div className='join my-5'>
								<input
									className='input input-bordered join-item bg-transparent border border-solid border-black rounded-none'
									placeholder='Enter your Email Address'
									type='email'
								/>
								<button class='bg-gradient-to-r from-[#FFE86A] to-[#FFE86A] text-[#000000] font-bold py-2 px-4 '>
									Your Button
								</button>
							</div>

							<div className='my-4'>
								<button className='bg-transparent text-black'>
									{'Aboutus >'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CommingSoon;
