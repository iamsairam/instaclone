import React, { useEffect, useState } from 'react';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Images(props) {
    const[photo,setPhoto]=useState([]);   
    // API Root
    const apiRoot = "https://api.unsplash.com";

    const count = 10;

    // API Key from unsplash.com
    const accessKey = "LCwrnNkfbLzMGr12O-HXYmkgPgv1Ki8baT2rCLLBXnM";
    useEffect(()=>{
        fetchImages();
    },[])
    const fetchImages =()=>{
        axios
        .get(`${apiRoot}/photos/random?&client_id=${accessKey}&count=${count}`)
        .then(res=>{
            console.log(res);
            setPhoto([...photo,...res.data])
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (      
        <div>

        <InfiniteScroll
            dataLength={photo.length} //This is important field to render the next data
            next={fetchImages}
            hasMore={true}
            loader={
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>
            }
            endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
            }      
        >   
        <div className='images-conatiner'>
           {photo.map(image => <img src={image.urls.thumb} key={image.id} alt='Image' /> )}
        </div>
        </InfiniteScroll>

        </div>
    );
}

export default Images;