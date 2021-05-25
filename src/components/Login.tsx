import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<form className="rounded m-auto">
			<div className="mb-4">
				<label
					className="block text-gray-200 text-sm font-bold mb-2"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white placeholder-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Username"
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-200 text-sm font-bold mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white placeholder-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
			</div>
			<div className="flex items-center justify-between">
				<Link
					to="/"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Sign In
				</Link>
			</div>
		</form>
	);
}
