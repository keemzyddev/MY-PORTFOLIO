import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javaScript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javaScript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NODE JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: graphql,
      title: "GRAPHQL",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="pt-5">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            This are the technologies that I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
