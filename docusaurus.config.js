// const remarkImages = require('remark-images');
// const rehypeTruncate = require('rehype-truncate');

module.exports = {
    title: 'vacantthinker',
    tagline: '',
    // favicon: 'img/logo.png',
    favicon: '',

    organizationName: 'vacantthinker', // Usually your GitHub org/user name.
    url: 'https://vacantthinker.github.io',
    baseUrl: '/vacantthinker.blog.docusaurus2/',
    projectName: 'vacantthinker.blog.docusaurus2', // Usually your repo name.

    themeConfig: {
        // algolia: {
        //     apiKey: 'api-key',
        //     indexName: 'index-name',
        //     appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
        //     algoliaOptions: {}, // Optional, if provided by Algolia
        // },
        navbar: {
            style: 'dark',
            title: 'vacantthinker',
            // logo: {
            //     alt: 'logo',
            //     src: 'img/logo.png',
            // },
            links: [
                // {
                //     to: 'hello/',
                //     activeBasePath: 'hello',
                //     label: 'hello',
                //     position: 'left',
                // },
                {
                    to: 'tags/',
                    activeBasePath: 'tags',
                    label: 'Tags',
                    position: 'left',
                },
                // {
                //     to: 'docs/',
                //     activeBasePath: 'docs',
                //     label: '文档',
                //     position: 'right',
                // },
                // {
                //     to: 'blog',
                //     label: '博客',
                //     position: 'right'
                // },
                {
                    href: 'https://github.com/VacantThinker/vacantthinker.github.io',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //     title: 'Community',
                //     items: [
                //         {
                //             label: 'Stack Overflow',
                //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //         },
                //         {
                //             label: 'Discord',
                //             href: 'https://discordapp.com/invite/docusaurus',
                //         },
                //         {
                //             label: 'Twitter',
                //             href: 'https://twitter.com/docusaurus',
                //         },
                //     ],
                // },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: 'blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/VacantThinker',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} vacantthinker.github.io, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                // docs: {
                //     // It is recommended to set document id as docs home page (`docs/` path).
                //     homePageId: 'doc1',
                //     sidebarPath: require.resolve('./sidebars.js'),
                //     // remarkPlugins: [remarkImages],
                //     // rehypePlugins: [rehypeTruncate],
                // },
                blog: {
                    showReadingTime: true,
                    path: './blog',
                    routeBasePath: '/', // Set this value to '/'.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
