--- Server vs client side rendering --------------------------------
next js docks has a table
"use server side until you need a client side

'use client' - can make a component client side render

server side rendering 


client side rendering
    use state, or hooks

app/"name" = url.com/name
    page.js under "name" will be rendered


--- data fetching --------------------------------
server side rendering (SSR) - fetched at every rerender
static side generation (SSG) - [default] fetch and cache. good for content that doesn't change often
incremental static generation (ISG) - dynamic content in static sites. Generate at render, refresh every set time


--- backend --------------------------------
keep backend in api folder
use route.js in folder. 
Ex: app/user/page.js = frontend page rendering
    api/user/route.js = backend request endpoints


--- improve SEO --------------------------------
static metadata
dynamic metadata

--- directory --------------------------------
app - for all pages
components - for reusable components
public - for assets (pictures, images, etc)
styles - for global styles
