import React from "react";
import { Header } from "../Common/Header";
import { posts } from "./posts";
import { Link } from "react-router-dom";

export const Blog = () => {
  let allblogs = posts.map((v, i) => {
    return (
      <div key={i }>
        <h3>{v.title}</h3>
        <p>{v.body} </p>
        <button><Link to={`/blog/${v.id}`}>read more</Link></button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <h1>Blog page</h1>
      <div>{allblogs}</div>
    </>
  );
};
