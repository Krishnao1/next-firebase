import Head from 'next/head'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import styles from '../styles/Home.module.css'
import fire from '../component/firebase-config'
import CreatePost from '../component/CreatePost'

const Home = () => {

  const [blogs, setBlogs] = useState([]);

  

  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);



      return (<div style={{margin:'auto',marginLeft:'50px'}}>
          <Head>
            <title>Blog App</title>
          </Head>
          <h1>Blog</h1>
          <ul>
            {blogs.map(blog =>
              <li key={blog.id}>
                 <Link href='/[id]' as={'/' + blog.id}>
                  <a style={{color:'red'}}>{blog.title}</a>
                  </Link>
              </li>
            )}
          </ul>
          <CreatePost />
        </div>
      )
}
export default Home;







// Home.getInitialProps = async ()=>{
//     let firebase = await loadFirebase()
//     const result = await new Promise(( resolve , reject )=>{      
//      firebase.firestore().
//     collection('users').limit(10).get().then((snapshot)=>{
//       let data =[]
//       snapshot.docs.forEach((doc)=>{
//       data.push(Object.assign({ 
//         id:doc.id,
//        user:doc.data().user}))
//        })
//       resolve(data)
//     }).catch((e)=>{
//         reject([])
//     })
//   })  
//    console.log(result)
//    return { result }
 
// }
      // export async function getServerSideProps(){
      //     let firebase = await loadFirebase()
      //     const result = await new Promise(( resolve , reject )=>{      
      //     firebase.firestore().
      //     collection('users').limit(10).get().then((snapshot)=>{
      //       let data =[]
      //       snapshot.docs.forEach((doc)=>{
      //       data.push(Object.assign({ 
      //         id:doc.id,
      //       user:doc.data().user}))
      //       })
      //       resolve(data)
      //     }).catch((e)=>{
      //         reject([])
      //     })
      //   })  
      //   //  console.log(result)
      //   return { props:{result} }
      
      // }

// export async function getStaticProps(){
//   let firebase = await loadFirebase()
//   const result = await new Promise(( resolve , reject )=>{      
//    firebase.firestore().
//   collection('users').limit(10).get().then((snapshot)=>{
//     let data =[]
//     snapshot.docs.forEach((doc)=>{
//     data.push(Object.assign({ 
//       id:doc.id,
//      user:doc.data().user}))
//      })
//     resolve(data)
//   }).catch((e)=>{
//       reject([])
//   })
// })  
// //  console.log(result)
//  return { props:{result} }

// }




