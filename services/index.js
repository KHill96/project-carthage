import { graphql } from 'graphql';
import { request, gql} from 'graphql-request'

const graphqlEndpoint = process.env.READ_ONLY_GRAPHQL_ENDPOINT;

export const getNewDisplay = async () => {
    const query = gql`
    query GetDisplay{
      books(orderBy: publishedAt_DESC){
          title,
          authors{
            name,
            slug
          },
          slug,
          cover{
            url
          }
          description
      }
  }
    `
    const results = await request(graphqlEndpoint, query)
    return results.books
}

export const getBook = async (slug) => {
    const query = gql`
    query GetBook ($slug: String!){
        books (where:{slug: $slug}){
          title,
          html,
          pdf{
            url
          },
          epub{
            url
          },
          azw3{
            url
          },
          cover {
            url
          },
        }
      }
      
    `
    const results = await request(graphqlEndpoint, query, {slug})
    return results
}

export const getBooks = async() => {
  const query = gql`
  query GetBooks {
    booksConnection {
      edges {
        node {
          html
          slug
          title
          cover {
            url
          }
          description
        }
      }
    }
  }
  `
  const results = await request(graphqlEndpoint, query)
  return results.booksConnection.edges
}
export const searchTerm = async(term) =>{
  const query = gql`
  query SearchTerm ($term: String!) {
    books(where: {OR:[
      {title_contains:$term},
      {authors_some: {name_contains: $term}}
    ]  
    }){
      title,
          authors{
            name,
            slug
          },
          slug,
          cover{
            url
          }
          description
      
    }
  }
  `

  const results = await request(graphqlEndpoint, query, {term})
  return results
}

export const getCategoriesAll = async() => {
  const query = gql`
    query GetCategories {
      categories {
        slug
        category
      }
    }

  `

  const results = await request(graphqlEndpoint, query);
  return results.categories
}

export const getCategoryBooks = async (slug) =>{
  const query = gql`
  query GetCategoryBooks ($slug: String!){
    categoriesConnection(where: {slug: $slug}) {
      edges {
        node {
          category,
          books {
            title
            authors{
              name,
              slug
            }
            slug
            cover {
              url
            }
            description
          }
        }
      }
    }
  }
  `

  const results = await request(graphqlEndpoint, query, {slug})
  return results.categoriesConnection.edges[0]
}

export const getAuthors= async() =>{
  const query = gql`
  query GetAuthors {
    authors(orderBy: name_ASC) {
      name
      slug
    }
  }
  `

  const results = await request(graphqlEndpoint, query)
  return results.authors
}

export const getAuthorBooks = async(slug) => {
    const query = gql`
    query GetAuthorsBooks($slug: String!) {
      authorsConnection (where: {slug: $slug}) {
        edges {
          node {
            name
            books {
              title
              authors {
                name
                slug
              }
              slug
              cover {
                url
              }
              description
            }
          }
        }
      }
    }    
    `

    const results = await request(graphqlEndpoint, query, {slug})
    return results.authorsConnection.edges[0]
}
