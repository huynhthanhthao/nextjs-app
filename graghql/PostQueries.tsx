import { gql } from "@apollo/client"

const GET_ALL_POSTS = gql`
query{
  posts{
    data{
      id
      attributes {
        title
        description
      }
    }
  }
}
`

const GET_POST_BY_ID = gql`
query GetPostById($id: ID!){
  post(id: $id){
    data{
      attributes {
        title
        description
      }
    }
  }
}
`
export { GET_ALL_POSTS, GET_POST_BY_ID }