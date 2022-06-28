import React, { useState,useEffect } from 'react'
import axios from "axios";
import './detail.css'

const Details = () => {
    // {name,setName,setEmail,email}
    const[name,setName]=useState("Data loading...");
    const[email,setEmail]=useState("Data loading...")
   
    // const getData = async () =>{
    async function getData() {
      try {
        const res = await axios.get(`https://randomuser.me/api`, 
        {
        "Content-Type": "application/json",
      });
        
        // console.log(res);
        const dat=res.data.results
      const nameData=dat[0].name
      const nameString=nameData.title+" "+nameData.first+" "+nameData.last
      // console.log('====================================');
      console.log(dat[0].email)
      console.log(nameData)


      setName(nameString)
      setEmail(dat[0].email)


      localStorage.setItem("Name", nameString);
        localStorage.setItem("Email", dat[0].email); 

      } catch (error) {
       console.log(error)
      }
    }
  // if(name==="Data loading..."){
  //   setTimeout(() => {
  //     getData();
  //   }, 3000);
  //   // getData();
  // }
    useEffect(() => {
      getData();
    }, []);
   
   
   
    const handleSubmit = async () => {
    try {

        const res = await axios.get(`https://randomuser.me/api`, {
        "Content-Type": "application/json",
      });
      const dat=res.data.results
      const nameData=dat[0].name
      const nameString=nameData.title+" "+nameData.first+" "+nameData.last
      // console.log('====================================');
      console.log(dat[0].email)
      console.log(nameData)

      setName(nameString)
      setEmail(dat[0].email)

      localStorage.setItem("Name", nameString);
        localStorage.setItem("Email", dat[0].email); 

        // localStorage.setItem("user", dat[0]);

    //   console.log(dat[0].name.first)
      // console.log('====================================');
    } catch (error) {
        // console.log('====================================');
        console.log(error);
        // console.log('====================================');
    }
}
    //api link - https://randomuser.me/api
  return (
    <div className='container'>
        <div id='con'>
        <div id='heading'>User Details</div>
        <div className='subpart'>
            <div className='subtitle'>Name :  </div>
            <div className='subdata1'>{name}</div>
        </div>
        
        <div className='subpart'>
            <div className='subtitle' style={{color: "red", fontWeight:"bold"}}>Email-Id :</div>
            <div className='subdata2'>{email}</div>
        </div>
        

        <button onClick={handleSubmit}>Refresh</button>
        </div>
        
    </div>
  )
}

export default Details