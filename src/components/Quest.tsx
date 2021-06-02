import React from 'react';
import SkillIcon from './SkillIcon';
import { v4 as uuidv4 } from 'uuid';
import { IQuest } from '../QuestsData';

interface IQuestProps {
	toggleQuest: (id: string) => void;
	quest: IQuest;
}

export const Quest = React.memo(
	({ toggleQuest, quest }: IQuestProps) => {
		const skillReqs = Object.keys(quest.reqs as Object).map(
			(keyName, i) => (
				<SkillIcon
					key={uuidv4()}
					name={keyName}
					level={quest.reqs[keyName]}
				/>
			)
		);

		const questReqs = quest.prerequisites.map((quest) => (
			<li key={uuidv4()} className="mr-5">
				{quest}
			</li>
		));

		const questClick = () => {
			toggleQuest(quest.id ? quest.id : quest.name);
		};

		return (
			<div className="osrs__quest w-full bg-gray-800 text-white my-5 p-3 rounded">
				<div className="flex flex-col">
					<label className="inline-flex items-center">
						<span className="mr-2 text-xl">{quest.name}</span>
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 text-gray-600"
							checked={quest.status}
							onChange={questClick}
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
	},
	(prevProps, nextProps) => {
		if (prevProps.quest.status === nextProps.quest.status) {
			return false;
		}
		return true;
	}
);
