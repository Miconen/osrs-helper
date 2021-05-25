import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav className="absolute flex text-white w-full">
			<ul className="inline-flex justify-evenly w-1/3 mx-auto p-5">
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/stats">Stats</Link>
				</li>
				<li>
					<Link to="/quests">Quests</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
			</ul>
		</nav>
	);
}
