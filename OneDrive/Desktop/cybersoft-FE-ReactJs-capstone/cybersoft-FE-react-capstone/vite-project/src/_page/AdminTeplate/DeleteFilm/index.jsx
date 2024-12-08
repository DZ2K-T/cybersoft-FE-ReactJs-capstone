import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteFilm } from "../DeleteFilm/duck/reducer";

const DeleteFilm = ({ filmId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa phim này?");
    if (confirmDelete) {
      dispatch(deleteFilm(filmId)); // Gọi hành động xóa
    }
  };

  return (
    <button onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteFilm;
