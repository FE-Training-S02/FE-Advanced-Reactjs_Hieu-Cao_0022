import React from 'react'
import { IBlog } from '../../shared/types/blog'
import blogImage from '../../../assets/images/blog-image.jpg'

const BlogItem = (props: IBlog) => {
  return (
    <li className="blog-item">
      <a href="" className="blog-link">
        <img src={blogImage} className="blog-image"></img>
        <div className="blog-content">
          <span className="blog-topic">{props.topic}</span>
          <h3 className="blog-title">{props.title}</h3>
          <p className="blog-text">{props.content}</p>
          <div className="blog-info">
            <span className="blog-author">{props.author}</span>
            <p className="blog-createAt">{props.createAt}</p>
            <span className="blog-time-read">{props.timeRead} mins read</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default BlogItem
