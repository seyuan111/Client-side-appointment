"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IoIosAddCircleOutline } from "react-icons/io"
import 'tailwindcss/tailwind.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5100")
        .then(result => setAppointments(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5100/deleteAppointment/'+id)
        .then(result => {console.log(result)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    
  return (
    <div className="flex h-screen bg-slate-300 justify-center items-center">
        <div className="w-50 bg-white rounded p-4">
        <Link href="/CreateAppointments" className="mb-4 flex bg-green-500 text-white justify-center items-center w-fit px-4 py-2 rounded"><IoIosAddCircleOutline />Add Appointment</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((people) => {
                        return <tr className="justify-center items-center">
                            <td>{people.name}</td>
                            <td>{people.phone}</td>
                            <td>{people.email}</td>
                            <td>{people.date}</td>
                            <td>{people.time}</td>
                            <td>
                                <Link href={{pathname: `/UpdateAppointments`, query: {people: people._id}}} className="bg-blue-600 text-white ml-4 px-[8px] py-[4px] rounded">Edit</Link>
                                <button onClick={(e) => handleDelete(people._id)} className="bg-red-600 text-white mx-4 px-[8px] py-[4px] rounded">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Appointments