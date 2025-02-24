import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Head from "next/head";


const tcolor = {
  color: '#8C52FF',
};

function AboutComp() {
    return (
      <>
        <h2 style={tcolor} >About Us</h2>
        <p style={{ fontSize: 17 }}>Clann was created with the mission to provide people with a
           convenient and affordable way to connect with others who share similar interests. We believe that everyone should have access to support groups and the comfort that comes with them, regardless of location or circumstance.<br/><br/>

          Clann is a virtual platform that uses voice chats to connect people of common interest.
          Our project was initiated by <b>Jeoffrey Duke,</b> who wanted to help people who do not have access to real-life support groups. 
          Clann offers a convenient and affordable way for people to connect with others who share similar interests, providing them with the support they need.</p>
      </>
    );
  }
  
  function About() {
    return (
      <>
        <Head>
          <title>About / Clann</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Body midComp={<AboutComp />} />
      </>
    );
  }
  
  export default About;