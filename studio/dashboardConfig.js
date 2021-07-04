export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60e217912ad04e3c2ee5e7c0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h7bnqfo8',
                  apiId: 'b63cf149-bab8-47e3-a57c-d15aa7250573'
                },
                {
                  buildHookId: '60e217912ad04e3eb9e5e776',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3gsk2n17',
                  apiId: 'fefd5222-ce1a-45e3-852f-f118621a222a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aebkop/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3gsk2n17.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
