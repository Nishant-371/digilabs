import React from 'react'
import Records from './data.json'
import './styles/Afterlogin.css'
import {CSVLink} from "react-csv"

const icon=<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 1.7291V5.24006C9.75 5.71611 9.75 5.95413 9.84537 6.13595C9.92926 6.29589 10.0631 6.42592 10.2278 6.50742C10.4149 6.60006 10.66 6.60006 11.15 6.60006H14.7642M5.375 12.55L8 15.1M8 15.1L10.625 12.55M8 15.1L8 10M9.75 1.5H5.2C3.72986 1.5 2.99479 1.5 2.43327 1.77793C1.93935 2.02241 1.53778 2.41251 1.28611 2.89232C1 3.4378 1 4.15187 1 5.58V14.42C1 15.8481 1 16.5622 1.28611 17.1077C1.53778 17.5875 1.93935 17.9776 2.43327 18.2221C2.99479 18.5 3.72986 18.5 5.2 18.5H10.8C12.2701 18.5 13.0052 18.5 13.5667 18.2221C14.0607 17.9776 14.4622 17.5875 14.7139 17.1077C15 16.5622 15 15.8481 15 14.42V6.6L9.75 1.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const headers = [
    { label: "Name", key: "Name" },
    { label: "Roll_No", key: "Roll_No" },
    { label: "Address", key: "Address" },
    { label: "Institute", key: "Institute" },
    { label: "Course", key: "Course" },
  ];
  

const Afterlogin = () => {
  return (
    <div>
        <div className='text'>Students</div>
            <div className='text2'>List of all the students in the database</div>
            <div className='buttons'>
            <CSVLink data={Records} headers={headers}>
                <button className='import'>Import Students</button>
            </CSVLink>
                <button className='button2'>{icon}Export as CSV</button>
            </div>
        
    <table className="table">
        <div className='thead'>
            <thead>
            <tr>
                <th className='Name'>Name</th>
                <th className='roll'>Roll No</th>
                <th className='addr'>Address</th>
                <th className='inst'>Institute</th>
                <th className='course'>Course</th>
            </tr>
            </thead>
        </div>
        <div className='tabled'>
            <tbody>
            {Records.map((row) => (
                <tr key={row['Roll_No']}>
                <td>{row.Name}</td>
                <td>{row['Roll_No']}</td>
                <td>{row.Address}</td>
                <td>{row.Institute}</td>
                <td>{row.Course}</td>
                </tr>
            ))}
            </tbody>
        </div>
      </table>


    </div>
  )
}

export default Afterlogin
