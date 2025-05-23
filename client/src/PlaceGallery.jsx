import { useState } from "react";
import Image from './Image.jsx';
export default function PlaceGallery({place}) {
const [showAllPhotos,setShowAllPhotos] = useState(false);
 if (showAllPhotos) {
        return (
            <div className=" absolute inset-0 bg-black text-white min-h-screen">
            <div className="bg-black p-8 grid gap-4">
            <div>
            <h2 className="text-3xl mr-48">Photos of the {place.title}</h2>
                <button onClick={() => setShowAllPhotos(false) } className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>

                  Close Photos
                </button>
            </div>
               {place?.photos?.length > 0 && place.photos.map(photo => (
                <div>
                    <Image src = {photo} alt=""/>
                </div>
           
           
            ))}
            </div>
            </div>
        
        );
    }
return(
    <div className="relative">
         <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <div>
               {place.photos?.[0] && (
                <div>
                 <Image onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover" src={place.photos[0]} alt=""/>
                 </div>
                 )} 
            </div>
            <div className="grid ">
                 {place.photos?.[1] && (
                 <Image onClick={() => setShowAllPhotos(true)} className = 'aspect-square object-cover' src={place.photos[1]} alt=""/>

                 )} 
                 <div className="overflow-hidden">
                 {place.photos?.[2] && (
                 <Image onClick={() => setShowAllPhotos(true)} className='aspect-square cursor-pointer object-cover relative top-2' src={place.photos[2]} alt=""/>
                 )} 
                
           </div>
        </div>
        </div>
        <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-2 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        Show more photos
        </button>
        </div>
);
}