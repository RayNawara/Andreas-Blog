import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      )
      {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY hh:mm a")
            body {
              body
            }
          }
        }
      }
    }
  `)
  
  return (
    <div className="container">
      <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}><h2>{edge.node.title}</h2></Link>
                <p>{edge.node.publishedDate}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage;