import React from 'react';

interface SkillIconProps {
	name: string;
	level: number | undefined;
}

export default function SkillIcon({ name, level }: SkillIconProps) {
	let icon: string = '';
	switch (name) {
		case 'combat':
			icon =
				'https://vignette.wikia.nocookie.net/2007scape/images/9/9d/Multicombat.png/revision/latest?cb=20170810121057';
			break;

		case 'qp':
			icon =
				'https://vignette.wikia.nocookie.net/2007scape/images/d/d0/Quest_start_icon.png/revision/latest?cb=20180806135732';
			break;

		default:
			icon = `http://www.runescape.com/img/rsp777/hiscores/skill_icon_${name}1.gif`;
			break;
	}

	return (
		<div className="inline-flex bg-gray-700 rounded my-1">
			<span className="text-gray-400 text-s pl-2">{level}</span>
			<div className="m-auto">
				<img alt={name} src={icon} />
			</div>
		</div>
	);
}
