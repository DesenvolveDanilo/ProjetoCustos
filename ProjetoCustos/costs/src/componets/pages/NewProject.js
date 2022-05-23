import { useNavigate} from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project) {
    //initialize cost and service
    //custos e serviços postados no banco de dados
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} });
      })
      .catch((errozinho) => {
        console.log(errozinho);
      });
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p> Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="criar projeto" />
      {/* mandando um metodo por meio de props */}
    </div>
  );
};

export default NewProject;
