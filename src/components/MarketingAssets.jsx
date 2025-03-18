'use client'
import { saveAs } from 'file-saver';
import { clsx } from 'clsx';

// Make a container to handle 1-many assets
export function MarketingAssets ({children}) {

  return(
    <div className="mx-auto p-4 my-4 flex flex-row gap-4 flex-wrap justify-center items-center">
      {children}
    </div>
  )
}

// Handle each asset
export function MarketingAsset ({src, alt, layout, title}) {
  
  let btnClasses;
  let containerClasses;

  // Define asset's conatainer's size
  if (layout === 'slide'){
    containerClasses = 'w-[280px] sm:w-[600px] xl:w-[800px] shadow shadow-indigo-400 flex justify-center items-center';
  } else if (layout === 'slide-short'){
    containerClasses = 'w-[280px] sm:w-[600px] xl:w-[800px] shadow shadow-indigo-400 flex justify-center items-center';
  } else if (layout === 'square'){
    containerClasses = 'w-[280px] shadow shadow-indigo-400 flex justify-center items-center';
  } else if (layout === 'flyer'){
    containerClasses = 'w-[280px] shadow shadow-indigo-400 flex justify-center items-center';
  }
    
  // Define button's size
  if (layout == 'square'){
    btnClasses = `bg-slate-600/85 w-[280px] h-[280px] asset-hover absolute text-white text-xl`
  } else if (layout === 'flyer'){
    btnClasses = `bg-slate-600/85 w-[280px] h-[363px] asset-hover absolute text-white text-xl`
  } else if (layout === 'slide') {
    btnClasses = `bg-slate-600/85 w-[280px] sm:w-[600px] xl:w-[770px] h-[158px] sm:h-[338px] xl:h-[432px] asset-hover absolute text-white text-xl`
  } else if (layout === 'slide-short') {
    btnClasses = `bg-slate-600/85 w-[280px] sm:w-[600px] xl:w-[770px] h-[100px] sm:h-[212px] xl:h-[272px] asset-hover absolute text-white text-xl`
  };

  const isPDF = src.toLowerCase().endsWith('.pdf');
  const previewSrc = isPDF ? src.replace('.pdf', '_preview.jpg') : src;

  const downloadAsset = () => {
    // User sees the preview file (faster page load) but downloads the full version
    const fileUrl = src.replace('preview', 'full');
    // Grab everything after the last / in the url for filename
    const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length);
    
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  }
  
  return (
    <>
    <div className={containerClasses}>
      <button onClick={downloadAsset} className={btnClasses}>
        Download {isPDF ? 'PDF' : ''}
      </button>
      <img
        src={previewSrc}
        alt={alt}
        className="w-full my-0 mx-auto"
      />
    </div>
    </>
  )
}