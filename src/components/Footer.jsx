import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlus,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/hakeem-durogbola",
      style: "ml-4 mr-2 cursor-pointer text-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://Github.com/keemzyddev",
      style: "mx-2 cursor-pointer text-gray-500",
    },
    {
      id: 3,
      child: (
        <>
          <FaGooglePlus size={20} />
        </>
      ),
      href: "mailto:hakeemdurogbola.gmail.com",
      style: "mx-2 cursor-pointer text-red-700",
    },
    {
      id: 4,
      child: (
        <>
          <FaFacebook size={20} />
        </>
      ),
      href: "https://www.facebook.com/100001822841266/",
      style: "mx-2 cursor-pointer text-blue-700",
    },
    {
      id: 5,
      child: (
        <>
          <FaTwitter size={20} />
        </>
      ),
      href: "https://mobile.twitter.com/iamkeemzy4shizy",
      style: "mx-2 cursor-pointer text-blue-500",
    },
    {
      id: 6,
      child: (
        <>
          <FaInstagram size={20} />
        </>
      ),
      href: "https://www.instagram.com/iamkeemzy4shizy/",
      style: "mr-4 ml-2 cursor-pointer text-pink-700",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-black via-black to-gray-900 p-4 text-white w-full">
      <div className="flex items-center justify-between m-auto">
        <h1 className=" font-signature ml-2">KEEMZYDDEV</h1>
        <ul className="flex ">
          {links.map(({ id, child, href, download, style }) => (
            <li key={id} className={style}>
              <a href={href} className="" download={download} target="_blank">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
