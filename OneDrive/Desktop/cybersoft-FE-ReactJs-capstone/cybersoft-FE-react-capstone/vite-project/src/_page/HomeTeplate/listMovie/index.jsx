import { useEffect } from "react";
import Movie from "./Movie";
import { fetchListMovie } from "./duck/reducer";
import { useSelector, useDispatch } from "react-redux";

const ListMovie = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.listMovieReducerMovie);

  useEffect(() => {
    dispatch(fetchListMovie());
  }, [dispatch]);

  const renderListMovie = () => {
    const { data } = props;
    if (data && data.length > 0) {
      return data.slice(0, 8).map((movie) => <Movie key={movie.maPhim} movie={movie} />);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="title items-center">
        <h4 className="text-xl font-semibold my-3">ListMovie</h4>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">{renderListMovie()}</div>
    </div>
  );
};

export default ListMovie;
