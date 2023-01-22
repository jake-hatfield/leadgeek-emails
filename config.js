const fm = require('front-matter');

module.exports = {
	baseURL: {
		url: '/images/',
		tags: ['img', 'source'],
	},
	build: {
		templates: {
			source: 'src/content',
			filetypes: ['md'],
			destination: {
				path: 'build_local',
			},
			assets: {
				source: 'src/images',
				destination: 'images',
			},
		},
	},
	markdown: {
		plugins: [
			{
				plugin: require('markdown-it-attrs'),
			},
		],
	},
	events: {
		beforeRender(html) {
			const { attributes, body } = fm(html);
			const layout = attributes.layout || 'main';

			return `
        <x-${layout}>
          <fill:template>
            <md>${body}</md>
          </fill:template>
        </x-${layout}>`;
		},
	},
};
