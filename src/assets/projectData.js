import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";

const projectData = {
  project: [
    {
      title: "World GDP",
      description: [
        "Created 'World-GDP,' a React application featuring interactive GDP charts for various countries, utilizing Apex Charts for data visualization.",
        "Implemented an engaging map interface using SVG files, enabling users to select countries and dynamically display GDP data.",
        "Developed zoom and pan functionalities for the map, enhancing user experience and providing seamless navigation.",
        "Incorporated charts to facilitate easy comparison of GDP values among neighboring countries, demonstrating a strong focus on user-centric design.",
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
        "Integrated routing to enable smooth navigation between the home and cart pages, enhancing overall usability.",
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
