// src/Blog.js
import React, { useState } from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    {
      title: 'Understanding React Hooks',
      content: 'React Hooks are functions that let you use state and other React features without writing a class...',
      link: 'https://example.com/react-hooks',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'JavaScript ES6 Features',
      content: 'ES6 brought significant changes to JavaScript, including arrow functions, template literals, and more...',
      link: 'https://example.com/es6-features',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'CSS Grid Layout',
      content: 'CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts...',
      link: 'https://example.com/css-grid',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Introduction to TypeScript',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing and...',
      link: 'https://example.com/typescript',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Web Accessibility Basics',
      content: 'Web accessibility ensures that websites and applications are usable by people of all abilities and disabilities...',
      link: 'https://example.com/accessibility',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'GraphQL vs REST',
      content: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data...',
      link: 'https://example.com/graphql',
      image: 'https://via.placeholder.com/300'
    }
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogPosts}>
        {currentPosts.map((post, index) => (
          <div key={index} className={styles.blogPost}>
            <img src={post.image} alt={post.title} className={styles.blogImage} />
            <div className={styles.blogContentWrapper}>
              <h2 className={styles.blogTitle}>{post.title}</h2>
              <p className={styles.blogContent}>{post.content}</p>
              <a href={post.link} className={styles.blogLink} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
