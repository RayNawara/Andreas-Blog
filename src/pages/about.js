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
      <img alt="Andrea Nawara" src={require('../images/Koala_002_edited_1_25.jpg')} />
      <p>I am trying to go through all of my photos and document them.</p>
      <p><Link to="/contact">Do you have any information for me?</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage;