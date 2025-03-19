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

  const downloadAsset = async () => {
    try {
      // Don't modify the src URL - use it directly
      const fileUrl = src;
      
      console.log('Attempting to download:', fileUrl);
      
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf, image/*',
        },
        // Add credentials if needed
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const fileName = src.split('/').pop();
      
      saveAs(blob, fileName);
    } catch (error) {
      console.error('Download error:', error);
      alert('Sorry, there was an error downloading the file. Please try again later.');
    }
  }

  const handleClick = () => {
    if (isPDF) {
      // Open PDF in new tab
      window.open(src, '_blank', 'noopener,noreferrer');
    } else {
      // Keep existing download logic for non-PDFs
      downloadAsset();
    }
  }
  
  return (
    <>
    <div className={containerClasses}>
      <button onClick={handleClick} className={btnClasses}>
        {isPDF ? 'View PDF' : 'Download'}
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