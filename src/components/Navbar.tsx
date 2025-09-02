import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // hamburger & close icons
import spidLogo from '../assets/SpidLogo.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="h-20 px-6 md:px-24 py-3 shadow-sm">
      <div className="flex items-center justify-between h-full">
        {/* Logo & left links */}
        <div className="flex items-center gap-9">
          <Link to={"/"}><img src={spidLogo} className="h-[35px] w-[68px]" alt="Spid Logo" /></Link>
          <div className="hidden md:flex gap-6">
            <span className="cursor-pointer">Personal</span>
            <span className="cursor-pointer">Business</span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <span className="cursor-pointer">Features</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Help</span>
          <div className="flex items-center gap-4">
            <Button
              className="bg-spid-inactive text-spid-primary font-[600] text-[16px] border-spid-primary"
              text="Log in"
              onClick={() => {}}
            />
            <Button
              className="bg-spid-primary text-[#F7F8FF] font-[600] text-[16px] border-2 border-spid-primary"
              text="Create Account"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden relative z-20 bg-white flex flex-col mt-4 gap-4 px-2">
          <span className="cursor-pointer">Personal</span>
          <span className="cursor-pointer">Business</span>
          <span className="cursor-pointer">Features</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Help</span>
          <div className="flex flex-col gap-2">
            <Button
              className="bg-spid-inactive text-spid-primary font-[600] text-[16px] border-spid-primary"
              text="Log in"
              onClick={() => {}}
            />
            <Button
              className="bg-spid-primary text-[#F7F8FF] font-[600] text-[16px] border-2 border-spid-primary"
              text="Create Account"
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
