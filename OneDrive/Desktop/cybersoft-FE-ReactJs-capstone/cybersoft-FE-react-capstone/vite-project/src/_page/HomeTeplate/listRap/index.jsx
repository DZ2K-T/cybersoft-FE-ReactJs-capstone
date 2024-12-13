import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemas } from "./duck/reducer";

const Index = () => {
  const dispatch = useDispatch();

  const { cinemasData, loading, error } = useSelector((state) => state.cinemaSlice);

  useEffect(() => {
    dispatch(fetchCinemas());
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh Sách Hệ Thống Rạp</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cinemasData && cinemasData.length > 0 ? (
          cinemasData.map((cinema) => (
            <div
              key={cinema.maHeThongRap} 
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={cinema.logo}
                alt={cinema.tenHeThongRap}
                className="w-20 h-20 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{cinema.tenHeThongRap}</h2>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Không có rạp chiếu phim nào.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
