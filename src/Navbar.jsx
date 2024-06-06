import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        setHeight(`${linksHeight}px`);
      } else {
        setHeight('0px');
      }
    }
  }, [showLinks]);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt="logo" className='logo'/>
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
        <div className='links-container' ref={linksContainerRef}  style={{ height }}>
            <ul className="links" ref={linksRef}>
            {links.map((link) => {
                const {id, url, text} = link;
                    return <li key={id}><a href={url}>{text}</a></li>
                 })
              }
            </ul>
        </div>
    </div>
  </nav>
}

export default Navbar
