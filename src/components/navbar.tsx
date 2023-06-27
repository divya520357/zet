import Image from 'next/image'

export default function Home() {
    return (
    <div className="nav">
        <div className="nav-left">
            <a href="/">
                <Image src="/logos/zet_logo.svg" alt="zet logo" width="90" height="90"    />
            </a>
        </div>    
        <div className="nav-right flex items-center">
            <a className='nav-link' href="#">Home</a>
            <a className='nav-link' href="#">About Us</a>
            <a className='nav-link' href="#">Partner With Us</a>
            <a className='nav-link' href="#">Blog</a>
            <button className='nav-button'>Download ZET</button>
        </div>
    </div>
    )
}
