import React from 'react'
import listBlog from '../listBlog.json';
import { IBlog } from '../shared/types/blog';
import BlogItem from './partials/BlogItem';

const Blogs = () => {
  return (
    <section className="section-blog">
      <div className="container">
        <ul className="list-blog">
          {
            listBlog.map((blog: IBlog) => BlogItem(blog))
          }
        </ul>
      </div>
    </section>
  )
}

export default Blogs
