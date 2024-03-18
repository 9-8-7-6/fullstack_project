import Image from 'next/image';
import Link from 'next/link'

import SearchFilters from './SearchFilter';
import UserNav from './UserNav';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/logo.png"
                            alt="project logo"
                            width={150}
                            height={40}
                        />
                    </Link>
                    <div className='flex space-x-6'>
                        <SearchFilters />
                    </div>
                    
                    <div className='flex items-center space-x-6'>
                        Add property
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;