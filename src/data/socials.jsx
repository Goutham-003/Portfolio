import { FaLinkedin, FaGithub, HiOutlineMail, BsPersonLinesFill } from "./icons";

const socials = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/surakattula-goutham-882454227/",
        icon: <FaLinkedin size={22} />,
        style: "hover:bg-white rounded-tr-md hover:text-[#0B67C2]"
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/Goutham-003",
        icon: <FaGithub size={22} />,
        style: "hover:bg-black hover:text-[#E6EDF0]"

    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:sgouthamgiridhar@gmail.com",
        icon: <HiOutlineMail size={22} />,
        style: "hover:bg-white hover:text-[#EB4334]"

    },
    {
        id: 4,
        name: "Resume",
        link: "/My_Resume.pdf",
        icon: <BsPersonLinesFill size={22} />,
        style: "hover:bg-black rounded-br-md hover:text-[#5EEAC5]",
        download: true
    }
];

export default socials;