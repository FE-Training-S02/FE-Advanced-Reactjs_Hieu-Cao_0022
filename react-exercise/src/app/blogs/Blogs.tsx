import React from 'react';

import BlogItem from './partials/BlogItem';
import listBlogs from '../shared/data-json/list-blogs.json';
import { BlogOptions } from '../shared/types/blog';

const Blogs = () => {
  return (
    <section className="section-blog">
      <div className="container">
        <ul className="list-blog">
          {
            listBlogs?.map((blog: BlogOptions) => BlogItem(blog))
          }
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
