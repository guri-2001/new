"use client"
import { Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

const LoadPost = () => {
  const toast = useToast()

  const [PcityName, setPCityName] = useState('');
  const [Pdate, setPDate] = useState('');
  const [PTimeOne, setPTimeOne] = useState('');
  const [PTimeTwo, setPTimeTwo] = useState('');
  const [DcityName, setDCityName] = useState('');
  const [Ddate, setDDate] = useState('');
  const [DTimeOne, setDTimeOne] = useState('');
  const [DTimeTwo, setDTimeTwo] = useState('');
  const [price, setPrice] = useState('');
  const [equipment, setEquipment] = useState('');
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [commodity, setCommodity] = useState('');
  const [loadInfo, setLoadInfo] = useState('');
  const [error, setError] = useState('');

  // ---------------- HandleSubmit Button Start ------------------>

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!PcityName || !Pdate || !PTimeOne || !PTimeTwo || !DcityName || !Ddate || !DTimeOne || !DTimeTwo || !price || !equipment || !weight || !distance || !commodity || !loadInfo) {
      { `${setError(<div style={{ color: "red" }}>All Fields are required</div>)}` }
      return;
    }



    const newObj = {
      PcityName,
      Pdate,
      PTimeOne,
      PTimeTwo,
      DcityName,
      Ddate,
      DTimeOne,
      DTimeTwo,
      price,
      equipment,
      weight,
      distance,
      commodity,
      loadInfo,
    }


    console.log(newObj);
    const res = axios.post('/api/newNote', newObj)
      .then(() => {
        alert('New Note')
      })

    toast({
      title: 'Added Successfully',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    })

    console.log(res);

    setPCityName("")
    setPDate("")
    setPTimeOne("")
    setPTimeTwo("")
    setDCityName("")
    setDDate("")
    setDTimeOne("")
    setDTimeTwo("")
    setPrice("")
    setEquipment("")
    setWeight("")
    setDistance("")
    setCommodity("")
    setLoadInfo("")

  }

  // ---------------- HandleSubmit Button End ------------------>

  return (
    <>

      {/* ---------------- Form Start ------------------> */}

      <div className='min-h-screen'>
        <Link href={"allloads"} className="bg-cyan-400 px-3 py-2 ml-5">All loads</Link>
        <div className="container w-2/3 shadow-lg" >
          <form onSubmit={handleSubmit}>

            {/* --------------Pickup Area Start--------------- */}

            <div className='w-full'>
              <h2>Pick Up</h2>
              <div className=' px-3 py-3'>
                <div className="mb-2 w-full">
                  <label className='text-2xl'>City Name</label>
                  <Input
                    size='md'
                    type="text"
                    className="form-control"
                    id="PcityName"
                    name="PcityName"
                    placeholder="Enter your City Name"
                    autoComplete='off'
                    value={PcityName}
                    onChange={e => setPCityName(e.target.value)}
                  />
                </div>
                <div className='flex gap-3'>
                  <div className="mb-2 w-1/2">
                    <label className='text-2xl' htmlFor="Pdate" >Date</label>
                    <Input
                      size='md'
                      type="date"
                      className="form-control"
                      id="Pdate"
                      name="Pdate"
                      value={Pdate}
                      onChange={e => setPDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="time" >Time</label>
                    <Input
                      size='md'
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={PTimeOne}
                      onChange={e => setPTimeOne(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="time" >Time</label>
                    <Input
                      size='md'
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={PTimeTwo}
                      onChange={e => setPTimeTwo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------Pickup Area End--------------- */}

            {/* --------------Delivery Area Start--------------- */}

            <div className='w-full '>
              <h2>Delivery</h2>
              <div className=' px-3 py-3'>
                <div className="mb-2 w-full">
                  <label className='text-2xl'>City Name</label>
                  <Input
                    size='md'
                    type="text"
                    className="form-control"
                    id="DcityName"
                    name="DcityName"
                    placeholder="Enter your City Name"
                    autoComplete='off'
                    value={DcityName}
                    onChange={e => setDCityName(e.target.value)}
                  />
                </div>
                <div className='flex gap-3'>
                  <div className="mb-2 w-1/2">
                    <label className='text-2xl' htmlFor="date" >Date</label>
                    <Input
                      size='md'
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={Ddate}
                      onChange={e => setDDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="time" >Time</label>
                    <Input
                      size='md'
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={DTimeOne}
                      onChange={e => setDTimeOne(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="time" >Time</label>
                    <Input
                      size='md'
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={DTimeTwo}
                      onChange={e => setDTimeTwo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------Delivery Area End--------------- */}

            {/* --------------Price, Equipment, Weight Start--------------- */}

            <div className='w-full '>
              <div className=' px-3 py-3'>
                <div className='flex gap-3'>
                  <div className="mb-2 w-1/2">
                    <label className='text-2xl' htmlFor="price" >Price</label>
                    <Input
                      size='md'
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      placeholder="Enter your Price"
                      autoComplete='off'
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="equipment" >Equipment</label>
                    <Input
                      size='md'
                      type="text"
                      className="form-control"
                      id="equipment"
                      name="equipment"
                      placeholder="Equipment"
                      autoComplete='off'
                      value={equipment}
                      onChange={e => setEquipment(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/3">
                    <label className='text-2xl' htmlFor="weight" >Weight</label>
                    <Input
                      size='md'
                      type="text"
                      className="form-control"
                      id="weight"
                      name="weight"
                      placeholder="Weight"
                      autoComplete='off'
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------Price, Equipment, Weight End--------------- */}

            {/* --------------Distance, Commodity Start--------------- */}

            <div className='w-full '>
              <div className=' px-3 py-3'>
                <div className='flex gap-3'>
                  <div className="mb-2 w-1/2">
                    <label className='text-2xl' htmlFor="distance" >Distance</label>
                    <Input
                      size='md'
                      type="text"
                      className="form-control"
                      id="distance"
                      name="distance"
                      placeholder="Enter Distance"
                      autoComplete='off'
                      value={distance}
                      onChange={e => setDistance(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 w-1/2">
                    <label className='text-2xl' htmlFor="commodity" >Commodity</label>
                    <Input
                      size='md'
                      type="text"
                      className="form-control"
                      id="commodity"
                      name="commodity"
                      placeholder="Enter Commodity"
                      autoComplete='off'
                      value={commodity}
                      onChange={e => setCommodity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------Price, Equipment, Weight End--------------- */}

            {/* --------------Load Details Start--------------- */}

            <div className="mb-2 px-3 py-3">
              <label htmlFor="content" className='text-2xl'>Load Details</label>
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

            {/* --------------Load Details End--------------- */}

            {/* --------------Error Handling Start--------------- */}

            {
              error &&
              <div style={{ marginBottom: "10px" }}>
                {error}
              </div>
            }

            {/* --------------Error Handling End--------------- */}

            {/* --------------Submit Button Start--------------- */}

            <div className='px-3 py-3'>
              <button type='submit' className='w-full text-xl bg-green-400 px-3 py-2  rounded-lg'  >Submit</button>
            </div>

            {/* --------------Submit Button End--------------- */}

          </form>
        </div>
      </div>
      {/* --------------Form End--------------- */}
    </>

  )
}

export default LoadPost