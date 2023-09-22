import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Guest/NavBar';
import { useRef, useEffect } from 'react';
import { FaBookReader } from 'react-icons/fa'
import { IoIosCreate } from 'react-icons/io'
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

import annonce from '@/assets/images/techno.png'

import '@/assets/css/accueil.css'
import Footer from '@/Components/Guest/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    //effet sur mon nom
    const TitreRef: any = useRef()

    const Chargement = () => {
        gsap.timeline()
            .fromTo(".lettre",
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.3,
                    delay: 0.3
                }
            )
    }

    //effet en haut et a gauche
    const Top = (element: any, delaie?: string, dure?: string) => {
        gsap.fromTo(
            element, {
            opacity: 0,
            y: -200
        },
            {
                opacity: 1,
                y: 0,
                delay: delaie || "0.9",
                duration: dure || "0.9",
                scrollTrigger: {
                    trigger: element,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
    const Left = (element: any, delaie?: string, dure?: string) => {
        gsap.fromTo(
            element, {
            opacity: 0,
            x: -200
        },
            {
                opacity: 1,
                x: 0,
                delay: delaie || "0.7",
                duration: dure || "0.7",
                scrollTrigger: {
                    trigger: element,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
    const Right = (element: any, delaie?: string, dure?: string) => {
        gsap.fromTo(
            element, {
            opacity: 0,
            x: 200
        },
            {
                opacity: 1,
                x: 0,
                delay: delaie || "0.7",
                duration: dure || "0.7",
                scrollTrigger: {
                    trigger: element,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        Chargement()
    }, []);

    useEffect(() => {
        Top("#annonce")
    }, []);

    useEffect(() => {
        Left("#formation__img")

    }, []);
    useEffect(() => {
        Right("#formation__content")
    }, []);
    useEffect(() => {
        Right("#service__img")
    }, []);

    useEffect(() => {

        Top("#service__content")
    }, []);

    useEffect(() => {
        Left("#entreprise__contact")
        Right("#entreprise__info")
    }, []);

    return (
        <>
            <Head title="Bienvenue" />
            <Navbar />

            {/* {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Register
                    </Link>
                </>
            )} */}

            <div className=' bg-slate-100 pb-12 px-3 md:px-12  container__accueil'>
                <section id="sectionSuivant" className='md:mx-auto container text-base lg:text-5xl md:py-3'>
                    <div id="titre" className='relative flex justify-center md:justify-start ' ref={TitreRef}>
                        <span className="lettre">B</span>
                        <span className="lettre">I</span>
                        <span className="lettre">E</span>
                        <span className="lettre">N</span>
                        <span className="lettre">V</span>
                        <span className="lettre">E</span>
                        <span className="lettre">N</span>
                        <span className="lettre">U</span>
                        <span className="lettre">E</span>
                        <span className="lettre ml-2">CHEZ</span>
                        <span className="lettre ml-2">DIGICOM</span>
                        <span className="lettre ml-2">ENTREPRISE</span>
                        <span className="lettre particule"></span>
                        <div id='annonce' className='absolute'>
                            <img src={annonce} alt='annoce' className="md:w-2/4 opacity-50 float-right" />
                        </div>
                    </div>

                    <div className="container__formation mb-8">
                        <div id="formation__img" className='text-left border-b-2 border-teal-600 text-3xl text-teal-600'>Formation</div>
                        <div id="formation__img" className="formation__section grid md:grid-cols-2">
                            <div className='formation__img grid grid-cols-2 mb-8 md:mb-0'>
                                <div className=''>
                                    <img src={'#'} alt='formation' className="w-full mb-3" />
                                    <img src={'#'} alt='formation2' className="w-full" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src={'#'} alt='img' className=" w-4/6" />
                                </div>
                            </div>
                            <div id="formation__content" className='flex  text-left items-center text-xl italic'>
                                <div>
                                    Nous vous offrons des formations dans ces differents domaines qui sont:
                                    <ul className="list-disc ml-6 mb-7">
                                        <li>Dévellopement WEB & Mobile (HTML, CSS, JavaScript, Php, Laravel, React, VueJs, Flutter, ReactNative, Bootstrap, TailwindCss ...)</li>
                                        <li>Infographie (Adobe PhotoShop, Adobe Illustrator ...)</li>
                                        <li>Office (Word, Excel, PowerPoint, Pubisher, Access ...)</li>
                                        <li>Booster votre page sur les reseaux sociaux</li>
                                    </ul>
                                    <div className='flex md:block justify-center items-center'>
                                        <Link href={route('training')} className='cursor-pointer  bg-teal-800 text-white ml-6 p-1 px-2 rounded hover:bg-teal-500'>Continuer</Link>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__service mb-8">
                        <div id="service__img" className='text-left border-b-2 border-violet-600 text-3xl text-violet-600'>Service</div>
                        <div className="service__section grid md:grid-cols-2">

                            <div id="service__content" className='flex service__content1  text-left items-center text-xl italic  md:mb-0'>
                                <div className='px-4'>
                                    Nous vous offrons des servies suivant:
                                    <ul className="list-disc ml-6 mb-7">
                                        <li>Création d'application Web, Desktop & Mobile</li>
                                        <li>Creation de carte de visite, affiche(Mariage, Anniversaire, Bapteme etc...), carte de totine professionnel, logo etc... </li>
                                        <li>Traitement de texte(Contrat de Bail, Attestation de vente, Demande d'emploi & stage professionnel etc...) </li>
                                        <li>Création de CV professionnel</li>
                                    </ul>
                                    <Link href={route('service')} className='cursor-pointer  bg-violet-800 text-white ml-6 p-1 px-2 rounded hover:bg-violet-500'>Continuer</Link>
                                    <div />
                                </div>
                            </div>
                            <div id="service__img" className='service__img grid grid-cols-2'>
                                <div className=''>
                                    <img src={'#'} alt='service2' className="w-full" />
                                    <img src={'#'} alt='service' className="w-full mb-3" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src={'#'} alt='img' className=" w-4/6" />
                                </div>
                            </div>
                            <div id="service__content" className='md:hidden mt-8 flex  text-left items-center text-xl italic mb-8 md:mb-0'>
                                <div className='px-4'>
                                    Nous vous offrons des servies suivant:
                                    <ul className="list-disc ml-6 mb-7">
                                        <li>Création d'application Web, Desktop & Mobile</li>
                                        <li>Creation de carte de visite, affiche(Mariage, Anniversaire, Bapteme etc...), carte de totine professionnel, logo etc... </li>
                                        <li>Traitement de texte(Contrat de Bail, Attestation de vente, Demande d'emploi & stage professionnel etc...) </li>
                                        <li>Création de CV professionnel</li>
                                    </ul>
                                    <div className='flex justify-center items-center'>
                                        <Link href={route('service')} className='cursor-pointer  bg-violet-800 text-white ml-6 p-1 px-2 text-center rounded hover:bg-violet-500'>Continuer</Link>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='entreprise' className='container mx-auto mb-16 mt-9 grid md:grid-cols-2 gap-5'>
                        <div id='entreprise__contact' className=' bg-white rounded py-8 md:text-4xl'>
                            <div className='md:text-4xl'>
                                DIGICOM ENTREPRISE
                            </div>
                            <div className='md:text-4xl text-slate-300 border-b-2 mx-5'>
                                ...
                            </div>
                            <div className='md:text-2xl my-8'>
                                Pour tous vos problèmes Informatiques
                            </div>
                            <div className='md:text-lg my-9'>
                                <Link href={route('contact')} className=' p-2 rounded bg-violet-700 text-white hover:bg-violet-400 hover:text-black'>Contacter nous</Link>
                            </div>
                        </div>

                        <div id='entreprise__info' className='mt-4 md:mt-0 bg-white rounded-md py-14 md:bg-transparent md:py-0 flex justify-around items-center'>
                            <div className='text-center'>
                                <IoIosCreate className=' text-slate-400 p-5 text-8xl border-dashed rounded-full border-2' />
                                <br />
                                <span>2021</span>
                                <br />
                                <span className='italic text-xl text-violet-700'>Création</span>
                            </div>
                            <div>
                                <FaBookReader className=' text-slate-400 p-5 text-8xl border-dashed border-2 rounded-full' />
                                <br />
                                <span>+10</span>
                                <br />
                                <span className='italic text-xl text-violet-700'>Projets</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

          <Footer />
        </>
    );
}
