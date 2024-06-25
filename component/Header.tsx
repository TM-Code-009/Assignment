"use client"

import React from 'react';
import Button from './Button';
import { MdAppRegistration, MdPerson2 } from 'react-icons/md';
import Link from 'next/link';


 const Header = () => {
    return(
      <div className="w-full h-[70px] flex bg-red-900 justify-center items-center ">
      <div className="w-[90%] h-full flex justify-between bg-red-400 items-center">
        <div>Logo</div>
        <div className="flex items-center gap-3">
          <Link href="/Signin">
            <Button icon={<MdPerson2 />} className="text-neutral-900 bg-white w-[100px]">
              Log In
            </Button>
          </Link>
          <Link href="/Register">
            <Button icon={<MdAppRegistration />} className="text-neutral-900 bg-white ">Register</Button>
          </Link>
        </div>
      </div>
    </div>
    )
  }

  export default Header;