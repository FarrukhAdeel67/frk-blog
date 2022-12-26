import {useState, useEffect} from 'react'
import BlogList from './BlogList';
//use of hooks to add and update the lists of blogs 
const Home = () => {
    const [blogs, setBlogs] = useState(null)  
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then((res)=>{
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
        })
        .catch(err=>{console.log(err)});
    },[])
    return ( 
        <div className="home">
           { blogs &&<BlogList blogs = {blogs} title= "All Blogs"/> }
        </div>
     );
}
 
export default Home;