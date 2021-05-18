module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/node",
		"plugin:evelyn/source",
	],

	"ignorePatterns": [
		"lib",
		"coverage",
	],

	"overrides": [
		{
			"files": [
				"**/*.tsx",
			],
			"extends": [
				"plugin:evelyn/typescript",
			],
		},
		{
			"files": [
				"./*.js",
			],
			"rules": {
				"unicorn/prefer-module": "off",
			},
		},
	],
};
