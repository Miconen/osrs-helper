export interface Requirements {
	[key: string]: number | undefined;
	combat?: number;
	qp?: number;
	attack?: number;
	hitpoints?: number;
	mining?: number;
	strength?: number;
	agility?: number;
	smithing?: number;
	defence?: number;
	herblore?: number;
	fishing?: number;
	ranged?: number;
	thieving?: number;
	cooking?: number;
	prayer?: number;
	crafting?: number;
	firemaking?: number;
	magic?: number;
	fletching?: number;
	woodcutting?: number;
	runecraft?: number;
	slayer?: number;
	farming?: number;
	construction?: number;
	hunter?: number;
}

export interface QuestProps {
	[key: string]: string | string[] | Requirements;
	name: string;
	prerequisites: string[];
	reqs: Requirements;
}
