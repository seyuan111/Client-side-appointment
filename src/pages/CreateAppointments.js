"use client"
import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'

const CreateAppointments = () => {
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()

  const router = useRouter();

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5100/createAppointment", {name, phone,email,date,time})
    .then(result => {
      console.log(result);
      router.push('/')
    })
    .catch(err => console.log(err))
  }

  
  return (
    <div className="flex h-screen bg-slate-300 justify-center items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h1 className="font-bold text-[20px]">Create Appointment</h1>
          <div className="my-2 flex flex-col">
            <label htmlFor="">Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="" />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="">Phone:</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter Phone" className="" />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" className="" />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="">Date:</label>
            <input onChange={(e) => setDate(e.target.value)} type="text" placeholder="Enter Date" className="" />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="">Time:</label>
            <input onChange={(e) => setTime(e.target.value)} type="text" placeholder="Enter Time" className="" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-2 mt-4 rounded">Create Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default CreateAppointments