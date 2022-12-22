const About = () => {
  const Skills = [
    {
      id: 1,
      skill: "MERN stack(MongoDb, ExpressJS, ReactJS, NodeJS)",
    },
    {
      id: 2,
      skill: "MongoDB, MySQL, PostgreSQL",
    },
    {
      id: 3,
      skill: "RESTfull API",
    },
    {
      id: 4,
      skill: "Sequelize (ORM for Relational DBMS)",
    },
    {
      id: 5,
      skill: "Sequelize CLI ( for Migrations)",
    },
    {
      id: 6,
      skill:
        "Passport (authentication middleware, include social networks authentication)",
    },
    {
      id: 7,
      skill: "JWT (token-based authentication for RESTful API)",
    },
    {
      id: 8,
      skill:
        "CSS frameworks such as SASS, Tailwind, Bootstrap Styled Component etc.",
    },
  ];
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 pt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-6 md:mt-10">
          Experienced software engineer that is passionate about writing a
          scalable and well-structured code. Detail-oriented, organized and
          meticulous employee. A fast learner, enthusiastic team player ready to
          contribute to company success
        </p>

        <br />

        <p className="text-2xl mb-2 md:mb-5 ">My knowledge and skills:</p>
        <ul className="list-disc list-inside">
          {Skills.map(({ id, skill }) => (
            <li key={id}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
