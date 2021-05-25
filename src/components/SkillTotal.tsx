import React from 'react';

export default function SkillTotal() {
	return (
		<div className="skill mx-auto">
			<label
				className="block text-gray-200 text-sm font-bold mb-2"
				htmlFor="skill__total"
			>
				Total
			</label>
			<input
				className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white placeholder-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				id="skill__total"
				placeholder={'2277'}
			/>
		</div>
	);
}
