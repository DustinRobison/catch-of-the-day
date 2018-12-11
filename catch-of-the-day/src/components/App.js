import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = (fish) => {
		// 1. Take a copy of the existing state
		const fishes = { ...this.state.fishes };
		// 2. Add our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// 3. Set the new fishes object to state
		this.setState({ fishes });
	};
	addToOrder = (key) => {
		// 1. take a copy of state
		const order = { ...this.state.order };
		// 2. either add to the order, or update the number in order
		order[key] = order[key] + 1 || 1;
		// 3. call setstate to update our state object
		this.setState({ order });
	};
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map((key) => (
							<Fish key={key} details={this.state.fishes[key]} index={key} addToOrder={this.addToOrder} />
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;
