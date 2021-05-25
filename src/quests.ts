export const quests = [
	{
		name: "Black Knights' Fortress",
		prerequisites: [],
		reqs: {
			mining: 10,
		},
	},
	{
		name: 'Cooks Assistant',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'The Corsair Curse',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Demon Slayer',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Doric's Quest",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Dragon Slayer',
		prerequisites: [],
		reqs: {
			qp: 32,
		},
	},
	{
		name: 'Ernest the Chicken',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Goblin Diplomacy',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Imp Catcher',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "The Knight's Sword",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Misthalin Mystery',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Pirate's Treasure",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Prince Ali Rescue',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'The Restless Ghost',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Romeo and Juliet',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Rune Mysteries',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Sheep Shearer',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Shield of Arrav',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Vampire Slayer',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Witch's Potion",
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Soul's Bane",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Animal Magnetism',
		prerequisites: ['Fight Arena', 'Holy Grail'],
		reqs: {
			ranged: 30,
			woodcutting: 35,
			crafting: 19,
			slayer: 18,
		},
	},
	{
		name: 'Another Slice of HAM',
		prerequisites: ['Death to the Dorgeshuun', 'Giant Dwarf', 'Dig Site'],
		reqs: {
			attack: 15,
			prayer: 25,
		},
	},
	{
		name: 'The Ascent of Arceuus',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Between a Rock',
		prerequisites: ['Dwarf Cannon', 'Fishing Contest'],
		reqs: {
			defence: 30,
			smithing: 50,
			mining: 40,
		},
	},
	{
		name: 'Big Chompy Bird Hunting',
		prerequisites: [],
		reqs: {
			ranged: 30,
			cooking: 30,
			fletching: 5,
		},
	},
	{
		name: 'Biohazard',
		prerequisites: ['Plague City'],
		reqs: {},
	},
	{
		name: 'Bone Voyage',
		prerequisites: ['Dig Site'],
		reqs: {},
	},
	{
		name: 'Cabin Fever',
		prerequisites: ["Pirate's Treasure", 'Rum Deal'],
		reqs: {
			prayer: 40,
			crafting: 45,
			smithing: 50,
			agility: 42,
		},
	},
	{
		name: 'Client Of Kourend',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Clock Tower',
		prerequisites: ["Gertrude's Cat", 'Nature Spirit'],
		reqs: {},
	},
	{
		name: 'Cold War',
		prerequisites: [],
		reqs: {
			woodcutting: 50,
			crafting: 30,
			agility: 30,
			thieving: 15,
			hunter: 10,
			construction: 34,
		},
	},
	{
		name: 'Contact',
		prerequisites: [
			'Prince Ali Rescue',
			"Icthlarin's Little Helper",
			"Gertrude's Cat",
		],
		reqs: {},
	},
	{
		name: 'Creature of Fenkenstrain',
		prerequisites: ["Priest in Peril', 'Restless Ghost"],
		reqs: {
			crafting: 20,
			thieving: 25,
		},
	},
	{
		name: 'Darkness of Hallowvale',
		prerequisites: ['In Aid of the Myreque'],
		reqs: {},
	},
	{
		name: 'Death Plateau',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Death To The Dorgeshuun',
		prerequisites: ['Lost Tribe'],
		reqs: {
			agility: 23,
			thieving: 23,
		},
	},
	{
		name: 'Desert Treasure',
		prerequisites: [
			'The Dig Site',
			'Temple of Ikov',
			'The Tourist Trap',
			'Troll Stronghold',
			'Priest in Peril',
			'Waterfall Quest',
		],
		reqs: {
			magic: 50,
			firemaking: 50,
			thieving: 53,
			slayer: 10,
		},
	},
	{
		name: 'Devious Minds',
		prerequisites: [
			'Wanted!',
			'Troll Stronghold',
			"Doric's Quest",
			'Enter the Abyss',
		],
		reqs: {
			fletching: 50,
			smithing: 65,
			runecraft: 50,
		},
	},
	{
		name: 'Dig Site',
		prerequisites: [],
		reqs: {
			herblore: 10,
			agility: 10,
			thieving: 25,
		},
	},
	{
		name: 'Dragon Slayer II',
		prerequisites: ["Legend's Quest", 'Dream Mentor'],
		reqs: {
			magic: 75,
			crafting: 62,
			smithing: 70,
			mining: 68,
			agility: 60,
			thieving: 60,
			construction: 50,
		},
	},
	{
		name: 'Dream Mentor',
		prerequisites: ['Lunar Diplomacy', "Eadgar's Ruse"],
		reqs: {
			combat: 85,
		},
	},
	{
		name: 'Druidic Ritual',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Dwarf Cannon',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Eadgar's Ruse",
		prerequisites: ['Druidic Ritual', 'Troll Stronghold'],
		reqs: {
			herblore: 31,
			agility: 47,
		},
	},
	{
		name: 'Eagles Peak',
		prerequisites: ['Big Chompy Bird Hunting'],
		reqs: {
			hunter: 27,
		},
	},
	{
		name: 'Elemental Workshop I',
		prerequisites: [],
		reqs: {
			crafting: 20,
			smithing: 20,
			mining: 20,
		},
	},
	{
		name: 'Elemental Workshop II',
		prerequisites: ['Elemental Workshop I'],
		reqs: {
			magic: 20,
			smithing: 30,
		},
	},
	{
		name: "Enakhra's Lament",
		prerequisites: [],
		reqs: {
			prayer: 43,
			magic: 39,
			firemaking: 45,
			crafting: 50,
		},
	},
	{
		name: 'Enlightened Journey',
		prerequisites: [],
		reqs: {
			firemaking: 20,
			crafting: 36,
			farming: 30,
		},
	},
	{
		name: 'Fairy Tale II - Cure a Queen',
		prerequisites: ['Fairy Tale I - Growing Pains'],
		reqs: {
			herblore: 57,
			thieving: 40,
			farming: 49,
		},
	},
	{
		name: 'Family Crest',
		prerequisites: [],
		reqs: {
			magic: 59,
			crafting: 40,
			smithing: 40,
			mining: 40,
		},
	},
	{
		name: 'Fairy Tale I - Growing Pains',
		prerequisites: ['Lost City'],
		reqs: {},
	},
	{
		name: 'Fight Arena',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Fishing Contest',
		prerequisites: [],
		reqs: {
			fishing: 10,
		},
	},
	{
		name: 'Forgettable Tale...',
		prerequisites: ['Fishing Contest', 'Giant Dwarf'],
		reqs: {
			cooking: 22,
			farming: 17,
		},
	},
	{
		name: 'The Forsaken Tower',
		prerequisites: [],
		reqs: {
			hunter: 12,
		},
	},
	{
		name: 'The Fremennik Trials',
		prerequisites: [],
		reqs: {
			woodcutting: 40,
			fletching: 25,
			crafting: 40,
		},
	},
	{
		name: 'The Fremennik Isles',
		prerequisites: ['The Fremennik Trials'],
		reqs: {
			woodcutting: 56,
			crafting: 46,
			agility: 40,
			construction: 20,
		},
	},
	{
		name: 'Garden of Tranquillity',
		prerequisites: ['Creature of Fenkenstrain'],
		reqs: {
			farming: 25,
		},
	},
	{
		name: "Gertrude's Cat",
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Ghost's Ahoy",
		prerequisites: ['Priest in Peril'],
		reqs: {
			cooking: 20,
			agility: 25,
		},
	},
	{
		name: 'Giant Dwarf',
		prerequisites: [],
		reqs: {
			magic: 33,
			firemaking: 16,
			crafting: 12,
			thieving: 14,
		},
	},
	{
		name: 'The Golem',
		prerequisites: [],
		reqs: {
			crafting: 20,
			thieving: 25,
		},
	},
	{
		name: 'The Grand Tree',
		prerequisites: [],
		reqs: {
			agility: 25,
		},
	},
	{
		name: 'The Great Brain Robbery',
		prerequisites: [
			'Creature of Fenkenstrain',
			'Cabin Fever',
			'RFD - Pirate Pete',
		],
		reqs: {
			prayer: 50,
			crafting: 16,
			construction: 30,
		},
	},
	{
		name: 'Grim Tales',
		prerequisites: ["Witch's House"],
		reqs: {
			woodcutting: 71,
			herblore: 52,
			agility: 59,
			thieving: 58,
			farming: 45,
		},
	},
	{
		name: 'The Hand in the Sand',
		prerequisites: [],
		reqs: {
			crafting: 49,
			thieving: 17,
		},
	},
	{
		name: 'Haunted Mine',
		prerequisites: ['Priest in Peril'],
		reqs: {
			prayer: 40,
			crafting: 35,
			agility: 15,
		},
	},
	{
		name: 'Hazeel Cult',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Heroes' Quest",
		prerequisites: [
			'Shield of Arrav',
			"Merlin's Crystal",
			'Dragon Slayer',
			'Lost City',
		],
		reqs: {
			cooking: 53,
			fishing: 53,
			mining: 50,
			herblore: 25,
			qp: 55,
		},
	},
	{
		name: 'Holy Grail',
		prerequisites: ["Merlin's Crystal"],
		reqs: {
			attack: 30,
		},
	},
	{
		name: 'Horror from the Deep',
		prerequisites: [],
		reqs: {
			agility: 35,
		},
	},
	{
		name: 'In Aid of the Myreque',
		prerequisites: ['In Search of the Myreque'],
		reqs: {
			magic: 7,
			crafting: 25,
			mining: 15,
		},
	},
	{
		name: 'In Search of the Myreque',
		prerequisites: ['Nature Spirit'],
		reqs: {
			agility: 25,
		},
	},
	{
		name: "Icthlarin's Little Helper",
		prerequisites: ['Druidic Ritual'],
		reqs: {},
	},
	{
		name: 'Jungle Potion',
		prerequisites: [],
		reqs: {
			herblore: 3,
		},
	},
	{
		name: "King's Ransom",
		prerequisites: [
			"Black Knight's Fortress",
			'Holy Grail',
			"Merlin's Crystal",
			'Murder Mystery',
			'One Small Favour',
		],
		reqs: {
			defence: 65,
			magic: 45,
		},
	},
	{
		name: "Legends' Quest",
		prerequisites: [
			'Family Crest',
			"Heroes' Quest",
			'Shilo Village',
			'Underground Pass',
			'Waterfall Quest',
		],
		reqs: {
			strength: 50,
			prayer: 42,
			magic: 56,
			woodcutting: 50,
			crafting: 50,
			smithing: 50,
			mining: 52,
			herblore: 45,
			agility: 50,
			thieving: 50,
		},
	},
	{
		name: 'Lost City',
		prerequisites: [],
		reqs: {
			woodcutting: 36,
			crafting: 31,
		},
	},
	{
		name: 'The Lost Tribe',
		prerequisites: ["Goblin Diplomacy', 'Rune Mysteries"],
		reqs: {
			mining: 17,
			agility: 13,
			thieving: 13,
		},
	},
	{
		name: 'Lunar Diplomacy',
		prerequisites: [
			'The Fremennik Trials',
			'Lost City',
			'Rune Mysteries',
			'Shilo Village',
		],
		reqs: {
			defence: 40,
			magic: 65,
			woodcutting: 55,
			firemaking: 49,
			crafting: 61,
			mining: 60,
			herblore: 5,
		},
	},
	{
		name: 'Making Friends With My Arm',
		prerequisites: [
			'The Fremennik Trials',
			'Lost City',
			'Rune Mysteries',
			'Shilo Village',
		],
		reqs: {
			firemaking: 66,
			mining: 72,
			agility: 68,
			construction: 35,
		},
	},
	{
		name: 'Making History',
		prerequisites: ["Priest in Peril', 'The Restless Ghost"],
		reqs: {},
	},
	{
		name: "Merlin's Crystal",
		prerequisites: [],
		reqs: {
			attack: 20,
		},
	},
	{
		name: 'Mogre Miniquest',
		prerequisites: [],
		reqs: {
			cooking: 20,
		},
	},
	{
		name: 'Monkey Madness I',
		prerequisites: ["The Grand Tree', 'Tree Gnome Village"],
		reqs: {},
	},
	{
		name: 'Monkey Madness II',
		prerequisites: [
			'Enlightened Journey',
			'The Eyes of Glouphrie',
			'RFD - King Awowogei',
			'Troll Stronghold',
			'Watchtower',
			'Monkey Madness I',
		],
		reqs: {
			firemaking: 60,
			crafting: 70,
			thieving: 55,
			slayer: 69,
			hunter: 60,
		},
	},
	{
		name: "Monk's Friend",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Mountain Daughter',
		prerequisites: [],
		reqs: {
			agility: 20,
		},
	},
	{
		name: "Mourning's End Part I",
		prerequisites: ['Sheep Herder', 'Big Chompy Bird Hunting', 'Regicide'],
		reqs: {
			ranged: 60,
			thieving: 50,
		},
	},
	{
		name: "Mourning's End Part II",
		prerequisites: ["Mourning's End Part I"],
		reqs: {},
	},
	{
		name: 'Murder Mystery',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "My Arm's Big Adventure",
		prerequisites: ['Jungle Potion', "Eadgar's Ruse", 'The Feud'],
		reqs: {
			woodcutting: 10,
			farming: 29,
		},
	},
	{
		name: 'Nature Spirit',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Observatory Quest',
		prerequisites: [],
		reqs: {},
	},
	{
		name: "Olaf's Quest",
		prerequisites: ['The Fremennik Trials'],
		reqs: {
			woodcutting: 50,
			firemaking: 40,
		},
	},
	{
		name: 'One Small Favour',
		prerequisites: ['Druidic Ritual', 'Rune Mysteries', 'Shilo Village'],
		reqs: {
			crafting: 25,
			smithing: 30,
			herblore: 18,
			agility: 36,
		},
	},
	{
		name: 'Plague City',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Priest in Peril',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Rag and Bone Man',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Rag and Bone Man II',
		prerequisites: [
			'Mogre Miniquest',
			'Horror from the Deep',
			'Zogre Flesh Eaters',
		],
		reqs: {
			slayer: 40,
		},
	},
	{
		name: 'Ratcatchers',
		prerequisites: ["Icthlarin's Little Helper"],
		reqs: {},
	},
	{
		name: 'Recipe for Disaster',
		prerequisites: [
			"Cook's Assistant",
			'Fishing Contest',
			'Goblin Diplomacy',
			'Big Chompy Bird Hunting',
			'Murder Mystery',
			'Nature Spirit',
			"Witch's House",
			"Gertrude's Cat",
			'Shadow of the Storm',
			'Family Crest',
			"Heroes' Quest",
			'Shilo Village',
			'Underground Pass',
			'Waterfall Quest',
			'Monkey Madness I',
			'Desert Treasure',
			'Horror from the Deep',
		],
		reqs: {
			qp: 175,
			cooking: 70,
			agility: 48,
			mining: 50,
			fishing: 53,
			thieving: 53,
			herblore: 25,
			magic: 59,
			smithing: 40,
			firemaking: 50,
			ranged: 40,
			crafting: 40,
			fletching: 10,
			slayer: 10,
			woodcutting: 36,
		},
	},
	{
		name: 'RFD - Mountain Dwarf',
		prerequisites: ['Fishing Contest'],
		reqs: {},
	},
	{
		name: 'RFD - Goblin Generals',
		prerequisites: ['Goblin Diplomacy'],
		reqs: {},
	},
	{
		name: 'RFD - Pirate Pete',
		prerequisites: [],
		reqs: {
			cooking: 31,
		},
	},
	{
		name: 'RFD - Lumbridge Guide',
		prerequisites: [
			'Big Chompy Bird Hunting',
			'Biohazard',
			'Demon Slayer',
			'Murder Mystery',
			'Nature Spirit',
			"Witch's House",
		],
		reqs: {
			cooking: 40,
		},
	},
	{
		name: 'RFD - Evil Dave',
		prerequisites: ["Gertrude's Cat", 'Shadow of the Storm'],
		reqs: {
			cooking: 25,
		},
	},
	{
		name: 'RFD - King Awowogei',
		prerequisites: ['Monkey Madness I'],
		reqs: {
			cooking: 70,
			agility: 48,
		},
	},
	{
		name: 'RFD - Sir Amik Varze',
		prerequisites: [
			'Family Crest',
			"Heroes' Quest",
			'Shilo Village',
			'Underground Pass',
			'Waterfall Quest',
		],
		reqs: {
			qp: 107,
		},
	},
	{
		name: 'RFD - Skrach Uglogwee',
		prerequisites: [],
		reqs: {
			cooking: 41,
			firemaking: 20,
		},
	},
	{
		name: 'Recruitment Drive',
		prerequisites: ["Black Knight's Fortress", 'Druidic Ritual'],
		reqs: {},
	},
	{
		name: 'Regicide',
		prerequisites: ['Underground Pass'],
		reqs: {
			crafting: 10,
			agility: 56,
		},
	},
	{
		name: 'Roving Elves',
		prerequisites: ["Vampire Slayer', 'Regicide"],
		reqs: {},
	},
	{
		name: 'Royal Trouble',
		prerequisites: ['Throne of Miscellania'],
		reqs: {
			agility: 40,
			slayer: 40,
		},
	},
	{
		name: 'Rum Deal',
		prerequisites: ['Zogre Flesh Eaters'],
		reqs: {
			prayer: 47,
			fishing: 50,
			crafting: 42,
			slayer: 42,
			farming: 40,
		},
	},
	{
		name: 'Scorpion Catcher',
		prerequisites: [],
		reqs: {
			prayer: 31,
		},
	},
	{
		name: 'Sea Slug',
		prerequisites: [],
		reqs: {
			firemaking: 30,
		},
	},
	{
		name: "Shades of Mort'ton",
		prerequisites: ["Priest in Peril', 'Nature Spirit"],
		reqs: {
			crafting: 20,
			herblore: 15,
		},
	},
	{
		name: 'Shadow of the Storm',
		prerequisites: ["Demon Slayer', 'The Golem"],
		reqs: {
			crafting: 30,
		},
	},
	{
		name: 'Sheep Herder',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Shilo Village',
		prerequisites: ['Jungle Potion'],
		reqs: {
			crafting: 20,
			agility: 32,
		},
	},
	{
		name: 'Song of the Elves',
		prerequisites: ["Mourning's End Part II", 'Making History'],
		reqs: {
			agility: 70,
			construction: 70,
			farming: 70,
			herblore: 70,
			hunter: 70,
			mining: 70,
			smithing: 70,
			woodcutting: 70,
		},
	},
	{
		name: 'Spirit of the Elid',
		prerequisites: [],
		reqs: {
			ranged: 37,
			magic: 33,
			mining: 37,
			thieving: 37,
		},
	},
	{
		name: 'Swan Song',
		prerequisites: ["One Small Favour', 'Garden of Tranquillity"],
		reqs: {
			magic: 66,
			cooking: 62,
			fishing: 62,
			firemaking: 42,
			crafting: 40,
			smithing: 45,
		},
	},
	{
		name: 'Tai Bwo Wannai Trio',
		prerequisites: ['Jungle Potion'],
		reqs: {
			cooking: 30,
			fishing: 5,
			agility: 15,
		},
	},
	{
		name: 'Tears of Guthix',
		prerequisites: [],
		reqs: {
			firemaking: 49,
			crafting: 20,
			mining: 20,
		},
	},
	{
		name: 'Temple of Ikov',
		prerequisites: [],
		reqs: {
			ranged: 40,
			thieving: 42,
		},
	},
	{
		name: 'The Depths Of Despair',
		prerequisites: ['Client of Kourend'],
		reqs: {
			agility: 18,
		},
	},
	{
		name: 'The Eyes of Glouphrie',
		prerequisites: ['The Grand Tree'],
		reqs: {
			magic: 46,
			construction: 5,
		},
	},
	{
		name: 'The Feud',
		prerequisites: [],
		reqs: {
			thieving: 30,
		},
	},
	{
		name: 'The Queen Of Thieves',
		prerequisites: ['Client of Kourend'],
		reqs: {
			thieving: 20,
		},
	},
	{
		name: 'The Slug Menace',
		prerequisites: ["Wanted!', 'Sea Slug"],
		reqs: {
			crafting: 30,
			thieving: 30,
			slayer: 30,
			runecraft: 30,
		},
	},
	{
		name: 'Tail of Two Cats',
		prerequisites: ["Icthlarin's Little Helper"],
		reqs: {},
	},
	{
		name: 'Tale of the Righteous',
		prerequisites: ['Client of Kourend'],
		reqs: {
			strength: 16,
			mining: 10,
		},
	},
	{
		name: 'A Taste of Hope',
		prerequisites: ['Darkness of Hallowvale'],
		reqs: {
			attack: 40,
			crafting: 48,
			herblore: 40,
			agility: 45,
			slayer: 38,
		},
	},
	{
		name: 'Throne of Miscellania',
		prerequisites: ['The Fremennik Trials', "Heroes' Quest"],
		reqs: {
			herblore: 35,
		},
	},
	{
		name: 'The Tourist Trap',
		prerequisites: [],
		reqs: {
			fletching: 10,
			smithing: 20,
		},
	},
	{
		name: 'Tower of Life',
		prerequisites: [],
		reqs: {
			construction: 10,
		},
	},
	{
		name: 'Tree Gnome Village',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Tribal Totem',
		prerequisites: [],
		reqs: {
			thieving: 21,
		},
	},
	{
		name: 'Troll Romance',
		prerequisites: ['Troll Stronghold'],
		reqs: {
			agility: 28,
		},
	},
	{
		name: 'Troll Stronghold',
		prerequisites: ['Death Plateau'],
		reqs: {
			agility: 15,
		},
	},
	{
		name: 'Underground Pass',
		prerequisites: ['Biohazard'],
		reqs: {
			ranged: 25,
		},
	},
	{
		name: 'Wanted!',
		prerequisites: [
			'Recruitment Drive',
			'Rune Mysteries',
			'Priest in Peril',
			'Lost Tribe',
		],
		reqs: {
			qp: 32,
		},
	},
	{
		name: 'Watchtower',
		prerequisites: [],
		reqs: {
			magic: 14,
			mining: 40,
			herblore: 14,
			agility: 25,
			thieving: 15,
		},
	},
	{
		name: 'Waterfall Quest',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'What Lies Below',
		prerequisites: ['Rune Mysteries'],
		reqs: {
			runecraft: 35,
		},
	},
	{
		name: "Witch's House",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Zogre Flesh Eaters',
		prerequisites: ['Big Chompy Bird Hunting'],
		reqs: {
			ranged: 30,
			fletching: 30,
			smithing: 4,
			herblore: 8,
		},
	},
	{
		name: "Alfred Grimhand's Barcrawl (m)",
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Architectural Alliance (m)',
		prerequisites: [],
		reqs: {
			fishing: 15,
			crafting: 30,
			smithing: 45,
			mining: 42,
			hunter: 15,
		},
	},
	{
		name: 'Bear Your Soul (m)',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Curse of the Empty Lord (m)',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Enchanted Key (m)',
		prerequisites: ['Making History'],
		reqs: {},
	},
	{
		name: 'Enter the Abyss (m)',
		prerequisites: ['Rune Mysteries'],
		reqs: {},
	},
	{
		name: 'Family Pest (m)',
		prerequisites: ['Family Crest'],
		reqs: {},
	},
	{
		name: "The General's Shadow (m)",
		prerequisites: [
			'Fight Arena',
			'The Cure of the Empty Lord (m)',
			'Desert Treasure',
		],
		reqs: {},
	},
	{
		name: 'Lair of Tarn Razorlor (m)',
		prerequisites: ['Haunted Mine'],
		reqs: {
			slayer: 40,
		},
	},
	{
		name: 'The Mage Arena (m)',
		prerequisites: [],
		reqs: {
			magic: 60,
		},
	},
	{
		name: 'The Mage Arena II (m)',
		prerequisites: ['The Mage Arena (m)'],
		reqs: {
			magic: 75,
		},
	},
	{
		name: 'Skippy and the Mogres (m)',
		prerequisites: [],
		reqs: {},
	},
	{
		name: 'Barbarian Training (u)',
		prerequisites: [],
		reqs: {
			strength: 15,
			fishing: 55,
			firemaking: 35,
			construction: 11,
			smithing: 5,
			herblore: 4,
			agility: 15,
		},
	},
	{
		name: "Champions' Challenge (u)",
		prerequisites: [],
		reqs: {
			qp: 32,
		},
	},
	{
		name: 'Natural History Quiz (u)',
		prerequisites: ['Dig Site'],
		reqs: {},
	},
	{
		name: 'Chompy Bird Hunting (u)',
		prerequisites: ['Big Chompy Bird Hunting'],
		reqs: {},
	},
];
