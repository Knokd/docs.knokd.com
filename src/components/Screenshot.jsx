import clsx from "clsx";

export function Screenshot ({src, alt, mobile, caption}) {
  // Handle narrow images from mobile screencaptures
  // To use: add parameter mobile={true} to an instance in page.mdx
  const imageWidth = mobile ? 'max-w-[380px]' : '' ;
  const classes = clsx(`screenshot-container mx-auto p-4 shadow-indigo-300 my-4 ${imageWidth}`) 
    return(
    <div className={classes}>
      <img
        src={src}
        alt={alt}
        className="max-w-full my-0 mx-auto"
      />
      {caption && (
        <p className="text-sm text-gray-500 text-center mt-2" dangerouslySetInnerHTML={{ __html: caption }} />
      )}
    </div>
  )
}