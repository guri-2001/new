import React from 'react'
import clientPromise from '../lib/mongo';

const data = ({ movies }) => {
    console.log(movies);
  return (
    <div>
        {
            movies.map(m =>{
                return(
                    <>
                    <div className='w-1/2 m-auto mt-5 shadow-md bg-slate-100'>
                        <div className='flex flex-col w-1/3'>
                            <h5 className='flex justify-end'>{m.PcityName}</h5>
                            <p className='text-xs'> {m.Pdate}, {m.PTimeOne}-{m.PTimeTwo} </p>
                        </div>
                        <div className='flex flex-col w-1/3'>
                            <h5>{m.PcityName}</h5>
                            <p> {m.Pdate}, {m.PTimeOne}-{m.PTimeTwo} </p>
                        </div>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default data


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
            props: { movies: JSON.parse(JSON.stringify(movies))},
        };
    } catch (e) {
        console.error(e);
    }
}
