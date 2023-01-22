module.exports = {
	baseURL: {
		url: 'images/',
		tags: ['img', 'source'],
	},
	build: {
		templates: {
			destination: {
				path: 'build_production',
			},
		},
	},
	inlineCSS: true,
	shorthandCSS: true,
	removeUnusedCSS: true,
	prettify: true,
};
