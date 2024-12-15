import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteFilm } from "../DeleteFilm/duck/reducer";
import { useState } from "react";

const DeleteFilm = ({ filmId }) => {
  const dispatch = useDispatch();
  const [films, setFilms] = useState();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa phim này?");
    if (confirmDelete) {
      setFilms(films.filter((film) => film.id !== filmId));
      dispatch(deleteFilm(filmId));
    }
    console.log(filmId);
  };

  return (
    <button onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteFilm;
