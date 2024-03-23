import LinkedIn, {
  GitHub,
  GMail,
  Telegram,
  Resume,
  LeetCode,
} from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/My_Resume.pdf";
const contactInfo = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/surakattula-goutham-882454227/",
    icon: <LinkedIn />,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/Goutham-003",
    icon: <GitHub />,
  },
  {
    id: 3,
    name: "Mail",
    link: "mailto:sgouthamgiridhar@gmail.com",
    icon: <GMail />,
  },
  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/goutham003/",
    icon: <LeetCode />,
  },
  {
    id: 5,
    name: "Resume",
    link: ResumeLink,
    icon: <Resume />,
    download: true,
  },
];

export default contactInfo;
