import React from 'react';
import Article from './Article';
import './Blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
<h1 className="gradient__text"> WHAT IS<br />VOSS-FITNESS.</h1>
      <Container>
      <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/LCu22mhDCD0" title="YouTube video" allowfullscreen></iframe>
</div>
      </Container>
    </div>
    </div>

);

export default Blog;