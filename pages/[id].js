import React , { useState , useEffect } from 'react';
import fire from '../component/firebase-config'
import Link from 'next/link'

const Blog = (props) => {
  
    const [blog, setBlog] = useState(null);
  
    //this for initialprops only//
    // useEffect(() => {
    //     fire.firestore()
    //       .collection('blog')
    //       .doc(props.id)
    //       .get()
    //       .then(blog => {
    //         setBlog(blog.data())
    //       })
    //   }, [])
    
        // if(!blog){
        
        //     return <h1>Loading ...</h1>
        
        // }

         //getinitalprops//function only
        // return (
        // <div>
        // <h2>{blog.title}</h2>  
        // <p>{blog.content}</p>
        // </div>
        // )
        
        return (
            <div>
              <h2>{props.title}</h2>
              <p>
                {props.content}
              </p>
              <Link href="/">
                <a>Back</a>
              </Link>
            </div>
          )

  }
  
export default Blog

     //initalprops
// Blog.getInitialProps = ({ query }) => {
  
//     return {
//         id: query.id,
//     }
// }


export const getServerSideProps = async ({ query }) => {
  try {
    const blogObj = {};
    await fire.firestore()
      .collection('blog')
      .doc(query.id)
      .get()
      .then(result => {
        blogObj['title'] = result.data().title
        blogObj['content'] = result.data().content
      });
    
      return {
        props: {
          title: blogObj.title,
          content: blogObj.content,
        }
      }

  } catch (error) {
     alert('no internet')  
  }
    //   console.log(blogObj)

    
  }
