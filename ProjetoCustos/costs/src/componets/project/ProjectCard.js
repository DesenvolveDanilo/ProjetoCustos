import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  function remove(e) {
    e.preventDefault();
    handleRemove(id);
  }
  // ou seja o id do card
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R$ {budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>

      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil />
          editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
