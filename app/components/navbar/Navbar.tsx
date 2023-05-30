'use client';

import Logo from './Logo';
import NavItems from './NavItems';
import Container from '../Container';

const Navbar = () => {
    return (
        <div>
            <div className="
                    py-4
                    border-b-[1px]
            ">
                <Container>
                    <div>
                        <NavItems/>
                    </div>
                </Container>
            </div>
        </div>
    )
}


export default Navbar;