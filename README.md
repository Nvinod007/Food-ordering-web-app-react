# ReactExploration

# I am using Parcel here, in place i can use Vite or webpack
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
- Diagnostics - Error view, metrics
- Error Handling
- HTTPS
- Tree Shaking - removes unused code
- Different dev and prod builds

# This will work in the last 2 versions of any browser.
- to change and make different configurations, make changes in **browsers list** in "package.json"

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
-  * - Copyright
-  * - Links
-  * - Address
-  * - Contact

# React Hooks
- Normal Js utility functions
- useState()
- useEffect() 


# Cors Error
- you will face a Cors error while running in your local
- it is because we are using swiggy API which is of a different domain
- to solve this you can do const data = await fetch(CORSS_PROXY+SWIGGY_API); in body component
- or you can install the Cors plugin and turn on Cors that will work.

**Two types of Routing in web apps**
- Client-side routing
- Server-side routing
- If we make any network call to route then we call that routing as server side routing.
