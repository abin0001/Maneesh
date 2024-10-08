import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import AUTH from '../../assets/AUTH.jpeg';
import Blog from "../../assets/BLOG.jpeg";
import ECOM from "../../assets/ECOM.jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ECOM}
          link11="https://github.com/Maneesh63/Ecommerce-Website-With-Django"
          h3="E Cart"
          p="Full Stack Ecom site"
        />
        <ProjectCard
          src={Blog}
          link1="https://github.com/Maneesh63/Djnago-Blog-Website"
          h3="Blogee"
          p="Full Stack Blog Site"
        />
        <ProjectCard
          src={AUTH}
          link1="https://github.com/Maneesh63/Authentication-system-with-Django"
          h3="PyAuth"
          p="Python Auth App"
        />
        <ProjectCard
          src={fitLift}
          link1="https://github.com/"
          h3="Project"
          p="Upcoming"
        />
          <ProjectCard
          src={freshBurger}
          link1="https://github.com/"
          h3="Project"
          p="Upcoming"
        />
          <ProjectCard
          src={fitLift}
          link1="https://github.com/"
          h3="Project"
          p="Upcoming"
        />
          <ProjectCard
          src={freshBurger}
          link1="https://github.com/"
          h3="Project"
          p="Upcoming"
        />
          <ProjectCard
          src={fitLift}
          link1="https://github.com/"
          h3="Project"
          p="Upcoming"
        />


      </div>
    </section>
  );
}

export default Projects;
