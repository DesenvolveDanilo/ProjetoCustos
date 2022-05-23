import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import ProjectCard from "../project/ProjectCard";
import LinkButton from "../layout/LinkButton";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  //enquanto o estado do remove loading for = false, ele aparece na tela. o setRemoveLoading vai fazer ele fica
  //true
  const [projectMessage, setProjectMessage] = useState('');
  //se tiver um "  " espaço ja conta como não vazio e seta  mensagem

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }
  useEffect(() => {
    setTimeout(
      () => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
        .then((resposta) => resposta.json())
        .then((data) => {
          setProjects(data)
          //puxando os dados do meu projeto
          setRemoveLoading(true)
        })
        .catch((erro) => console.log(erro))}, 1000);
  }, []);
  //ou seja if location = true retorna a messagem contida nela

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        //setando a nova renderização do meu objeto projects para exibir somente com 'id' diferente do deletado sem necessidade de dar um reload na página
        setProjectMessage('projeto removido com sucesso!')
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/NewProject" text="criar projeto" />
      </div>
      {message && <Message type="success" msg={message}  />}
      {/* se message= true então retorne a messagem contida, sempre sera sucesso pois ela ja passa pelo if de ter message=true */}
      {projectMessage && <Message type="success" msg={projectMessage} />}


      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
              //unico diferente pois puxa o 'id' de la do card enão do project do 'GET' daqui
            />
          ))}
      </Container>
      {!removeLoading && <Loading />}
      {/* //enquanto Loading for diferente de true apareça */}
      {removeLoading && projects.length === 0 && (
        <p>{(window.alert = "não há projetos cadastrados")}</p>
      )}
    </div>
  );
};

export default Projects;


