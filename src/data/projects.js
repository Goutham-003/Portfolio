import spice_delight from "../assets/Projects/spice_delight.jpg";
import Climate_App from "../assets/Projects/climate_app.png";
import user_auth from "../assets/Projects/user_auth.png";
import GameMaster from "../assets/Projects/GameMaster.png";
import PortFolio from "../assets/Projects/portfolio.png";
import SIMON_GAME from "../assets/Projects/SIMON_GAME.png";
import TODO_APP from "../assets/Projects/TODO_APP.png";

const projects = [
  {
    img: GameMaster,
    name: "GameMaster",
    demo: "https://cautious-tam-goat.cyclic.app/",
    code: "https://github.com/Goutham-003/GameMaster",
    description:
      "Gaming website featuring a diverse game collection, consolidated leaderboards,and profile customization using NodeJS, Express JS, MongoDB, HTML, CSS, and JS",
    style: {
      shadow: "shadow-[#3498AB]",
      cover: "from-[#3498AB]",
      display: " hidden group-hover:flex",
    },
  },
  {
    img: Climate_App,
    name: "Climate App",
    demo: "https://climate-app-blue.vercel.app/",
    code: "https://github.com/Goutham-003/Climate-App",
    description:
      " Built weather app (Climate App) with React for real-time weather data using OpenWeatherMap API. Delivers fast, responsive UI with accurate temperature, humidity, wind speed & more for global locations",
    style: {
      shadow: "shadow-[#FB923C]",
      cover: "from-[#FB923C]",
      display: " hidden group-hover:flex",
    },
  },
  {
    img: PortFolio,
    name: "PortFolio",
    demo: "https://kaleidoscopic-clafoutis-c358b9.netlify.app/",
    code: "https://github.com/Goutham-003/Portfolio",
    description:
      "My Personal portfolio built with React Js, Tailwind CSS and Vite Js",
    style: {
      shadow: "shadow-[#23CEEE]",
      cover: "from-[#23CEEE]",
      display: " hidden group-hover:flex",
    },
  },
  {
    img: spice_delight,
    name: "spice_delight",
    demo: " https://github.com/Goutham-003/The-Spice-Delight",
    code: " https://github.com/Goutham-003/The-Spice-Delight",
    description:
      " Developed a bill management webpage with HTML, CSS, and PHP, adhering to software development best practices to deliver clean, maintainable, and efficient code.",
    style: {
      shadow: "shadow-[#F8FAFC]",
      cover: "from-[#F8FAFC]",
      display: " hidden group-hover:flex",
    },
  },
  {
    img: user_auth,
    name: "User Authentication Page",
    demo: " https://github.com/Goutham-003/Java-Miniproject",
    code: " https://github.com/Goutham-003/Java-Miniproject",
    description:
      " I have madeaJava-baseddesktopapplication, enabling account creation and secure login via Java AWT and Swings. User details are stored locally with Base64 encryption",
    style: {
      shadow: "shadow-[#FFD43B]",
      cover: "from-[#FFD43B]",
      display: " hidden group-hover:flex",
    },
  }
];
export default projects;
