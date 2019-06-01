import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import 'bootstrap/dist/css/bootstrap.min.css';

const Certificates = () => {
  return (
    <div className="container responsive">
    <Layout>
      <Head title="Certificates" />
      <h1>Certificates</h1>
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-CSS_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-HTML_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-Javascript_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-jQuery_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-MySQL_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-PHP_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/CCA-Certificate-Python_Level_1_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/Azure_Certificate_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/GraphQL_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/nodejs_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/ReactRedux_200x200.jpg')} />
        <img alt="Azure Certificate" src={require('../images/Ruby_on_Rails_200x200.jpg')} />
      </Layout>
    </div>
  )
}

export default Certificates