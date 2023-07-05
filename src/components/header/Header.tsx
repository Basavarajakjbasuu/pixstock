import { useContext, useState, useEffect } from 'react'

import {
  MdOutlineArrowBack,
  MdOutlineClose,
  MdOutlineDarkMode,
  MdOutlineHistory,
  MdOutlineLightMode,
  MdOutlineMenu,
  MdOutlineSearch,
  MdOutlineVideocam,
  MdOutlineImage
} from "react-icons/md"


import './header.css'

import { ThemeContext } from "../../context/ThemeProvider";

const Header: React.FC = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  //activating header on scrollY > 50 with useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderActive(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`top-app-bar ${isHeaderActive ? 'active' : ''}`} data-header>
      
      {/* menu */}
      <button
        className="icon-btn"
        aria-label="Open menu"
        data-nav-toggler
        data-ripple
      >
        <span className="material-symbol-outlined">
        <MdOutlineMenu />
        </span>

        <div className="state-layer" /> 
      </button>

      {/* LOGO */}
      <a href="/" className="logo">Pixstock</a>

      {/* Search bar */}
      <div className="search-view" data-search-view>

        <div className="search-bar">

          <button
            className="icon-btn search-open"
            aria-label="Close search"
            data-search-toggler
            data-ripple
          >
            <span className="material-symbol-outlined">
              <MdOutlineArrowBack />
            </span>

            <div className="state-layer" />
          </button>

          
          <div className="input-wrapper">

            <span className="material-symbol-outlined leading-icon">
              <MdOutlineSearch />
            </span>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="input-field body-large"
              autoComplete="off"
              data-search-field
            />

          </div>

          <button
            className="icon-btn"
            aria-label="Clear search"
            data-search-clear-btn
            data-ripple
          >
            <span className="material-symbol-outlined">
              <MdOutlineClose />
            </span>
            <div className="state-layer" />
          </button>

          <button
            className="icon-btn search-btn"
            aria-label="Submit search"
            data-search-toggler
            data-ripple
            data-search-btn
          >
            <span className="material-symbol-outlined">
              <MdOutlineSearch />
            </span>

            <div className="state-layer" />
          </button>

          <div className="state-layer" /> 
        </div>

        <div className="search-view-content">

          <div className="btn-group" data-segment="search">

            <button
              className="btn-segment selected"
              data-ripple
              data-segment-btn
              data-segment-value="photos"
            >
              
              <span
                className="material-symbol-outlined"
                aria-hidden="true"
              >
                <MdOutlineImage />
              </span>

              <span className="label-large text">Photos</span>

              <div className="state-layer" /> 
            </button>

            
            <button
              className="btn-segment"
              data-ripple
              data-segment-btn
              data-segment-value="videos"
            >
              <span
                className="material-symbol-outlined"
                aria-hidden="true"
              >
                <MdOutlineVideocam />
              </span>

              <span className="label-large text">Videos</span>

              <div className="state-layer" /> 
            </button>

          </div>

        </div>

        <div className="divider"></div>

        <div className="list" data-search-list>

          <button className="list-item" data-ripple>
            <span className="material-symbol-outlined leading-icon">
              <MdOutlineHistory/>
            </span>

            <span className="body-large text">Nature</span>

            <div className="state-layer" /> 
          </button>

          <button className="list-item" data-ripple>
            <span className="material-symbol-outlined leading-icon">
              <MdOutlineHistory />
            </span>

            <span className="body-large text">Tree</span>
            
            <div className="state-layer" /> 
          </button>

          <button className="list-item" data-ripple>
          <span className="material-symbol-outlined leading-icon">
              <MdOutlineHistory/>
            </span>
            <span className="body-large text">Man portrait</span>
            
            <div className="state-layer" /> 
          </button>

          <button className="list-item " data-ripple>
            <span className="material-symbol-outlined leading-icon">
              <MdOutlineHistory />
            </span>

            <span className="body-large text">Mountain</span>
            
            <div className="state-layer" /> 
          </button>

        </div>


      </div>

      <button
        className="icon-btn search-open"
        aria-label="Open search"
        data-search-toggler
        data-ripple
      >
        <span className="material-symbol-outlined">
          <MdOutlineSearch />
        </span>

        <div className="state-layer" /> 
      </button>

      {/* Theme button */}
      <button
        className="icon-btn theme-btn"
        aria-label="Switch theme"
        data-theme-toggler
        data-ripple
        onClick={toggleTheme}
      >
        <span className="material-symbol-outlined dark-icon">
          <MdOutlineDarkMode />
        </span>

        <span className="material-symbol-outlined light-icon">
          <MdOutlineLightMode />
        </span>
        
        <div className="state-layer"  /> 
      </button>
    </header>
  )
}

export default Header