import React from 'react';
import moment from 'moment';

import { BlogOptions } from '../../shared/types/blog';
import blogImage from '../../../assets/images/blog-image.jpg';

const BlogItem = (props: BlogOptions) => {
  const { topic, title, content, author, createAt, timeRead } = props;
  const dateCreateAtBlog = new Date(createAt);

  return (
    <li className="blog-item">
      <a href="" className="blog-link">
        <img src={blogImage} className="blog-image" alt={title}></img>
        <div className="blog-content">
          <h2 className="blog-topic">{topic}</h2>
          <h3 className="blog-title">{title}</h3>
          <p className="blog-description">{content}</p>
          <div className="blog-info">
            <span className="blog-author">{author}</span>
            <p className="blog-create-at">
              {moment(dateCreateAtBlog).format('DD/MM/yyyy hh:mm')} EST
            </p>
            <span className="blog-time-read">{timeRead} mins read</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogItem;
