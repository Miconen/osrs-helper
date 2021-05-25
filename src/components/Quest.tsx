import React from 'react';
import { QuestProps } from './QuestInterface';
import SkillIcon from './SkillIcon';
import { v4 as uuidv4 } from 'uuid';

export default function Quest({ name, prerequisites, reqs }: QuestProps) {
	const skillReqs = Object.keys(reqs as Object).map((keyName, i) => (
		<SkillIcon key={uuidv4()} name={keyName} level={reqs[keyName]} />
	));

	const questReqs = prerequisites.map((quest) => (
		<li key={uuidv4()} className="mr-5">
			{quest}
		</li>
	));

	return (
		<div className="osrs__quest w-full bg-gray-800 text-white my-5 p-3 rounded">
			<div className="flex flex-col">
				<label className="inline-flex items-center">
					<span className="mr-2 text-xl">{name}</span>
					<input
						type="checkbox"
						className="form-checkbox h-5 w-5 text-gray-600"
						// checked={todo.state}
					/>
				</label>
			</div>
			<div className="w-full grid grid-flow-row grid-cols-8 gap-2">
				{skillReqs}
			</div>
			<ul className="text-xs text-gray-400 grid grid-flow-row grid-cols-2">
				{questReqs}
			</ul>
		</div>
	);
}
