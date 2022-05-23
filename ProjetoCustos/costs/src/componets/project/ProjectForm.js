import { useEffect, useState } from "react";
import Input from "../form/Input";
import style from "./ProjectForm.module.css";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [project, setProject] = useState(projectData || {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: "GET",
      headers: {
        "Contet-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
  }, []);
  // o setCategories é usado no fetch pois e ele quem altera os valores das option apagando o adicionando

  const submit = (e) => {
    e.preventDefault();
    console.log(project)
    handleSubmit(project);
    //handleSubmit é um metodo dinamico passado por prop (no caso o createPost "ele vira o createPost")
  };
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
        //entra no objeto do input select e vai no index = indice do array do select e busca o texto
        //se errar o options ta fudido
      },
    })
    //seria na verdade o 'handleSelect'
  }
  return (
    <form onSubmit={submit} className={style.form}>
      {/* onSubmit={submit} passando a função que vai ser executada */}
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="insira o nome do projeto"
        handleOnChange={handleChange}
        // handleOnChange é uma prop do input
        value ={project.name }
      />
      <div>
        <Input
          type="number"
          text="orçamento do projeto"
          name="budget"
          placeholder="insira o orçamento total"
          handleOnChange={handleChange}
          value ={project.budget}
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          option={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : "erro"}
        />
      </div>
      <SubmitButton text={btnText} />
      {/* <div>
        <input type="submit" value="criar projeto" />
      </div> */}
    </form>
  );
};

export default ProjectForm;
