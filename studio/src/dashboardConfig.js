export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e78494490508df446a20101',
                  title: 'Sanity Studio',
                  name: 'blog-studio-pd27kbyh',
                  apiId: '71a2c939-e60b-43a9-9614-4cb4bf3dc8aa'
                },
                {
                  buildHookId: '5e7849454fee5d2fd3561417',
                  title: 'Blog Website',
                  name: 'blog-web-mpywsdbc',
                  apiId: 'da5139ab-0f4a-4aba-b19c-c258cf7b23a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petedoyle/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-mpywsdbc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
