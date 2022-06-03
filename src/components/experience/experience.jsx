import "./experience.css";
import Qualifications from "../qualifications/qualifications";
import Showcase from "../showcase/showcase";

function Experience() {
  return (
    <>
    <Showcase />
   
    <div id="experience" className="container experience-container">
       
      <Qualifications />
    </div>

    </>
  );
}
export default Experience;
