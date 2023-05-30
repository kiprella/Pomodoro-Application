'use client'


import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="h-8 w-auto"
        height="50"
        width="25"
        src="/images/logo.png"
        />
    );
}


export default Logo;