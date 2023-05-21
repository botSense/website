import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { saveAs } from 'file-saver';

const ImageFetcher = () => {
	const [fileName, setFileName] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const firebaseConfig = {
		apiKey: 'AIzaSyA67w59nuvO_GPJBDgoTqS6mXPuL_Ekkd8',
		authDomain: 'botsense-data.firebaseapp.com',
		projectId: 'botsense-data',
		storageBucket: 'botsense-data.appspot.com',
		messagingSenderId: '894482567628',
		appId: '1:894482567628:web:834f4a49975a3341558d69',
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	const handleFileNameChange = (e) => {
		setFileName(e.target.value.toUpperCase());
	};

	const fetchImage = async () => {
		try {
			const storageRef = firebase.storage().ref();
			const imageRef = storageRef.child(fileName + '.png');
			const url = await imageRef.getDownloadURL();
			setImageUrl(url);
		} catch (error) {
			console.error('Error fetching image:', error);
			setImageUrl('');
		}
	};

	const handleDownload = () => {
		saveAs(imageUrl, fileName);
	};

	return (
		<div
			name='certificates'
			className='bg-black p-8 flex items-center justify-center'
		>
			<div className='p-8  rounded-lg'>
				<input
					type='text'
					value={fileName}
					onChange={handleFileNameChange}
					placeholder='Enter botSenseId'
					className='w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500'
				/>
				<button
					onClick={fetchImage}
					className='mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
				>
					Fetch Certificate
				</button>
				{imageUrl && (
					<div className='mt-4 flex flex-col items-center'>
						<img src={imageUrl} alt='Fetched Image' />

						<a
							href={imageUrl}
							onClick={handleDownload}
							className='mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
						>
							Download Certificate
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageFetcher;
