import React from 'react'
import { useState } from 'react'

const App = () => {
  

  return (
    <>
    <div id='main'>
        <div id="nav" style={{display:'flex',justifyContent:'space-between',alignItems:'center', padding:"40px 100px"}}>
          <div id="nl">
            <h3 style={{fontWeight:+"200"}}><i class="fa-solid fa-gear" style={{color:'#DDFD00'}}></i>  MODE</h3>
          </div>
          <div id="nC" style={{display:'flex',alignItems:'center',gap:"40px"}}>
            <h4>Mode Token</h4>
            <h4>AI Agents</h4>
            <h4>Season 4</h4>
            <h4>Community</h4>
          </div>
          <div id="nR">
            <button id='btn1'>Dashboard</button>
          </div>
        </div>
        <div id="center" style={{textAlign:"center"}}>
          <h1 style={{fontSize:"8vh", fontWeight:100,letterSpacing:2, marginTop:"50px"}}>AI Agents are The <br />
          Future of DeFi
          </h1>
          <p style={{marginTop:"20px", fontWeight:0, fontSize:"14px",opacity:0.6}}>
            Mode L2 scales DeFi to billions of user through onchain agents ans AI-powered <br />
            financial applications. Mode is building the AI Agents economy.
          </p>
          <div id='cbottom' style={{marginTop:20}}>
            <button id='btn1' style={{marginRight:20}}>AI Agents App</button>
            <button id='btn2'>Learn More</button>
          </div>
          
            <div id="foot" style={{display:'flex', justifyContent:"space-between",marginTop:90,padding:"0 70vh"}}>
              <ul><h3>$500M+</h3> <h6>TVL</h6></ul>
              <ul><h3>24,000,000+</h3> <h6>TRANSACTIONS</h6></ul>
              <ul><h3>367K+</h3> <h6>USERS</h6> </ul>
          </div>
          <div id="end" style={{marginTop:"15.8vh"}}>
            <h1 style={{fontWeight:100,marginBottom:"15px"}}>Onchain Economy</h1>
            <p style={{fontSize:11,opacity:0.8,marginBottom:30}}>Made is building a new onchain economy that rewards</p>
          </div>
        </div>
    </div>
   
   

    </>
  )
}

export default App
