import React from 'react'
import clientPromise from '../lib/mongo';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { Tooltip } from '@chakra-ui/react';

const Data = ({ movies }) => {
    console.log(movies);
    return (
        <div>
            {
                movies.map(m => {
                    return (
                        <>
                            <div className=' m-auto mt-5 shadow-md bg-slate-100 py-2' style={{
                                display: "grid", gridTemplateColumns: "1fr 1fr 500px"
                                , width: "65%"
                            }}>
                                <div className='w-full flex justify-center items-center flex-col h-full'>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-5xl font-bold text-cyan-600'>{m.price}</span>
                                        <span className='font-semibold text-sm text-slate-500'>FTL- {m.equipment} </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col w-full'>
                                        <b className='flex justify-end'>{m.PcityName}</b>
                                        {/* <span className='flex justify-end text-base font-bold'>{m.PcityName}</span> */}
                                        <span className='text-sm font-medium flex justify-end'> {m.Pdate}, {m.PTimeOne}-{m.PTimeTwo} </span>
                                    </div>
                                    <br />
                                    <div className='flex flex-col w-full'>
                                        <b className='flex justify-end'>{m.PcityName}</b>
                                        <span className='text-sm font-medium flex justify-end'> {m.Pdate}, {m.PTimeOne}-{m.PTimeTwo} </span>
                                    </div>
                                </div>
                                <div className=' flex items-center px-5 justify-around'>
                                    <Tooltip hasArrow label='View Details' bg='gray.300' color='black'>
                                        <Link href={'loadDetail'}  className="bg-cyan-600 px-3 py-1 text-white text-lg" >View Detail</Link>
                                    </Tooltip>

                                    <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                    <button onClick={(name, fromCity, loadInfo, noteId) => editForm(note.name, note.fromCity, note.toCity, note.date, note.loadInfo, note._id)} className='hover:text-green-600 text-2xl' ><FiEdit /></   button>
                                    </Tooltip>

                                    <Tooltip hasArrow label='Delete' bg='gray.300' color='black'>
                                    <button onClick={() => deleteNote(note._id)} className='hover:text-rose-600 text-2xl' ><MdDelete /></button>
                                    </Tooltip>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Data


export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");

        const movies = await db
            .collection("notes")
            .find({})
            .sort({ _id: -1 })
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
}
