"use client"

import Link from "next/link"
import Image from "next/image"

import {useState, useEffect} from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth'

const Nav = () => {
    const isUserLoggedIn = true
  
    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setProviders = async () => {
            const res = await getProviders()

            setProviders(res)
        }
        setProviders()
        },[])

    return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/">
            <Image src="/assets/images/logo.svg" alt="Promptopia logo" width="30" height="30" className="object-contain" />
            <p className="logo_text">Promptopia</p>
        </Link>
        {/*Mobile navigation*/}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create Post
                    </Link>
                    <button type="button" onClick={() => signOut()} className="outline_btn">Sign Out</button>
                    <Link href="/profile">
                        <Image src="/assets/images/logo.svg" 
                            alt="Promptopia profile" 
                            width={37} 
                            height={37} 
                            className="rounded-full"/>
                    </Link>
                </div> 
                ):
            <></>}
        </div>
    </nav>
  )
}

export default Nav