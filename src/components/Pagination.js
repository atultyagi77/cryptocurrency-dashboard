import React, { useContext } from "react";
import paginationArrow from "../assets/pagination-arrow-sign.svg";
import { CryptoContext } from "../context/CryptoContext";

const Pagination = () => {
  const { cryptoData, totalPages, page, setPage, perPage } = useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page < TotalNumber) {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(1);
    } else {
      setPage(page - 3);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-end text-sm">
          <li className="flex items-center">
            <button className="outline-0 hover:text-cyan w-8" onClick={prev} disabled={page === 1}>
              <img
                className="w-full h-auto rotate-180"
                src={paginationArrow}
                alt="left"
              />
            </button>
          </li>

          {page > 3 && (
            <li>
              <button
                onClick={multiStepPrev}
                className="outline-0 hover:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                ...
              </button>
            </li>
          )}

          {page > 1 && (
            <li>
              <button
                onClick={prev}
                className="outline-0 hover:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page - 1}
              </button>
            </li>
          )}

          <li>
            <button
              disabled
              className="outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-blue-300 text-black mx-1.5"
            >
              {page}
            </button>
          </li>

          {page < TotalNumber && (
            <li>
              <button
                onClick={next}
                className="outline-0 hover:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page + 1}
              </button>
            </li>
          )}

          {page < TotalNumber - 1 && (
            <li>
              <button
                onClick={multiStepNext}
                className="outline-0 hover:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                ...
              </button>
            </li>
          )}

          {page !== TotalNumber && (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="outline-0 hover:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {TotalNumber}
              </button>
            </li>
          )}

          <li>
            <button className="outline-0 hover:text-cyan w-8" onClick={next} disabled={page === TotalNumber}>
              <img
                className="w-full h-auto"
                src={paginationArrow}
                alt="right"
              />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
