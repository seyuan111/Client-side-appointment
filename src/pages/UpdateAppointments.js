"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'

const UpdateAppointments = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (id) {
        axios.get(`http://localhost:5100/updateAppointment/${id}`)
            .then(result => {console.log(result)
              setName(result.data.name)
              setPhone(result.data.phone)
              setEmail(result.data.email)
              setDate(result.data.date)
              setTime(result.data.time)
            })
            .catch(err => console.log(err));
    }
}, [id]);

  const Update= (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5100/updatePatient/${id}`, {name, phone,email,date,time})
    .then(result => {
      console.log(result);
      router.push('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex h-screen bg-slate-300 justify-center items-center">
    <div className="w-50 bg-white rounded p-3">
    <BiArrowBack onClick={goBack} className="text-black cursor-pointer text-[20px]" />
      <form onSubmit={Update}>
        <h1 className="font-bold text-[20px]">Update Appointment</h1>
        <div className="my-2 flex flex-col">
          <label htmlFor="">Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="" />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="">Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter Phone" className="" />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="">Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" className="" />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="">Date:</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="Enter Date" className="" />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="">Time:</label>
          <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Enter Time" className="" />
        </div>
        <button className="bg-blue-400 text-white px-4 py-2 mt-4 rounded">Update Appointment</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateAppointments