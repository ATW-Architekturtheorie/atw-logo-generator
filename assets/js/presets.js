/* list of definition instances */
const presets = [];

/* default definition */
const _defaultDefinition = {
	title: false,
	id: false,
	width: 16,
	height: 8,
	padding: 1,
	stroke: 10,
	text: 'atw',
	size: 2,
};

/* definition class */
class Definition {
	constructor( options = {} ){
		for (let key in _defaultDefinition) {
			if( options.hasOwnProperty(key) ){
				this[key] = options[key];
			} else {
				this[key] = _defaultDefinition[key];
			}
		}
		for (let key in options) {
			if( !this.hasOwnProperty(key) ){
				this[key] = options[key];
			}
		}
	}
	get specs(){
		return {
			width:   this.width,
			height:  this.height,
			padding: this.padding,
			stroke:  this.stroke,
			text:    this.text,
			size:    this.size,
		};
	}
}

/* list of presets to create */
const _createPresets = [
	{
		id: 'original',
		title: 'Original',
	},
	{
		id: 'din1p',
		title: 'A1 hoch',
		width: 594,
		height: 840,
		padding: 30,
	},
	{
		id: 'din2p',
		title: 'A2 hoch',
		width: 420,
		height: 594,
		padding: 20,
	},
	{
		id: 'din3p',
		title: 'A3 hoch',
		width: 297,
		height: 420,
		padding: 15,
	},
	{
		id: 'din4p',
		title: 'A4 hoch',
		width: 210,
		height: 297,
		padding: 10,
	},
	{
		id: 'din4l',
		title: 'A4 quer',
		width: 297,
		height: 210,
		padding: 10,
	},
	{
		id: 'din5p',
		title: 'A5 hoch',
		width: 148,
		height: 210,
		padding: 10
	},
	{
		id: 'din5l',
		title: 'A5 quer',
		width: 210,
		height: 148,
		padding: 10,
	},
	{
		id: 'screen',
		title: 'Screen',
		width: 16,
		height: 9,
		padding: 1
	},
	{
		id: 'vk',
		title: 'Visitenkarte',
		width: 85,
		height: 55,
		padding: 5,
	},
	{
		id: 'square',
		title: 'Quadrat',
		width: 4,
		height: 4,
		padding: 0
	}
];

for(let cp of _createPresets){
	presets.push( new Definition(cp) );
}
