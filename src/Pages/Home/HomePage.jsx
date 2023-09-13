import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";




const HomePage = () => {
    // useEffect(()=>{
    //     fetch("http://localhost:3001/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data); // Check the data in the browser console
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
      
    // },[])
  return (
    <>
      <div className="flex w-full">
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td className="w-1/4 text-center mt-14">
                <img
                  className="mx-auto h-16 w-auto rounded-lg mb-12"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZu9YYxGZL8zDlqs6Nd3ifIFrOrk2AD9upvffkzxF38w&s"
                  alt="Your Company"
                />
              </td>
              <td className="w-3/4">
                <Link
                  to="overview"
                  className="block shadow-xl p-2 bg-red-200 text-sm font-sans rounded-lg mb-4"
                >
                  <span className="material-symbols-outlined">widgets</span>{" "}
                  Overview
                </Link>
                <Link
                  to="courses"
                  className="block shadow-xl p-2 bg-gray-200 text-sm font-sans rounded-lg"
                >
                  <span className="material-symbols-outlined w-6 h-6">
                    music_note
                  </span>{" "}
                  Courses
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="h-full ml-10 bg-slate-50 pl-9 w-11/12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomePage;
