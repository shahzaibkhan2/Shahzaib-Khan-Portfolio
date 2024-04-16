import figma from "../assets/3D Logo.png";
import css from "../assets/cssLogo.png";
import framerMotion from "../assets/framerMotion.png";
import javascript from "../assets/javascript.png";
import redux from "../assets/redux.png";
import react from "../assets/react.jpg";

const Services_Data = [
  {
    s_no: "01",
    s_name: "Fully Functional Website",
    s_desc:
      "By using advanced JavaScript ( ECMA Script ) concepts to make website functional.",
    path: javascript,
  },
  {
    s_no: "02",
    s_name: "Fully Responsive Website",
    s_desc:
      "By Using CSS language and it's core concepts like CSS Grid and Flex Box to make responsive.",
    path: css,
  },
  {
    s_no: "03",
    s_name: "Elegant & Animated Website",
    s_desc:
      "By using advanced libries like Framer-Motion and ThreeJs to make outstanding animations and transitions.",
    path: framerMotion,
  },
  {
    s_no: "04",
    s_name: "API Integrations",
    s_desc:
      "Fetching and Itegrating APIs using advanced JavaScript concepts like Promises and Async Await.",
    path: react,
  },
  {
    s_no: "05",
    s_name: "Advanced State Management",
    s_desc: "By using Redux and Redux Toolkit for Advanced state management.",
    path: redux,
  },
  {
    s_no: "06",
    s_name: "Beautiful Web Design",
    s_desc:
      "By using Figma for Beautiful Web designs. Designing the landing pages to whole website.",
    path: figma,
  },
];

export default Services_Data;
