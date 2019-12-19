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
                  buildHookId: '5dfb5ed420625e322a3a7f0d',
                  title: 'Sanity Studio',
                  name: 'test-blog-studio-1z93mkvv',
                  apiId: '0741c729-bc23-4f69-8d96-59ea34f0efac'
                },
                {
                  buildHookId: '5dfb5ed4b8ab4ac0a1d70974',
                  title: 'Blog Website',
                  name: 'test-blog-web-f2ss8ui7',
                  apiId: 'dce9b6a2-5458-4825-955b-8360b97e4dcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TrueMoein/test-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://test-blog-web-f2ss8ui7.netlify.com', category: 'apps' }
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
