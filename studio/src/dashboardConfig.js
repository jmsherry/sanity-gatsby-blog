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
                  buildHookId: '604c299a47c75b495bbb2268',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q52rmgqp',
                  apiId: '0b999929-d85a-4dc4-9303-2ed2f206d9d7'
                },
                {
                  buildHookId: '604c299a294def482236b2f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8xcoa9ap',
                  apiId: '2dde7a0a-6308-4427-9a65-211c6a8be62a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmsherry/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8xcoa9ap.netlify.app', category: 'apps' }
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
