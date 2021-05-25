import React from 'react';

interface SkillProps {
	name: string;
	level: number;
}

export default function Skill({ name, level }: SkillProps) {
	return (
		<div className="skill mx-auto">
			<label
				className="block text-gray-200 text-sm font-bold mb-2"
				htmlFor={`skill__${name}`}
			>
				{name}
			</label>
			<input
				className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white placeholder-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				id={`skill__${name}`}
				placeholder={String(level)}
			/>
		</div>
	);
}
