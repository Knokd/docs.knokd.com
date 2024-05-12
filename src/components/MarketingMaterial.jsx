'use client'

import {
  useEffect,
  useState,
} from 'react'
import clsx from 'clsx'

export function MarketingMaterial ({children}) {
  let [copyCount, setCopyCount] = useState(0)


  // One-level function
  // function getTextContent() {
  //   let containerDiv = event.target.closest('div')
  //   let siblingPre = containerDiv.querySelector('pre')
  //   console.log(siblingPre.innerHTML)
  //   return textContent ;
  // }
  
  const handleCopy = (children) => {
    // Extract the paragraphs
    const textContent = getTextContent(children)
    // Copy to clipboard
    navigator.clipboard.writeText(textContent).then(() => setCopyCount(copyCount + 1))
  }

  function MarketingClipboardIcon(props) {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
        <path
          strokeWidth="0"
          d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
        />
        <path
          fill="none"
          strokeLinejoin="round"
          d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
        />
      </svg>
    )
  }

  // function MarketingCopyButton({ children }) {
  
  //   let copied = copyCount > 0

  //   useEffect(() => {
  //     if (copyCount > 0) {
  //       let timeout = setTimeout(() => setCopyCount(0), 1000)
  //       return () => {
  //         clearTimeout(timeout)
  //       }
  //     }
  //   }, [copyCount])

  //   return (
  //     <button
  //       type="button"
  //       className={clsx(
  //         'group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-100 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
  //         copied
  //           ? 'bg-indigo-400/10 ring-1 ring-inset ring-indigo-400/20'
  //           : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
  //       )}
  //       onClick={() => {
  //         handleCopy(children);
  //         setCopyCount((count) => count + 1)
  //       }}
  //     >
  //       <span
  //         aria-hidden={copied}
  //         className={clsx(
  //           'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
  //           copied && '-translate-y-1.5 opacity-0',
  //         )}
  //       >
  //         <MarketingClipboardIcon className="h-5 w-5 fill-indigo-500 stroke-indigo-500 transition-colors group-hover/button:stroke-indigo-400" />
  //         Copy
  //       </span>
  //       <span
  //         aria-hidden={!copied}
  //         className={clsx(
  //           'pointer-events-none absolute inset-0 flex items-center justify-center text-indigo-400 transition duration-300',
  //           !copied && 'translate-y-1.5 opacity-0',
  //         )}
  //       >
  //         Copied!
  //       </span>
  //     </button>
  //   )
  // }


  return (
    <div className=" mx-auto relative bg-slate-700 rounded p-4 list-reset">
      <pre className="overflow-hidden text-wrap p-4 text-xs text-white">{children}</pre>
      {/* <MarketingCopyButton children={children}/> */}
    </div>
  )
}