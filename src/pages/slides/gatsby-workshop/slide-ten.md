---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 10
link: 'gatsby-workshop'
date: '2020-02-22'
duration: 3
---

## Our First Query

Go to

```bash
localhost:8000/___graphql
```

in your browser to open GraphiQL

```graphql
  query ALL_POSTS_QUERY {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
```