import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

function Blogs() {
    
    const {posts,loading} =useContext(AppContext)

    

  return (
    <div>
         {
            loading ?    
            (<Spinner/>) :
            (
                posts.length === 0 ?

                (<div>
                  <p>No post Found</p>
                </div>) :

                (posts.map ((post) =>(
                     <div key={post.id}>
                        <p className='font-bold'>{post.title}</p>
                        <p>
                             By<span>{post.author}</span> on <span>{post.category}</span>
                        </p>

                        <p>  Posted On <span>{post.date}</span>date </p>
                        <p> {post.content}  </p>

                        <div>
                            {post.tags.map( (tag,index) => {
                                return <span key={index}> {`#${tag}`}</span>
                            })}
                        </div>

                     </div>
                ) ))
            )
         }
    </div>
  )
}

export default Blogs;