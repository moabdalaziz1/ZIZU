import "./Skills.scss";
import { FaBrain } from "react-icons/fa";
import { SectionTitle, Skill } from "../../components/index";

import skills from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="container skills py-5 main" id="skills">
      <SectionTitle title="Technologies" icon={<FaBrain />} />
      <div className="skills-items">
        {skills.map((item) => (
          <Skill key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
