# Figma Design to User Interface Task
- Task for SpiderWorks Technologies Pvt. Ltd. for frontend developer role.

# Figma Links
- [Figma Design](https://www.figma.com/design/dHaYXid9fe8ar56Ku8GVbD/sample?node-id=1-21&t=eHRVev5JIztavn9V-0)
- [Figma Prototype](https://www.figma.com/proto/dHaYXid9fe8ar56Ku8GVbD/sample?page-id=0%3A1&type=design&node-id=1-21&viewport=716%2C1253%2C0.67&t=8sfpN2ASwWhiJLYs-1&scaling=min-zoom)

# Component Architecture
- Header Section - `Header.jsx`
  - It contains main logo, navbar and join program button
- Banner - `Forum.jsx`
  - It contains the main idea of the website with a `SearchBar`
- Topics Section - `Topics`
  - It contains a title and responsive grid design containing different topics.
- Discussion Section - `Discussions.jsx`
  - It contains `SearchBar`, list of discussion cards, advertisement banners in the right.

# Development
### What's there?
- Since, the task is a prototype and we do not have complete context of the web application, so we mainly focus on achieving the given UI Design.
- Here, I have used `Tailwind CSS` library for the complete CSS, directly taking the design reference from the figma link like colors, fonts, icons, etc.
- For Animations, I have used `scrollfadein` effects to the individual components using `react-intersection-observer` library for smoother transition for better UX and when scrolling the vertical scroll is taken into account and the `ShortNavBar` is displayed as a sticky navbar as per the figma prototype.
- The web application is fully responsive where I've used media queries (from tailwindcss) whereever the UI was breaking when shrinking the screen size.

### What's not there?
- A Dynamic web application with the business logic to achieve the functionality as per the client.
- Usage of primary `react` features such as hooks (we could have used for storing the dynamic data), context API (For example, we could have used for `searchBar`) and other functionality which can be achieved when we're having complete requirement of a web application.

# Deployment
- Kudos to Vercel for their easy deployment feature.
- Please visit [here](https://spiderworks-task-kdz70z5b7-rishavs-projects.vercel.app/) to view the website as shown in the repository.


