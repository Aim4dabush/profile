import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: "magic-8-ball",
    title: "Magic 8 Ball",
    description:
      "Remember when you wanted the answers to the meaning of life? All you had to do was shake your Magic 8 Ball and problem solved.",
    image: process.env.PUBLIC_URL + "/images/magic8ball_empty.png",
    siteLink: "https://aim4dabush.github.io/magic8ball/",
    gitHub: "https://github.com/Aim4dabush/magic8ball",
    languages: [
      {
        id: 1,
        icon: faCss3Alt,
      },
      {
        id: 2,
        icon: faHtml5,
      },
      {
        id: 3,
        icon: faJsSquare,
      },
      {
        id: 4,
        icon: faBootstrap,
      },
    ],
  },
  {
    id: "single-price-grid",
    title: "Single Price Grid",
    description:
      "A landing page from Frontend Mentor website. The assignment was to try to copy the picture as much as possible.",
    image: process.env.PUBLIC_URL + "/images/single_price_grid.png",
    siteLink: "https://aim4dabush.github.io/single-price-grid/",
    gitHub: "https://github.com/Aim4dabush/single-price-grid",
    languages: [
      {
        id: 1,
        icon: faCss3Alt,
      },
      {
        id: 2,
        icon: faHtml5,
      },
      {
        id: 3,
        icon: faBootstrap,
      },
    ],
  },
];

export default projects;
