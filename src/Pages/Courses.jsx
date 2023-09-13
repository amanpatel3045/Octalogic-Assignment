import React, { useState, useEffect } from "react";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const [status, setStatus] = useState({
    text: "Active",
    bgColor: "green"
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/courses") 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
      });
  }, []);

  function handleEdit() {
    setStatus({
      text: "Closed"
    });
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="h-full">
      <p className="text-3xl text-zinc-700/50 font-medium mt-12 mb-10">Courses</p>
      <div className="mt-10 mb-12">
        <p className="text-1xl text-zinc-700/50 font-medium">COURSE LIST</p>
        <div className="inset-y-0 right-0 text-right mr-6">
          <input
            placeholder="Search"
            className="rounded-lg pr-3 pl-3 pt-2 pb-2"
          />
        </div>
      </div>

      <table className="shadow-lg w-full bg-white pb-6 mr-12 rounded-lg">
        <thead className="">
          <tr className="border-b-2">
            <th className="pt-9 pb-4">Name</th>
            <th className="pt-9 pb-4">Description</th>
            <th className="pt-9 pb-4">Instructor</th>
            <th className="pt-9 pb-4">Instrument</th>
            <th className="pt-9 pb-4">Day Of Week</th>
            <th className="pt-9 pb-4">#Students</th>
            <th className="pt-9 pb-4">Price</th>
            <th className="pt-9 pb-4">Status</th>
            <th className="pt-9 pb-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseData.courses.map((course, index) => {
            return (
              <tr className="border-b-2" key={index}>
                <td className="text-center pb-4 ">{course.name}</td>
                <td className="text-center">{course.description}</td>
                <td className="text-center">{course.instructor}</td>
                <td className="text-center">{course.instrument}</td>
                <td className="text-center">{course.date}</td>
                <td className="text-center">{course.students}</td>
                <td className="text-center">{course.fees}</td>
                <td className="text-center">
                  <div className="">{status.text}</div>
                </td>
                <td className="text-center">
                  <div className="relative w-full lg:max-w-sm">
                    <select className="w-8 p-2.5 text-gray-500 bg-white outline-none appearance-none focus:border-indigo-600">
                      <option>**</option>
                      <option>Edit Course</option>
                      <option onClick={handleEdit}>Close Course</option>
                      <option>Archive Course</option>
                    </select>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showForm && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <form>
              {/* Your form fields go here */}
              <h2 className="text-2xl mb-4">Add Courses</h2>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Description"
                className="border rounded w-full py-2 px-3 mb-2"
              />
              <input
                type="text"
                id="name"
                placeholder="Instructor"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
              />
              <input
                type="text"
                id="name"
                placeholder="Instrument"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
              />
                            <input
                type="text"
                id="name"
                placeholder="Day Of Week"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
              />
              <input
                type="text"
                id="name"
                placeholder="Price"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
              />

              {/* Add more form fields as needed */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="mr-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className='inset-y-0 right-0 text-right mr-6 mt-32'>
        <button className='bg-red-200 p-4 shadow-lg rounded-md mb-12' onClick={toggleForm}>+  Add Courses</button>
      </div>
    </div>
  )
}

export default Courses;
