import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
  faSass,
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
    mobile: "Any Width",
  },
  {
    id: "single-price-grid",
    title: "Single Price Grid",
    description:
      "A landing page from Frontend Mentor website. The assignment was to try to copy the UI as much as possible.",
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
    mobile: "None",
  },
  {
    id: "first-presentation-landing-page",
    title: "First Presentation",
    description:
      "A landing page from wow-professions.com. The assignment is to copy the UI but also use the star method to present to co-workers. My mvp was to do everything but ads, images, and hover effects. I was able to complete the mvp. I also was able to do everything outside of my mvp except the ads.",
    image:
      process.env.PUBLIC_URL + "/images/first_presentation_landing_page.png",
    siteLink: "https://aim4dabush.github.io/first-presentation-landing-page/",
    gitHub: "https://github.com/Aim4dabush/first-presentation-landing-page",
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
        icon: faReact,
      },
    ],
    mobile: "None",
  },
  {
    id: "intro-sign-up-form",
    title: "Intro Sign Up Form",
    description:
      "A project from Frontend Mentor website. The challenge is to copy the UI design and also have form validation for all inputs.",
    image: process.env.PUBLIC_URL + "/images/intro_sign_up_form.png",
    siteLink: "https://aim4dabush.github.io/intro-sign-up-form/",
    gitHub: "https://github.com/Aim4dabush/intro-sign-up-form",
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
        icon: faReact,
      },
    ],
    mobile: "Max-Width 914px",
  },
  {
    id: "pricing-component-toggle-master",
    title: "Pricing Component Toggle Master",
    description:
      "A project from Frontend Mentor website. The challenge is to copy the UI, desktop and mobile, and have the toggle button show annual price and monthly price.",
    image: process.env.PUBLIC_URL + "/images/toggle_master.png",
    siteLink: "https://aim4dabush.github.io/pricing-component-toggle-master/",
    gitHub: "https://github.com/Aim4dabush/pricing-component-toggle-master",
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
        icon: faReact,
      },
      {
        id: 5,
        icon: faSass,
      },
    ],
    mobile: "Max-Width 375px",
  },
];

export default projects;
