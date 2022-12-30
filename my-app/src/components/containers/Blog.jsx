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
  <iframe src="https://www.youtube.com/embed/Yoi_zB4OYp4" title="YouTube video" allowfullscreen></iframe>
</div>
      </Container>


      


    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        {/* { <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> } */}
      </div>
      <div className="gpt3__blog-container_groupB">
        {/* <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
    </div>
  </div>
);

export default Blog;