import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './Helpers.js';

class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{ side: 'yencoin', img: 'yencoin.png' },
			{ side: 'bitcoin', img: 'bitcoin.png' },
		],
	};
	constructor(props) {
		super(props);
		this.state = {
			currentCoin: null,
			numFlips: 0,
			numBitcoin: 0,
			numYencoin: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	FlipCoin() {
		const newCoin = choice(this.props.coins);
		console.log(newCoin);
		this.setState((parameter) => {
			return {
				currentCoin: newCoin,
				numFlips: parameter.numFlips + 1,
				numBitcoin: parameter.numBitcoin + (newCoin.side === 'bitcoin' ? 1 : 0),
				numYencoin: parameter.numYencoin + (newCoin.side === 'yencoin' ? 1 : 0),
			};
		});
	}

	handleClick(e) {
		this.FlipCoin();
	}

	render() {
		return (
			<div className='CoinContainer'>
				<h2>Let's Flip a Coin!</h2>
				{this.state.currentCoin && <Coin info={this.state.currentCoin} />}
				<p>
					From {this.state.numFlips} flips, we have {this.state.numBitcoin} bitcoin and{' '}
					{this.state.numYencoin} yencoin.
				</p>
				<button onClick={this.handleClick}>Flip Me!</button>
			</div>
		);
	}
}

export default CoinContainer;
