

export function ExternalCTAItem({ primary, href, children }) {
  let classes;
  if (primary){
    classes = "nav-btn btn__primary transition text-white font-robotoFlex"
  } else {
    classes = "nav-btn btn__outline transition font-robotoFlex"
  }
  // text-sm leading-5 text-red-600 transition hover:text-zinc-900 dark:text-red-400 dark:hover:text-white
  return (
    <li>
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    </li>
  )
}