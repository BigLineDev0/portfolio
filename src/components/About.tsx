import Title from "./Title"
import img from '../assets/img.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Front-End",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Back-End",
        description: "Je maitrise les bases du développement backend pour créer des APIS robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateurs attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    }
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="à Propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
        <img src={img} alt="" className="w-96 object-cover rounded-xl" />
        </div>
        <div className="md:ml-4 space-y-4">
            {
                aboutSections.map((section) => (
                    <div key={section.id} 
                        className="flex flex-col md:flex-row items-center bg-base-100 md:w-96 rounded-xl shadow-xl p-5">
                       <div className="mb-2 md:mb-0">
                        {section.icon}
                       </div>
                       <div className="text-center md:text-left ml-4">
                            <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                            <p className="text-sm">{section.description}</p>
                       </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default About
