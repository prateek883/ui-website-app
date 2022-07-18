import React, { useEffect, useState } from 'react';
import Post from './Post/';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('./posts.json')
      .then(data => data.json())
      .then(posts => setPosts(posts.map(post => post)))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className='posts container-lg'>   
      {/* first row with nav and option buttons. */}
      <div className="row border-bottom">
        <div className="col-12 d-flex justify-content-between bg-white pt-2">
          <nav>
            <a className='btn active' href="#allposts">All Posts(32)</a>
            <a href="#article" className="btn text-muted">Article</a>
            <a href="#event" className="btn text-muted">Event</a>
            <a href="#education" className="btn text-muted">Education</a>
            <a href="#job" className="btn text-muted">Job</a>
          </nav>

          <div className="options">
            <button className="btn write-a-post m-2" >
              Write a Post <i className="fas fa-caret-down"></i>
            </button>
            <button className="btn btn-primary">
              <svg style={{ marginBottom: '4.2px' }} width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white"/>
              </svg>
              {' '}
               Join Group
            </button>
          </div>
        </div>
      </div>


      {/* posts */}
      <div className="row">
        <div className="col-8 mb-4 posts__col">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
        
        
        <div className="col-4">
          <div className="m-3">
            <div className='border-bottom d-flex align-items-center'>
              <svg className='me-2 align-text-bottom' width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00002 0.666748C2.77502 0.666748 0.166687 3.27508 0.166687 6.50008C0.166687 10.8751 6.00002 17.3334 6.00002 17.3334C6.00002 17.3334 11.8334 10.8751 11.8334 6.50008C11.8334 3.27508 9.22502 0.666748 6.00002 0.666748ZM1.83335 6.50008C1.83335 4.20008 3.70002 2.33342 6.00002 2.33342C8.30002 2.33342 10.1667 4.20008 10.1667 6.50008C10.1667 8.90008 7.76669 12.4918 6.00002 14.7334C4.26669 12.5084 1.83335 8.87508 1.83335 6.50008Z" fill="black"/>
                <path d="M6.00002 8.58341C7.15061 8.58341 8.08335 7.65067 8.08335 6.50008C8.08335 5.34949 7.15061 4.41675 6.00002 4.41675C4.84943 4.41675 3.91669 5.34949 3.91669 6.50008C3.91669 7.65067 4.84943 8.58341 6.00002 8.58341Z" fill="black"/>
              </svg>

              <input className='form-input w-75 border-0' type="text" value='Noida, India' placeholder='Location' />
              
              <button className='btn'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black"/>
                </svg>
              </button>

            </div>

            <div className='mt-4'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="#6c757d"/>
              </svg>
              
              <small className="text-muted ms-2">
                Your location will help us serve better and extend a personalised experience.
              </small>

            </div>

          </div>
        </div>
      </div>
     


    </section>
  )
}
export default Posts;