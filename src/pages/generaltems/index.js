import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import FooterBanner from "../../components/footer-banner";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product/product-card";
import SingleBanner from "../../components/singleBanner";
import { fetchMockData } from "../../redux/reducer";

const GeneralItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const Items = useSelector((state) => state.mockData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMockData());
  }, [dispatch]);

  const records = Items.generalItems.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(Items.generalItems.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div>
      <Navbar reloadnavbar={false} />
      <SingleBanner
        bannerimage="https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        heading="General Items from API"
      />
      {Items.loading && <div>loading...</div>}
      {!Items.loading && Items.error ? <div>Error : {Items.error}</div> : null}

      {!Items.loading && Items.generalItems.length
        ? records.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row-reverse",
              }}
            >
              <ProductCard data={item} key={item.id} />{" "}
            </div>
          ))
        : null}

      {!Items.loading && Items.generalItems.length ? (
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a href="#action" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            {numbers.map((number, index) => (
              <li
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
                key={index}
              >
                <a
                  href="#action"
                  className="page-link"
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#action" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default GeneralItems;
