import React from 'react';
import './Post.css';

function Post({ data }) {

  const postTypeText = type => {
    switch (type) {
      case 'article': return '✍️ Article';
      case 'education': return '🔬️ Education';
      case 'meetup': return '🗓️ Meetup';
      case 'job': return '💼️ Job';
      default: return;
    }
  }

  return (
    <div className="post row">
      <div className="col">
        <div className="card m-3">
          {data.image && 
            <img src={data.image} className="card-img-top" alt="post header" />
          }
          <div className="card-body text-start">
            <p className="card-post-type">
              {postTypeText(data.type)}
            </p>
            <h5 className="card-title pe-5">
              {data.title}
              <div class="btn-group">
                <button type="button" class="btn dropdown-toggle fas fa-ellipsis-h" data-bs-toggle="dropdown" aria-expanded="false">
                  
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><button class="dropdown-item" type="button">Edit</button></li>
                  <li><button class="dropdown-item" type="button">Report</button></li>
                  <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
              </div>
            </h5> 
            
            {data?.text && 
              <p className="card-text text-muted text-truncate">
                {data.text}
              </p>
            }
           
            <div>
              <span>

                {data?.date && (
                  <>
                    <svg className='align-text-bottom me-2' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black"/>
                    </svg>

                    {data.date}
                  </>
                )}
                  
                {data?.company && (
                  <>
                    <svg className='align-text-bottom me-2'  width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6667 4.00008V2.33341H7.33332V4.00008H10.6667ZM2.33332 5.66675V14.8334H15.6667V5.66675H2.33332ZM15.6667 4.00008C16.5917 4.00008 17.3333 4.74175 17.3333 5.66675V14.8334C17.3333 15.7584 16.5917 16.5001 15.6667 16.5001H2.33332C1.40832 16.5001 0.666656 15.7584 0.666656 14.8334L0.67499 5.66675C0.67499 4.74175 1.40832 4.00008 2.33332 4.00008H5.66666V2.33341C5.66666 1.40841 6.40832 0.666748 7.33332 0.666748H10.6667C11.5917 0.666748 12.3333 1.40841 12.3333 2.33341V4.00008H15.6667Z" fill="black"/>
                    </svg>

                    {data.company}
                  </>
                )}
               
              </span>

              {data?.location && (
                <span className='mx-5'>
                  <svg className='me-2 align-text-bottom' width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00002 0.666748C2.77502 0.666748 0.166687 3.27508 0.166687 6.50008C0.166687 10.8751 6.00002 17.3334 6.00002 17.3334C6.00002 17.3334 11.8334 10.8751 11.8334 6.50008C11.8334 3.27508 9.22502 0.666748 6.00002 0.666748ZM1.83335 6.50008C1.83335 4.20008 3.70002 2.33342 6.00002 2.33342C8.30002 2.33342 10.1667 4.20008 10.1667 6.50008C10.1667 8.90008 7.76669 12.4918 6.00002 14.7334C4.26669 12.5084 1.83335 8.87508 1.83335 6.50008Z" fill="black"/>
                    <path d="M6.00002 8.58341C7.15061 8.58341 8.08335 7.65067 8.08335 6.50008C8.08335 5.34949 7.15061 4.41675 6.00002 4.41675C4.84943 4.41675 3.91669 5.34949 3.91669 6.50008C3.91669 7.65067 4.84943 8.58341 6.00002 8.58341Z" fill="black"/>
                  </svg>

                  {data.location}
                </span>
              )}
              
            </div>
          </div>
          
          {(data.type === 'meetup' || data.type === 'job') && (
            <a href='#link-goes-here' className={`btn btn-outline-secondary mx-3 mb-3 btn-${data.type}`}>
              {data.type === 'meetup' && 'Visit Website'}
              {data.type === 'job' && 'Apply on Timesjobs'}
            </a>
          )}
          

          <div className="card-footer d-flex align-items-center justify-content-between w-100">
            
              <div className="d-flex align-items-center"> 
                <img src={`./images/userAvatar/${data.creator}.png`} alt="avatar" />
                <h6 className='mx-2 mb-0'>{data.creator}</h6>
              </div>
              <div className="">
                <small className="text-muted mx-5">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenoenddd" d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z" fill="#525252"/>
                  </svg>
                  {' '} 1.4k views
                </small>


                <button className="btn btn-share">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
                  </svg>

                </button>
              </div>
                
          </div>

        </div>
      </div>
    </div>
    
  )
}
export default Post;