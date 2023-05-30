'use client';

import Logo  from "./Logo";

const NavItems = () => {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7x1 items-center justify-betwenn p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <Logo/>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavItems;