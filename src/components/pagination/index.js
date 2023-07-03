import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComp = ({ pageSize,url }) => {

    //states
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
      }, [currentPage]);
    
      const fetchData = async () => {
        try {
            //api call
          const response = await fetch(`${url}?page=${currentPage}&size=${pageSize}`);
          const { totalPages, data } = response.data;
          setTotalPages(totalPages);
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const goToPage = (page) => {
        setCurrentPage(page);
      };
    
      const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const previousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

      const renderItems = ()=>{
        const items=[]
        for (let number = 1; number <= 3; number++) {
            items.push(
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => goToPage(number)}
              >
                {number}
              </Pagination.Item>
            );
          }
          return items;
      }

  return (
    
        <Pagination size="md">
          <Pagination.Item onClick={()=>previousPage()}>Previous</Pagination.Item>
          
          {renderItems()}
            
          <Pagination.Item onClick={()=>nextPage()}>Next</Pagination.Item>
        </Pagination>
  );
}

export default PaginationComp