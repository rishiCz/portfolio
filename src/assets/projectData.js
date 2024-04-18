import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import gallery from "./gallery.png";
import apiImage from "./api.png";

const projectData = {
  project: [
    {
      title: "API Formatter",
      description: [
        "API Formatter is a web app that enables you to format and personalize your API calls",
        "Features include concatenating multiple APIs into one URL and using keys as attributes for different calls",
        "API calls adhere to best practices for optimized returns",
        "Capability to cache data based on preferences",
      ],
      image: apiImage,
      liveLink: "https://api-formatter.vercel.app/",
    },
    {
      title: "Full-Stack Gallery",
      description: [
        "This gallery web application is full stack project focusing on implementing Server-Side Components, Authentication, Role Based Routing/Protected Routes, Database, Rest API.",
        "Contains feature to add labels to an image and search images based on labels.",
        "Role Based Access allows only admin account to access /admin route where admin can add images, delete images and create labels",
      ],
      image: gallery,
      codeLink: "https://github.com/rishiCz/gallery",
      liveLink: "https://gallery-seven-pearl.vercel.app/",
    },
    {
      title: "World GDP",
      description: [
        "Created 'World-GDP,' a React application featuring interactive GDP charts for various countries, utilizing Apex Charts for data visualization.",
        "Implemented an engaging map interface using SVG files, enabling users to select countries and dynamically display GDP data.",
        "Developed zoom and pan functionalities for the map, enhancing user experience and providing seamless navigation.",
      ],
      image: p1,
      codeLink: "https://github.com/rishiCz/world-data",
      liveLink: "https://rishicz.github.io/world-data/",
    },
    {
      title: "My Bakery",
      description: [
        "Developed a dynamic bakery website using React to showcase a variety of bakery products.",
        "Designed and implemented responsive web pages ensuring a seamless user experience across various devices and browsers.",
        "Designed good architecture for state management using React Redux.",
      ],
      image: p2,
      codeLink: "https://github.com/rishiCz/bakery-app",
      liveLink: "https://rishicz.github.io/bakery-app/",
    },
    {
      title: "News Hub",
      description: [
        "Developed an Android application that displays the latest news from the news-api.",
        "Implemented features for bookmarking, saving news offline, and sharing news articles to enhance user engagement.",
        "Introduced a unique feature allowing users to create custom news templates with buttons, adding a personalized touch to the app.",
      ],
      image: p3,
      codeLink: "https://github.com/rishiCz/News-App",
      liveLink: null,
    },
  ],
};
export default projectData;
