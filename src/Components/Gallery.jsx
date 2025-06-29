import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("https://roommatefinder-server-site.vercel.app/allpost").then(res=>res.json()).then(data=>setData(data))
    })
    return (
       <div class=" dark:bg-gray-800  py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
       

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
           
     {   data.length>0  ? data.slice(0,6).map(items=> <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={items.photoUrl} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>) : <h1>loading</h1>}
           
           
        </div>
    </div>
</div>
    );
};

export default Gallery;