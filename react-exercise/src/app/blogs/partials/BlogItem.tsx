import React from 'react';

import { BlogOptions } from '../../shared/types/blog';
import blogImage from '../../../assets/images/blog-image.jpg';

const BlogItem = (props: BlogOptions) => {
  const { topic, title, content, author, createAt, timeRead } = props;
  return (
    <li className="blog-item">
      <a href="" className="blog-link">
        <img src={blogImage} className="blog-image" alt={title}></img>
        <div className="blog-content">
          <span className="blog-topic">{topic}</span>
          <h3 className="blog-title">{title}</h3>
          <p className="blog-text">{content}</p>
          <div className="blog-info">
            <span className="blog-author">{author}</span>
            <p className="blog-createAt">{createAt}</p>
            <span className="blog-time-read">{timeRead} mins read</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogItem;
