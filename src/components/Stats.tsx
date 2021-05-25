import React from 'react';
import Skill from './Skill';
import SkillTotal from './SkillTotal';

export default function Stats() {
	return (
		<main className="osrs__main osrs__stats grid grid-flow-row grid-cols-3">
			<Skill name="Attack" level={99}></Skill>
			<Skill name="Hitpoints" level={99}></Skill>
			<Skill name="Mining" level={99}></Skill>
			<Skill name="Strength" level={99}></Skill>
			<Skill name="Agility" level={99}></Skill>
			<Skill name="Smithing" level={99}></Skill>
			<Skill name="Defence" level={99}></Skill>
			<Skill name="Herblore" level={99}></Skill>
			<Skill name="Fishing" level={99}></Skill>
			<Skill name="Ranged" level={99}></Skill>
			<Skill name="Thieving" level={99}></Skill>
			<Skill name="Cooking" level={99}></Skill>
			<Skill name="Prayer" level={99}></Skill>
			<Skill name="Crafting" level={99}></Skill>
			<Skill name="Firemaking" level={99}></Skill>
			<Skill name="Magic" level={99}></Skill>
			<Skill name="Fletching" level={99}></Skill>
			<Skill name="Woodcutting" level={99}></Skill>
			<Skill name="runecraft" level={99}></Skill>
			<Skill name="Slayer" level={99}></Skill>
			<Skill name="Farming" level={99}></Skill>
			<Skill name="Construction" level={99}></Skill>
			<Skill name="Hunter" level={99}></Skill>
			<SkillTotal />
		</main>
	);
}
