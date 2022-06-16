var SETDEX_SS = {
	"Liliyang": {
		"Default Set": {
			"level": 50,
			"evs": {
				"hp": 252,
				"at": 252,
				"df": 0,
				"sa": 0,
				"sd": 4,
				"sp": 0,
			},
			"nature": "Adamant",
			"ability": "Pixilate",
			"item": "Choice Band",
			"moves": [
				"Extreme Speed",
				"Head Charge",
				"Wild Charge"
			]
		}
	},
};

var components = [
    SETDEX_TT2020,
    SETDEX_TT2018,
    SETDEX_CUSTOM,
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SS[p] = $.extend(SETDEX_SS[p], sourceDex[p])
            }
        }
    }
}

var reloadXYScript = function()
{
  console.log(SETDEX_CUSTOM);
    components = [
    SETDEX_TT2020,
    SETDEX_CUSTOM,
];

for (var i=0; i<components.length; i++) {
    sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SS[p] = $.extend(SETDEX_SS[p], sourceDex[p])
            }
        }
    }
}
}
