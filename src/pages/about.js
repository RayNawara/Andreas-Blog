import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <div className="container">
      <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <img alt="RJ Nawara" src={require('../images/avatar.jpg')} />
      <p>I am a very experienced IBM S370 mainframe programmer, programmer analyst, systems analyst, system programmer as well as a Senior IMS and IDMS programmer, analyst, senior system programmer and senior Database Administrator. I also worked as an IDMS System Engineer. I have changed my direction and have moved to web development. I have studied and worked with HTML 5, CSS 3 , JavaScript, ES6, JQuery, Bootstrap 4, WordPress, PHP, My SQL, Python, ESlint, Mongo DB, Mongoose, Rest APIs, Security and Authentication, Socket.io, Async/Await and Microsoft Azure. I have a good knowledge of HTML, CSS, JavaScript, Ruby, Rails, React, Redux, React-Router, Jest, Enzyme, Firebase, Gatsby, NEXT.js, GraphQL, Prisma, PostgreSQL, Heroku, GIT and node.js with Express, Mongodb, Mongoose, Postman, Supertest and Expect. I love to program and I am looking to become the best programmer I can be.</p>
      <p><Link to="/contact">Want to work with me?</Link></p>
      <p><Link to="/certificates">My Certificates</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage;