import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import superagent from 'superagent';

import ky from 'ky';
import { useState, useEffect } from 'react';

function App() {
	const [punkListData, setPunkListData] = useState([]);

	const api = ky.extend({
		hooks: {
			beforeRequest: [
				(request) => {
					request.headers.set('Access-Control-Allow-Origin', 'x');
				}
			]
		}
	});

	const testURL =
		'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB';
	const myInit = {
		method: 'HEAD',
		mode: 'no-cors'
	};

	const myRequest = new Request(testURL, myInit);

	useEffect(() => {
		const getMyNfts = async () => {
			const openSeaData = await axios.get(
				'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB'
			);
			console.log(openSeaData.data.assets);
			setPunkListData(openSeaData.data.assets);

			// const openSeaData = await axios
			// 	.create({
			// 		baseURL: 'https://testnets-api.opensea.io/assets',
			// 		headers: {
			// 			'X-Requested-With': 'XMLHttpRequest'
			// 			// 'Access-Control-Allow-Origin': '*'
			// 			// 'Access-Control-Allow-Headers': '*'
			// 			// 	'Origin, X-Requested-With, Content-Type, Accept',
			// 			// 'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS'
			// 			// 'Referrer-Policy': 'strict-origin-when-cross-origin'
			// 			// 'Content-type': 'application/json; charset=UTF-8'
			// 		}
			// 	})
			// 	.get(
			// 		'?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB'
			// 	);
			// console.log(openSeaData.data.assets);

			// const openSeaData = await axios({
			// 	method: 'get',
			// 	url: `https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB`,
			// 	headers: {
			// 		'X-Requested-With': 'XMLHttpRequest'
			// 	},
			// 	proxy: {
			// 		protocol: 'https',
			// 		host: '127.0.0.1',
			// 		port: 3000
			// 	}
			// });
			// console.log(openSeaData.data.assets);
		};
		getMyNfts();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
