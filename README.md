# Knokd Docs

Welcome to Knokd documentation!

The Knokd Docs are built on top of [Protocol Tailwind UI](https://tailwindui.com/templates/protocol). In this Readme you can learn about:

1. [Limits of the information architecture](#information-architecture)
1. [Making changes to docs.knokd.ca](#editing-the-docs)
1. [Using screenshots](#using-screenshots)
1. [Running the docs app in a development environment](#protocol-template)

## Information Architecture

At this time, nested URLs **are** supported (e.g. `docs.knokd.com/welcome-to-knokd/benefits`), but the **sidebar navigation only supports two levels**. That is, the sidebar supports:

`Section Heading > Document > Sub-sections` , where `Section Heading` has no content, it is merely a heading. The page URL is composed of `/section-heading/document#sub-section`.

For example:

```
Welcome to Knokd
|_ # Benefits
  |_ ## Notes
  |_ ## Properties
  |_ ## Libraries
|_ # How Knokd works
  |_ ...
  |_ ...
Realtor Cooperation Policy
|_
  |_
  ...
```

The lowest level, e.g. "Notes" is a section on the Benefits page, not it's own page.

## Editing the docs

Knokd docs can be edited directly in GitHub.

You will find all Knokd docs stored in the `/src/app/` folder. This application generates a static site based on the all the instances of `page.mdx` found in the subfolders of `/src/app/`.


### To make a change on the live site

1. Navigate to the `/src/app/` folder in GitHub.
1. Click into the section that contains your document, e.g. `/realtor-cooperation-policy`
1. Click the document's corresponding title, e.g.`/types-of-listings` 
1. Click to open the `page.mdx` file inside that folder.
For example: The GitHub file at `/src/app/realtor-cooperation-policy/types-of-listings/page.mdx` corresponds to the public URL `docs.knokd.com/welcome-to-knokd/benefits`. 
1. Click the 'pencil' **edit** button.
1. Make your changes in the `page.mdx` file.
1. Click **Commit changes...**.

**With the modal that pops open, follow these best practices to make your commit:**

1. **Commit message** – pretend you're finishing the sentence "This commit will...", e.g. "Add a legal disclaimer to the pricing page.". Say *what* you're doing not *how* you're doing it (the commit history shows the *how*). 
1. **Extended description** – (optional), this is a secondary message if you feel further explanation is helpful.
1. **Commit Email** - Preferrably, select your `@knokd.com` address unless you're a third-party helper.
1. **Important**!
  - Do **NOT** select "Commit directly to the main branch" unless you are positive this change is safe to make and does not require a review by anyone. This option skips the pull request review process.
  - In general, select **Create a new branch for this commit and start a pull request**. 
  - (optional) rename the propsed branch name for the pull request. 
  - Click **Propose changes**.

**To create the pull request:**

- You can "mention" co-workers you would like to have review, or make aware of, your changes by typing the `@` key to see a list within your organization. If you know their GitHub handle, you can type that in, e.g. `@andrewpaliga`.
- **Add a description** of your changes, give rationale if it's a significant change contentious topic.
- The description box supports markdown syntax, same as the `page.mdx` files, or you can use the rich text editor option to format your pull request description.
- When satisfied with your work, click **Create pull request**. 

Later, when a pull request is accepted and "Merged", it will become part of the live code base, and Vercel will automatically re-build and re-deploy the site in about 2 minutes. 

### Using Screenshots

I made a custom component to handle screenshots. It has two implementations - one for desktop and one for mobile. Use the 'mobile flag' to limit the width of the image container. This is recommended if the source image has a narrow format, e.g. from a mobile screen capture. 

To include a screenshot in a doc page:
1. Place all screenshots in the `/public/images/screenshots/` folder, or within a well-named subfolder there.
1. At the top of the page.mdx, make sure to import the Screenshot component with:
```
import { Screenshot } from '@/components/Screenshot'
```
1. In the content of your `page.mdx`, open a `<Screenshot ` component, include an image `src` and `alt` attributes before the closing `/>` tag. 

**Desktop screenshots:**

```
<Screenshot 
  src="/images/screenshots/welcome-to-knokd/welcome-screen-overlay.jpg"
  alt="Showcasing both the deskptop and mobile view of Knokd Listings page"
/>
```

![](/readme-images/desktop-example.png)

**Mobile screenshots:**
Add the flag / attribute `mobile={true}` to invoke the limited width (380px)

```
<Screenshot 
  mobile={true}
  src="/images/screenshots/welcome-to-knokd/narrow-image.png"
  alt="Testing a mobile images" />
```

![](/readme-images/mobile-example.png)

## Protocol Template

**This section of the readme is for people with development environments set up. It is not required to make edits to the documentation.**

Protocol is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

### Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

### Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/mdx/search.mjs` file.

### License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

### Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/) - the official Algolia Autocomplete documentation
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - the official FlexSearch documentation
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - the official Zustand documentation
