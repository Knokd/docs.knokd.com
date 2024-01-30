import Link from "next/link"

export function TopLevelNavItem({ primary, href, children }) {
  let classes;
  if (primary){
    classes = "nav-btn btn__primary transition"
  } else {
    classes = "nav-btn btn__outline transition"
  }
  // text-sm leading-5 text-red-600 transition hover:text-zinc-900 dark:text-red-400 dark:hover:text-white
  return (
    <li>
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    </li>
  )
}