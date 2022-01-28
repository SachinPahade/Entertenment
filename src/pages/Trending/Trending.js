import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../component/Pagination/CustomPagination";
import SingleContent from "../../component/SingleContent/SingleContent";
import "./Trending.css"

const Trending = () => {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);


    const fetchTrending = async()=>{
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=1575a358ab2088aeb1e0079daa7bb074&page=${page}`)
    

    // console.log(data.results);
    
    setContent(data.results)

    };

    useEffect(() => {
       fetchTrending();
       //eslint-disable-next-line
    }, [page]);


    return (
        <div>
            <samp className="pageTitle">Trending</samp>
            <div className="trending">
                {content && content.map((c)=>(
                    <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date= {c.first_air_data || c.release_date} media_type = {c.media_type} vote_average = {c.vote_average} />
                ))}
            </div>
            <CustomPagination setPage = {setPage}/>
        </div>
    )
}

export default Trending
