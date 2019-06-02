import React from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import 'typeface-dancing-script'
import headerStyles from '../components/header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home" />
      <h1 className={headerStyles.author}>Hello!</h1>
      <h2 className={headerStyles.author}>I'm Andrea Nawara and I live in the sunny Tampa area.</h2>
      <img alt="Tampa, Florida" src={require('../images/Tampa.jpg')} />
    </Layout>
  )
}

export default IndexPage;