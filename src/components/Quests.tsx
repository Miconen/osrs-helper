import React, { useState, useEffect } from 'react';
import { Quest } from './Quest';
import { v4 as uuidv4 } from 'uuid';
import { IQuest, QuestsData } from '../QuestsData';

export default function Quests() {
	const QUEST_KEY = 'osrs.Quests';
	const [questList, setQuest] = useState<IQuest[]>([]);

	const toggleQuest = (id: string) => {
		let newQuests = [...questList];
		let quest = newQuests.find((quest) => quest.id === id);
		if (!quest) return;
		quest.status = !quest.status;
		setQuest(newQuests);
	};

	const appendQuests = () => {
		let quests =
			Array.isArray(questList) && questList.length
				? questList
				: QuestsData;

		for (let quest of quests) {
			setQuest((oldQuests) => {
				return [
					...oldQuests,
					{
						id: uuidv4(),
						status: false,
						name: quest.name,
						prerequisites: quest.prerequisites,
						reqs: quest.reqs,
					},
				];
			});
		}
	};

	function handleClearQuests() {
		const newQuests = QuestsData.filter((quest) => !quest.status);
		setQuest(newQuests);
	}

	useEffect(() => {
		let localQuests = localStorage.getItem(QUEST_KEY);
		if (!localQuests) {
			let storedQuests = JSON.parse(localQuests!);
			setQuest(storedQuests);
			return;
		}
		appendQuests();
		console.log(localStorage.getItem(QUEST_KEY));
	}, []);

	useEffect(() => {
		localStorage.setItem(QUEST_KEY, JSON.stringify(Quests));
		console.log(localStorage.getItem(QUEST_KEY));
	}, [questList]);

	const Quester = questList.map((quest) => {
		return <Quest key={quest.id} toggleQuest={toggleQuest} quest={quest} />;
	});

	return (
		<section className="osrs__main osrs__quests grid grid-cols-2 gap-5">
			{Quester}
		</section>
	);
}
