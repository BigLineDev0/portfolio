import Title from "./Title"

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgREACT from "../assets/techno/react.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNODE from "../assets/techno/node-js.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgNEXT from "../assets/techno/next-js.webp";
import imgLARAVEL from "../assets/techno/laravel.png";
import imgPHP from "../assets/techno/php.png";
import imgMySQL from "../assets/techno/mysql.png";

import google from "../assets/companies/google.png";
import amazon from "../assets/companies/amazon.png";
import meta from "../assets/companies/meta.webp";

const skills = [
    {id: 1, name: "HTML", image: imgHTML},
    {id: 2, name: "CSS", image: imgCSS},
    {id: 3, name: "JavaScript", image: imgJS},
    {id: 4, name: "React", image: imgREACT},
    {id: 5, name: "Node.js", image: imgNODE},
    {id: 6, name: "Tailwind CSS", image: imgTAILWIND},
    {id: 7, name: "TypeScript", image: imgTYPE},
    {id: 8, name: "Next.js", image: imgNEXT},
    {id: 9, name: "PHP", image: imgPHP},
    {id: 10, name: "Laravel", image: imgLARAVEL},
    {id: 11, name: "MySQL", image: imgMySQL},
    {id: 12, name: "Prisma", image: imgPRISMA},
];



const experiences = [
  {
      id: 1,
      role: "Software Engineer",
      company: "Google",
      period: "Sep 2022 - Présent",
      description: [
          "Développement de nouvelles fonctionnalités pour Google Maps.",
          "Optimisation des performances de l'application.",
      ],
      image: google,
  },
  {
      id: 2,
      role: "Fullstack Developer",
      company: "Meta",
      period: "Jan 2021 - Août 2022",
      description: [
          "Création d'une plateforme interne de collaboration pour les équipes.",
          "Mise en place d'une architecture scalable et optimisée.",
      ],
      image: meta,
  },
  {
      id: 3,
      role: "Frontend Developer",
      company: "Amazon",
      period: "Mai 2019 - Déc 2020",
      description: [
          "Développement d'une interface utilisateur pour Amazon Web Services.",
          "Implémentation des tests unitaires et E2E.",
      ],
      image: amazon,
  },
];



const Experience = () => {
  return (
    <div id="Experience">
      <Title title="Expériences"/>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/2 mt-4 md:mt-0">
            {
                skills.map((skill) => (
                    <div key={skill.id} className="flex flex-col justify-center items-center">
                        <div className="w-24 h-24 rounded-full p-2 border-2 border-accent">
                            <img src={skill.image} alt={skill.name} className="rounded-full w-full h-full object-cover" />
                        </div>
                        <span className="mt-2 text-sm">
                            {skill.name}
                        </span>
                    </div>
                ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
              {
                experiences.map((experience) => (
                  <div key={experience.id} className="flex flex-col bg-base-200 rounded-xl p-5 shadow-lg">
                     <div className="flex items-center">
                        <img src={experience.image} alt={experience.company} className="object-cover w-10 h-10" />
                        <div className="ml-4">
                          <h1 className="text-xl text-accent font-bold">
                            {experience.role}, {experience.company}
                          </h1>
                          <span className="text-sm">{experience.period}</span>
                        </div>
                     </div>
                     <ul className="list-disc ml-16 mt-4">
                          {
                          experience.description.map((desc, index) => (
                            <li key={index}>
                                {desc}
                            </li>
                          ))}
                     </ul>
                  </div>
                  
                ))
              }
        </div>
      </div>
    </div>
  )
}

export default Experience
