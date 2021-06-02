import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Quests from './components/Quests';
import Stats from './components/Stats';

function App() {
	return (
		<Router>
			<main className="App osrs flex h-screen w-screen">
				<Navigation />
				<Switch>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/stats">
						<Stats />
					</Route>
					<Route exact path="/Quests">
						<Quests />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
