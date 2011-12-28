{
	// Graphic resources.
	addImage:[
		["sprites","resources/cels.png"],
		["bg","resources/bg1.png"],
		["font","resources/font.png"],
		["fontbig","resources/fontbig.png"],
		["intro1","resources/intro1.png"],
		["intro2","resources/intro2.png"],
		["intro3","resources/intro3.png"],
		["ending1","resources/ending1.png"],
		["logo","resources/logo.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:40,tilew:20,tilerow:9,gapx:0,gapy:0},
		{id:"tiles",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:40},
		{id:"enemy-goo",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:60},
		{id:"enemy-sad",image:"sprites",tileh:40,tilew:20,tilerow:9,gapx:0,gapy:80},
		{id:"tiledfont",image:"font",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
	],

	// Audio resources
	addAudio:[
		["default-music",[audioserver+"intro.mp3",audioserver+"intro.ogg"],{channel:"bgmusic",loop:true}],
		["ingame",[audioserver+"ingame.mp3",audioserver+"ingame.ogg"],{channel:"bgmusic",loop:true}],
		["ending",[audioserver+"ending.mp3",audioserver+"ending.ogg"],{channel:"bgmusic",loop:true}],
		["default-menu-option",[audioserver+"select.mp3",audioserver+"select.ogg"],{channel:"sfx"}],
		["default-menu-confirm",[audioserver+"start.mp3",audioserver+"start.ogg"],{channel:"sfx"}],
		["beep",[audioserver+"voice_narrator.mp3",audioserver+"voice_narrator.ogg"],{channel:"sfx"}],
		["die",[audioserver+"die.mp3",audioserver+"die.ogg"],{channel:"sfx"}],
		["hit",[audioserver+"hit.mp3",audioserver+"hit.ogg"],{channel:"sfx"}],
		["jump",[audioserver+"jump.mp3",audioserver+"jump.ogg"],{channel:"sfx"}]
	],

	// Sub-resource files.
	addBundle:[
		{file:"resources/bundle-dialogues.js"},
		{file:"resources/bundle-stage1.js"},
		{file:"resources/bundle-stage2.js"},
		{file:"resources/bundle-stage3.js"},
		{file:"resources/bundle-stage4.js"}
	]
}
