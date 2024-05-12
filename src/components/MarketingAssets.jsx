'use client'
import { saveAs } from 'file-saver';

// Make a container to handle 1-many assets
export function MarketingAssets ({children}) {

  return(
    <div className="mx-auto p-4 my-4 flex flex-row gap-4 flex-wrap justify-center items-center">
      {children}
    </div>
  )
}

// Handle each asset
export function MarketingAsset ({src, alt}) {

  const downloadImage = () => {
    // User sees the preview file (faster page load) but downloads the full version
    const imageUrl = src.replace('preview', 'full');
    // Grab everything after the last / in the url for filename
    const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.length)
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(error => {
        console.error('Error downloading image:', error);
      });
  }
  
  return (
    <div className="w-[280px] shadow shadow-indigo-400 flex justify-center items-center">
      <button onClick={downloadImage} className="bg-slate-600/85 w-[280px] h-[280px] asset-hover absolute text-white text-xl">
        Download
      </button>
      <img
      src={src}
      alt={alt}
      className="w-full my-0 mx-auto"
      />
    </div>
    
  )
}