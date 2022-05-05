export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6274114dfa9d5319b8052329",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-h89v6ujv",
                  apiId: "13cdc8ad-778c-4190-ad0c-e0a00bc2f380",
                },
                {
                  buildHookId: "6274114db72d310c2a920218",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xi4fd3s9",
                  apiId: "9102d0a4-d767-4655-93f5-e8c077b8fba1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/snowfallhp/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xi4fd3s9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
