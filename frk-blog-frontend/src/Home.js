import {useState, useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending]= useState(true) ;
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:4000/api/blogs')
        .then((res)=>{
            if(!res.ok){
                throw Error("Couldn't Fetch the data from that Resource");
            }
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            setError(err.message);
            setIsPending(false);
        });
    },[])
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
           { blogs &&<BlogList blogs = {blogs} title= "All Blogs"/> }
        </div>
     );
}
 
export default Home;