'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

// import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { ExternalCTAItem } from '@/components/ExternalCTAItem'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0],
    ),
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-indigo-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [pathname, sections] = useInitialValue(
    [usePathname(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation,
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Welcome to Knokd',
    links: [
      { title: 'Intro', href: '/' },
      { title: 'Features', href: '/welcome-to-knokd/features' },
      { title: 'Realtor Cooperation Policy', href: '/welcome-to-knokd/realtor-cooperation-policy' },
    ],
  },
  {
    title: 'Getting Started',
    links: [
      { title: 'Signing up as an agent', href: '/getting-started/sign-up-as-an-agent' },
      { title: 'Signing up as a team', href: '/getting-started/sign-up-as-a-team' },
      { title: 'Growing your network', href: '/getting-started/grow-your-network' },
    ],
  },
  {
    title: 'Listings',
    links: [
      { title: 'Create a listing', href: '/listings/create-a-listing' },
      { title: 'Sharing link', href: '/listings/sharing-link' },
      { title: '1-to-1 sharing', href: '/listings/1-1-sharing' },
      { title: 'Listing types', href: '/listings/types-of-listings'},
    ],
  },
  {
    title: 'Saved Searches',
    links: [
      { title: 'Searches', href: '/saved-searches/create-a-saved-search' },
    ],
  },
  {
    title: 'Contacts',
    links: [
      { title: 'Adding Contacts', href: '/contacts/add-contacts' },
      { title: 'Reassigning Contacts', href: '/contacts/reassigning-contacts' },
    ],
  },
 {
   title: 'Marketing Resources',
   links: [
     { title: 'Social media posts', href: '/marketing-resources/social-media-posts' },
     { title: 'Buyer and seller flyers', href: '/marketing-resources/buyer-seller-flyers' },
     { title: 'Open house flyer', href: '/marketing-resources/open-house-flyer' },
     { title: 'Newsletter & email pieces', href: '/marketing-resources/newsletters-and-emails' },
     { title: 'Email signature templates', href: '/marketing-resources/email-signature-templates' },
     { title: 'Presentation slides', href: '/marketing-resources/presentation-slides' },
     { title: 'Knokd Logos', href: '/marketing-resources/knokd-logos' },
   ],
 }
]

// Iterative approach
export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {/* <div className='flex flex-col gap-4 md:hidden'> 
          <ExternalCTAItem primary={false} href="https://app.knokd.com/login">Log In</ExternalCTAItem>
          <ExternalCTAItem primary={true} href="https://www.knokd.com/get-started">Get Started</ExternalCTAItem>
        </div> */}
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : ''}
          />
        ))}
        {/* <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li> */}
      </ul>
    </nav>
  )
}

// Recursive build
// export function Navigation(props) {
//   return (
//     <nav {...props}>
//       <ul role="list">
//         {/* Top-level links */}
//         <div className='flex flex-col gap-4 md:hidden'>
//           <ExternalCTAItem primary={false} href="/">Log In</ExternalCTAItem>
//           <ExternalCTAItem primary={true} href="#">Get Started</ExternalCTAItem>
//         </div>
//         {renderNavigationGroups(navigation)}
//       </ul>
//     </nav>
//   );
// }

// function renderNavigationGroups(groups) {
//   return groups.map((group) => (
//     <NavigationGroup
//       key={group.title}
//       group={group}
//       renderLinks={renderLinksRecursively} // Use recursive function for links
//     />
//   ));
// }

// function renderLinksRecursively(links) {
//   return links.map((link) => {
//     if (link.links) {
//       return (
//         <li key={link.title}>
//           <button className="group">{link.title}</button>
//           <ul>{renderLinksRecursively(link.links)}</ul>
//         </li>
//       );
//     } else {
//       return <li key={link.href}><a href={link.href}>{link.title}</a></li>;
//     }
//   });
// }