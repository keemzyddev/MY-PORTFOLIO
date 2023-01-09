import React from "react";
import logistics from "../assets/portfolio/logistics.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import eCommerce from "../assets/portfolio/eCommerce.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import projectMgt from "../assets/portfolio/projectMgt.jpg";
import chatWidget from "../assets/portfolio/chatWidget.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: logistics,
      viewLink: "https://vimeo.com/787310192/8a671a6847",
      codeLink: "https://github.com/keemzyddev/logistic-app-landing-page",
    },
    {
      id: 2,
      src: eCommerce,
      viewLink: eCommerce,
      codeLink: "https://github.com/keemzyddev/eCommerce",
    },
    {
      id: 3,
      src: installNode,
      viewLink: installNode,
      codeLink: "https://github.com/keemzyddev/userMgtSysyem",
    },
    {
      id: 4,
      src: reactParallax,
      viewLink: "https://google.com",
      codeLink: "https://linkedIn.com",
    },
    {
      id: 5,
      src: projectMgt,
      viewLink: projectMgt,
      codeLink: "https://github.com/keemzyddev/projectMgtWithGraphQl",
    },
    {
      id: 6,
      src: chatWidget,
      viewLink: chatWidget,
      codeLink: "https://github.com/keemzyddev/react-chat-widget-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 pt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-3">
          {portfolios.map(({ id, src, viewLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                  <a href={viewLink} target="_blank">
                    View
                  </a>
                </button>
                <button className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeLink} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
