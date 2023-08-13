'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            className="md:block cursor-pointer hidden"
            src="/images/airbnb.svg"
            height="50"
            width="50"
            alt="Logo"
        />
    );
}

export default Logo;