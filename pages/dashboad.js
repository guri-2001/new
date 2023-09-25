import React, { useState } from "react";
import clientPromise from "../lib/mongo";
import { useSession } from "next-auth/react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Input,
} from '@chakra-ui/react'


const Alldata = ({ movies, alldata }) => {

    const { data: session } = useSession();

    const [loadData, setLoadData] = useState(movies);
    const [allLoaddata, setAllLoadData] = useState(movies);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")


    // ------------- Delete Load Start ----------------->

    const handleDeletePost = async (postId) => {
        try {
            let response = await fetch('http://localhost:3000/api/deletePost?id=' + postId, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            window.location.reload();
        } catch (error) {
            console.log('An error occurred while deleting ', error);
        }
    }

    // ------------- Delete Load End ----------------->

    // -----------------Delete User Start ------------------->

    const handleDeleteUser = async (postId) => {
        try {
            let response = await fetch('http://localhost:3000/api/deleteUser?id=' + postId, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            window.location.reload();
        } catch (error) {
            console.log('An error occurred while deleting ', error);
        }
    }

    // ------------- Delete User End ----------------->

    //<---------------- Admin Part Start ------------------->

    if (session?.user?.role === "admin") {
        return (
            <>
                <div style={{ height: "100vh", backgroundColor: "rgb(241 245 249)" }}>
                    <h1>Welcome {session?.user?.name} </h1>
                    <h1 align="center" style={{ marginBottom: "100px" }}>All Users </h1>
                    <TableContainer mx={300} >
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Role</Th>
                                    <Th>Verify</Th>
                                </Tr>
                            </Thead>
                            {alldata.map((user) => (
                                <>
                                    <Tbody key={user._id}>
                                        <Tr>
                                            <Td>{user.name}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>{user.role}</Td>
                                            <Td>
                                                <Button colorScheme='red' mx={5} onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </>
                            ))}
                        </Table>
                    </TableContainer>
                </div>
            </>
        );

        //<---------------- Admin Part End ------------------->

        // <------------------ User Part Start -------------------->

    } else if (session?.user?.role === "user") {

        // <------------------ Date Picker Part Start -------------------->

        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        }

        const handleSelect = (date) => {

            let filtered = allLoaddata.filter((user) => {
                let userDate = new Date(user["date"]);
                return (
                    userDate >= date.selection.startDate &&
                    userDate <= date.selection.endDate
                )
            })

            setStartDate(date.selection.startDate)
            setEndDate(date.selection.endDate)
            setLoadData(filtered)
            setFirstDate(date.selection.startDate.toLocaleDateString())
            setSecondDate(date.selection.endDate.toLocaleDateString())
        }

        const clearFilter = () => {
            window.location.reload();
        }

        const firstDatevalue = startDate.toLocaleDateString();
        const secondDatevalue = endDate.toLocaleDateString();

        // <------------------ Date Picker Part End -------------------->

        return (
            <div style={{ display: "grid", gridTemplateColumns: "35% 65%", padding: "10px 30px", height: "100vh", backgroundColor: "rgb(241 245 249)" }} >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1> Welcome <span style={{ textDecoration: "underline" }}>{session?.user?.name}</span> </h1>

                    {/* <----------------Filter Area start----------------> */}

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div>
                                <label>From </label>
                                {/* <input type="text" onClick={() => setShow(!show)} style={{ height: "40px" }} value={firstDate} onChange={() => { setFirstDate(firstDatevalue) }} /> */}
                                <Input
                                    value={firstDate}
                                    onChange={() => { setFirstDate(firstDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px", backgroundColor: "#fff",marginLeft:"5px" }}
                                />
                            </div>
                            <div>
                                <label>To</label>
                                {/* <input type="text" onClick={() => setShow(!show)} style={{ height: "40px" }} value={secondDate} onChange={() => { setSecondDate(secondDatevalue) }} /> */}
                                <Input
                                    value={secondDate}
                                    onChange={() => { setSecondDate(secondDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px", backgroundColor: "#fff",marginLeft:"5px" }}
                                />
                            </div>
                        </div>
                        {
                            show ? <DateRange
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                            /> : ""
                        }
                        <button className="btn btn-warning" style={{ height: "40px" }} onClick={clearFilter}>Clear filter</button>
                    </div>
                </div>

                {/* <----------------Filter Area End----------------> */}

                <div style={{ padding: "0 50px" }} >
                    {loadData.map((movie) => (
                        <div key={movie._id}>
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #e9ecef",
                                    padding: "20px",
                                    borderRadius: "5px",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    margin: "auto",
                                    marginTop: "20px",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h4>{movie.name}</h4>
                                    <button className="btn btn-danger" onClick={() => handleDeletePost(movie._id)}>Delete</button>
                                </div>
                                <h6>{movie.date}</h6>
                                <p>
                                    {movie.loadInfo}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // <------------------ User Part End -------------------->
}

export default Alldata;

// ----------------Data Import from Server Start ------------------>

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");

        const movies = await db
            .collection("userdata")
            .find({})
            .sort({ _id: -1 })
            .toArray();

        const alldata = await db
            .collection("users")
            .find({})
            .sort({ role: 1 })
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(movies)), alldata: JSON.parse(JSON.stringify(alldata)) },
        };
    } catch (e) {
        console.error(e);
    }
}

// ----------------Data Import from Server End ------------------>
