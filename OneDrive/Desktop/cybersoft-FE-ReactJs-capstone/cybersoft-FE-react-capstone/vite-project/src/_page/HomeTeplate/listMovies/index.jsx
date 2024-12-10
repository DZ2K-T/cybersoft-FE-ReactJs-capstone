import { useEffect } from "react";
import Movie from "./Movie";
import { fetchListMovie } from "./duck/reducer";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function ListMovie() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.listMovies);

  useEffect(() => {
    dispatch(fetchListMovie());
  }, [dispatch]);

  const renderListMovie = () => {
    const { data } = props;
    if (data && data.length > 0) {
      return data.map((movie) => (
        <div
          key={movie.maPhim}
          className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <Movie movie={movie} />
        </div>
      ));
    }
    return <p className="text-center text-gray-500">No movies available.</p>;
  };

  return (
    <div className="container mx-auto p-5">
      <Header />
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Danh Sách Phim
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {renderListMovie()}
      </div>
      <Footer />
    </div>
  );
}
