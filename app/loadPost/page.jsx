"use client"
import Header from '@/components/Header';
import { useToast } from '@chakra-ui/react';
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

    try {
      let res = await fetch("/api/addPost", {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          fromCity,
          toCity,
          date,
          loadInfo,
        })
      })
      console.log(res);

      res = await res.json();
      toast({
        title: 'Added Successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })

      setName("");
      setLoadInfo("");
      setFromCity("");
      setToCity("");
      setDate("");
    } catch (error) {
      console.log(error);
    }
  }

  // ---------------- HandleSubmit Button End ------------------>

  return (
    <div>

      {/* ---------------- Header Start ------------------> */}

      <Header />

      {/* ---------------- Header End ------------------> */}

      {/* ---------------- Form Start ------------------> */}

      <div className="container" style={{ width: "50%" }}>
        <h1>Add Load</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
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
            <label htmlFor="From" className="form-label">From</label>
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
            <label htmlFor="To" className="form-label">To</label>
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
            <label htmlFor="date" className="form-label">Date</label>
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
            <label htmlFor="content" className="form-label">Load Info</label>
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
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>

      {/* ---------------- Header End ------------------> */}

    </div>
  )
}

export default LoadPost