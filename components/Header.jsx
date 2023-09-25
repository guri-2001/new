"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import style from '../styles/Header.module.css'

const Header = () => {

    const { data: session } = useSession()

    return (
        <div className={style.main}>
            <header>
                <nav
                    className="navbar navbar-expand-lg navbar-dark"
                    style={{ background: "#fff" }}
                >
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/dashboad">
                            <Image
                                src={"/logo.png"}
                                alt=""
                                height={100}
                                width={100}
                                style={{ height: "auto", width: "auto" }}
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{ backgroundColor: "black" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "10px",
                            }}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item" style={{ color: "#000" }}>
                                    <Link
                                        className="nav-link active"
                                        href="/dashboad"
                                        style={{ color: "#000" }}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#" style={{ color: "#000" }}>
                                        Listing
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        href="/loadPost"
                                        style={{ color: "#000" }}
                                    >
                                        Add Load
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#" style={{ color: "#000" }}>
                                        Analytics
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {
                            session ? <button
                                className="btn btn-primary"
                                onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
                            >
                                Sign Out
                            </button> :
                                <button
                                    className="btn btn-primary"
                                    onClick={() => signIn()}
                                >
                                    Sign In
                                </button>
                        }
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;


// import { useState } from 'react';
// import { Flex, Box, Text } from '@chakra-ui/react';
// import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
// import Link from 'next/link';
// import Image from 'next/image';
// import { signIn, signOut, useSession } from "next-auth/react";


// const MenuItem = ({ children, isLast, to = '/' }) => {
//     return (
//         <Text
//             mb={{ base: isLast ? 0 : 8, sm: 0 }}
//             mr={{ base: 0, sm: isLast ? 0 : 8 }}
//             display="block"
//         >
//             <Link href={to}>{children}</Link>
//         </Text>
//     );
// };

// const Header = (props) => {
//     const [show, setShow] = useState(false);
//     const toggleMenu = () => setShow(!show);
//     const { data: session } = useSession()

//     return (
//         <Flex
//             // mb={8}
//             p={3}
//             as="nav"
//             align="center"
//             justify="space-between"
//             wrap="wrap"
//             w="100%"
//             style={{ backgroundColor: "rgb(237, 237, 237)", }}
//         >
//             <Box w="200px">
//                 <Image
//                     src={"/logo.png"}
//                     alt=""
//                     height={100}
//                     width={100}
//                     style={{ height: "auto", width: "auto" }}
//                 />
//             </Box>

//             <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
//                 {show ? <CloseIcon /> : <HamburgerIcon />}
//             </Box>

//             <Box
//                 display={{ base: show ? 'block' : 'none', md: 'block' }}
//                 flexBasis={{ base: '100%', md: 'auto' }}
//             >
//                 <Flex
//                     align="center"
//                     justify={['center', 'space-between', 'flex-end', 'flex-end']}
//                     direction={['column', 'row', 'row', 'row']}
//                     pt={[4, 4, 0, 0]}
//                 >
//                     <MenuItem to="/dashboad">Home</MenuItem>
//                     <MenuItem to="/loadPost">Add load</MenuItem>
//                     <MenuItem to="/playlists">Playlists</MenuItem>
//                     <MenuItem to="/search" isLast>
//                         Search
//                     </MenuItem>
//                     {
//                         session ? <button
//                             className="btn btn-primary"
//                             onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
//                             style={{ marginLeft: "10px" }}
//                         >
//                             Sign Out
//                         </button> :
//                             <button
//                                 className="btn btn-primary"
//                                 onClick={() => signIn()}
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 Sign In
//                             </button>
//                     }
//                 </Flex>
//             </Box>
//         </Flex>
//     );
// };

// export default Header;