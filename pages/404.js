import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[])
    return (
        <div className="not-found">
            <h1 >Halaman Tidak Ditemukan</h1>
            <p >Coba periksa kembali URL yang dimasukkan dan coba lagi.</p>
            <Link href="/">
                <a><span aria-hidden="true">&larr;</span>Kembali ke Beranda</a>
            </Link>
        </div>
    );
}

export default NotFound;