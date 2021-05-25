import React, { useState, useEffect } from 'react';
import Quest from './Quest';
import { v4 as uuidv4 } from 'uuid';
import { quests } from '../quests';

const QuestLog = quests.map((quest) => (
	<Quest
		key={uuidv4()}
		className="mr-5"
		name={quest.name}
		prerequisites={[...quest.prerequisites]}
		reqs={quest.reqs}
	/>
));

const QUEST_KEY = 'osrs.quests';

interface QuestInterface {
	id: string;
	name: string;
	status: boolean;
}

export default function Quests() {
	const [questList, setQuest] = useState([]);
	useEffect(() => {
		localStorage.setItem(QUEST_KEY, JSON.stringify(quests));
	}, [questList]);

	useEffect(() => {
		if (!localStorage.getItem(QUEST_KEY)) return;
		const storedQuests = JSON.parse(localStorage.getItem(QUEST_KEY)!);
		setQuest(storedQuests);
	}, []);
	for (let quest of quests) {
		let oldQuests: QuestInterface[] = [...questList];
		oldQuests.push({ id: uuidv4(), name: quest.name, status: false });
		setQuest(oldQuests);
	}

	return (
		<main className="osrs__main osrs__quests grid grid-cols-2 gap-5">
			{/* {QuestLog} */}
		</main>
	);
}
