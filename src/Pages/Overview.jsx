import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import data from '../Components/db.json';

const Overview = () => {
  return (
    <div className='bg-gray-100'>
      <p className='text-3xl text-gray-700/50 font-medium mt-12 mb-10'>Overview</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {data.info.map((ele, index) => {
          return (
            <div className='shadow-lg h-32 w-64 p-3 rounded-md mr-2 bg-white mb-3 lg:44' key={index}>
              <div className='flex'>
                <div className='mr-4 pr-2 pl-2 pt-2  mt-5 rounded-full bg-green-300'>
                  <span className='material-symbols-outlined' style={{ fontSize: '30px' }}>
                    group
                  </span>
                </div>
                <div className='pt-4'>
                  <p className='text-2xl font-sans'>{ele.number}</p>
                  <p className='font-sans text-xs font-medium text-gray-600'>{ele.title}</p>
                </div>
              </div>
              <p className='text-right mt-3 text-xs text-red-800 '>View</p>
            </div>
          );
        })}
      </div>

      <div className='mt-10 mb-3'>
        <p className='text-1xl text-gray-700/50 font-medium'>LATEST ENROLMENTS</p>
        <p className='text-right text-red-800 mr-6'>View All Courses</p>
      </div>

      <table className='shadow-lg w-full bg-white pb-6 rounded-lg'>
        <thead className=''>
          <tr className='border-b-2 '>
            <th className='pt-9 pb-4 '>Enr. No</th>
            <th className='pt-9 pb-4'>S. Name</th>
            <th className='pt-9 pb-4'>C. Name</th>
            <th className='pt-9 pb-4'>Fees</th>
            <th className='pt-9 pb-4'>Enr. Date</th>
          </tr>
        </thead>
        <tbody>
          {data.latest.map((ele, index) => {
            return (
              <tr className='border-b-2' key={index}>
                <td className='text-center pb-4 '>{ele.enr}</td>
                <td className='text-center'>{ele.sname}</td>
                <td className='text-center'>{ele.cname}</td>
                <td className='text-center'>{ele.fees}</td>
                <td className='text-center'>{ele.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='mt-10 mb-1'>
        <p className='text-1xl text-gray-700/50 font-medium'>BEST STUDENTS</p>
        <p className='text-right text-red-800 mr-6'>View All Courses</p>
      </div>

      <table className='shadow-lg h-80 w-full bg-white pb-6 mb-12 rounded-lg'>
        <thead className=''>
          <tr className='border-b-2 '>
            <th className='pt-9 pb-4 '>Regd. No</th>
            <th className='pt-9 pb-4'>First Name</th>
            <th className='pt-9 pb-4'>Last Name</th>
            <th className='pt-9 pb-4'>Courses #</th>
            <th className='pt-9 pb-4'>Total Fee</th>
            <th className='pt-9 pb-4'>Regd. Date</th>
          </tr>
        </thead>
        <tbody>
          {data.best.map((ele, index) => {
            return (
              <tr className='border-b-2' key={index}>
                <td className='text-center pb-4 '>{ele.enr}</td>
                <td className='text-center'>{ele.sname}</td>
                <td className='text-center'>{ele.cname}</td>
                <td className='text-center'>{ele.courses}</td>
                <td className='text-center'>{ele.fees}</td>
                <td className='text-center'>{ele.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
