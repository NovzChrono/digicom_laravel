import React, { useState } from 'react';
import { Menu } from '@headlessui/react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from '@inertiajs/react';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    return (
        <>
            <nav className="sticky md:px-12 px-3 top-0 z-20 md:flex items-center justify-between py-1 bg-white">
                <div className="flex items-center py-2 md:py-0">
                    {!scroll ?
                        (<HiMenuAlt2 className='md:hidden block w-10 h-10 p-0 m-0 mr-2 text-teal-800 cursor-pointer' onClick={() => setScroll(!scroll)} />)
                        : (<MdClose className='md:hidden block w-10 h-10 p-0 m-0 mr-2 text-teal-800 cursor-pointer' onClick={() => setScroll(!scroll)} />)}
                    <Link className="text-2xl md:text-xl font-bold leading-relaxed inline-block mr-4 md:py-1 whitespace-nowrap text-teal-800" href="/">
                        DIGICom
                    </Link>
                </div>
                <ul className={
                    (scroll ? "left-0 md:static  fixed  bottom-0 top-10 md:w-auto md:bg-transparent bg-teal-800 bg-opacity-80 w-full text-teal-800 md:flex md:space-x-7 items-center transition-left md:space-y-0 space-y-3   mt-6 text-2xl pl-2 pt-3 md:p-1 md:mt-0 md:pl-3"
                        : "-left-full md:static  fixed  bottom-0 top-10 md:w-auto md:bg-transparent bg-teal-800 bg-opacity-60 w-10/12 text-teal-800 md:flex md:space-x-7 items-center transition-left md:space-y-0  mt-6 text-2xl md:p-1 md:mt-0 md:pl-3")
                }>
                    <li className="nav-item">
                        <Link
                            href={'/'}
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('training')}
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        >
                            Formation
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('service')}
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        > Service
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('portfolio')}
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        >
                            Projet
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('new')}
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        > Actualité
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="/contact"
                            onClick={() => setScroll(!scroll)}
                            className={' md:text-base font-bold leading-snug text-white font-sans md:text-teal-800 hover:opacity-75 '}
                        > Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Menu as='div' className={' relative md:text-base  font-bold leading-snug text-white md:text-teal-800 md:hover:opacity-75 inline-flex'}>
                            <Menu.Button className="font-bold inline-flex">
                                A propos <BiChevronDown className="mt-2 md:mt-1 -mr-1 h-5 w-5 md:text-teal-800 hover:opacity-75" aria-hidden="true" />
                            </Menu.Button>
                            <div className="absolute top-9 italic block rounded bg-white bg-opacity-90 md:right-1 w-60 md:w-40">
                                    <Menu.Items className="md:hover:bg-teal-800 text-teal-800 md:hover:text-white m-0 p-2 ">
                                <Link href="/director" onClick={() => setScroll(!scroll)} className="">
                                        Mot du directeur
                                </Link>
                                    </Menu.Items>
                                    <Menu.Items className="md:hover:bg-teal-800 text-teal-800 md:hover:text-white m-0 p-2 ">
                                <Link href="/about" onClick={() => setScroll(!scroll)} className="">
                                        A propos
                                </Link>
                                    </Menu.Items>
                            </div>
                        </Menu>

                    </li>


                </ul>
            </nav>
        </>
    );
}

export default Navbar;
