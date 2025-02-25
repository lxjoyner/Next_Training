//This ic a basic navigation bar that is exported to be placed on any page.
"use client"
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";
import React, { useEffect, useState} from "react";


const Navbar = () => {
    const [session, setSession] = useState<any>(null);  // State to store the session data

    useEffect(() => {
        // Fetch the session asynchronously when the component mounts
        const getSession = async () => {
            const sessionData = await auth();
            setSession(sessionData);
        };

        getSession();
    }, []);  // Empty dependency array to run the effect once on mount

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sams">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <button onClick={signOut}>
                                <span>Logout</span>
                            </button>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={async () =>
                            await signIn('github')}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Navbar
