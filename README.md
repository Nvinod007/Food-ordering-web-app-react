# ReactExploration

# I am using parcel here, inplace i can use vite or webpack
# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm written in C++
- Faster Builds by caching
- Image Optimization
- Minification
- Bundling
- Compressing
- Code splitting
- Differential Bundling - Support old browsers
- Diagnostis - Error view, metrics
- Error Handling
- HTTPs
- Tree Shaking - remmoves unused code
- Different dev and prod builds

# This will work in last 2 version of any browser.
- inorder to change and make different configuration, make changes in **browserslist** in ""package.json""

# Food ordering APP

- * Header
- * - Logo
-  * - Nav Items
-  * Body
-  * - Search
-  * - Restaurant card container
-  *  - Restuarant card
-  *   - IMG
-  *   - Name of res, star rating, cuisine
-  * Footer
-  * - Copy right
-  * - Links
-  * - Address
-  * - Contact

# React Hooks
- Normal Js utility functions
- useState()
- useEffect() 


# Cors Error
- you will face cors error while running in your local
- it is because we are using swiggy api which is of diffenrent domain
- to solve this you can do const data = await fetch(CORSS_PROXY+SWIGGY_API); in body comoponent
- or you can install cors pligin and turn on cors that will work.

Two types of Routing in web apps
- Client side routing
- Server side routing
- If we make any network call to route then we call that routing as server side routing.