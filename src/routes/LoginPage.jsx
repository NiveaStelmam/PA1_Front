import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from "react-router-dom";
import "./LoginPage.css"
import axios from "axios";

const LoginPage = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

      try {
        
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        const data = response.data;
        
        setPosts(data);

      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {

    getPosts();

  }, [])

  return (
    <div>
      <h1>PÁGINA DE lOGIN</h1>
      {posts.lenght === 0 ? <p>Carregando...</p> : (
        posts.map((posts) =>(
          <div className="post" key={posts.id}>
            <h2>{posts.yiyle}</h2>
          </div>
        ))
      )}
    </div>
  );
  
};

export default LoginPage;