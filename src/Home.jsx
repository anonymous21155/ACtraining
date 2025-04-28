import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

function Home () {
  const navigate = useNavigate();
  const handleClick = () => {
    //navigate('/success')
  } 
  return (
    <>
    <h1>Welcome to DevOps Fundamteals Session</h1>
    <button onClick={handleClick}>Fix me</button>
    </>
  )
}

export default Home;