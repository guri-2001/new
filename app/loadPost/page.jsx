"use client"
import Header from '@/components/Header';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

const LoadPost = () => {
  const toast = useToast()

  const [name, setName] = useState('');
  const [loadInfo, setLoadInfo] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  // ---------------- HandleSubmit Button Start ------------------>

  const handleSubmit = async (e) => {
    e.preventDefault()


    if (!name || !loadInfo || !fromCity || !toCity || !date) {
      { `${setError(<div style={{ color: "red" }}>All Fields are required</div>)}` }
      return;
    }

    const newObj = {
      name: name,
      fromCity: fromCity,
      toCity: toCity,
      date: date,
      loadInfo: loadInfo,
    }

    // console.log(newObj);
    const res = axios.post('/api/newNote', newObj)
      .then(() => {
        // alert('New note Added successfully')
      
      })

      toast({
        title: 'Added Successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })


    setName("")
    setFromCity("")
    setToCity("")
    setDate("")
    setLoadInfo("")

  }

  // ---------------- HandleSubmit Button End ------------------>

  return (
    <div>

      {/* ---------------- Form Start ------------------> */}

      <Link href={"allloads"} className="bg-cyan-400 px-3 py-2 ml-5">All loads</Link>
      <div className="container" style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label className='text-2xl'>Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="Name"
              placeholder="Enter your Name"
              autoComplete='off'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className='text-2xl' htmlFor="From" >From</label>
            <input
              type="text"
              className="form-control"
              id="From"
              name="From"
              placeholder="Enter your city"
              autoComplete='off'
              value={fromCity}
              onChange={e => setFromCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="To" cclassName='text-2xl'>To</label>
            <input
              type="text"
              className="form-control"
              id="To"
              name="To"
              placeholder="Enter your city"
              autoComplete='off'
              value={toCity}
              onChange={e => setToCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className='text-2xl'>Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              placeholder="Enter your city"
              autoComplete='off'
              format="yyyy-mm-dd"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className='text-2xl'>Load Info</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="5"
              placeholder='About Load...'
              autoComplete='off'
              value={loadInfo}
              onChange={e => setLoadInfo(e.target.value)}
            />
          </div>
          {
            error &&
            <div style={{ marginBottom: "10px" }}>
              {error}
            </div>
          }
          <div>
          <button type='submit' className='w-full text-xl bg-green-400 px-3 py-2 mt-3 rounded-lg'  >Submit</button>
          </div>
        </form>
      </div>

      {/* ---------------- Header End ------------------> */}

    </div>
  )
}

export default LoadPost