import { useEffect, useRef } from "react";

import {
  MdOutlineArrowBack,
  MdOutlineAutoAwesomeMosaic,
  MdOutlineFavoriteBorder,
  MdOutlineHome,
  MdOutlineImage,
  MdOutlineVideocam
} from "react-icons/md";

import './sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onCloseSidebar: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({isOpen, onCloseSidebar}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // if click on outside of sidebar that will close sidebar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onCloseSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onCloseSidebar]);

  return (
    <> 
      <nav
        className={`navigation ${isOpen ? 'show' : ''} `}
        ref={sidebarRef}
      >

        <div className="navigation-header">

          <button
            className="icon-btn"
            aria-label="Open menu"
            data-ripple
            onClick={onCloseSidebar}
          >
            <span className="material-symbol-outlined">
            <MdOutlineArrowBack />
            </span>

            <div className="state-layer" /> 
          </button>

          <a href="/" className="logo">Pixstock</a>
        </div>

        {/* nav list */}

        <ul className="drawer-list">

          <li className="drawer-item">

            <a href="/" className="drawer-link active">
              <span className="material-symbol-outlined">
                <MdOutlineHome />
              </span>

              <span className="label-large">Home</span>
            </a>

          </li>

          <li className="drawer-item">

            <a href="/" className="drawer-link">
              <span className="material-symbol-outlined">
                <MdOutlineImage />
              </span>

              <span className="label-large">Photos</span>
            </a>

          </li>

          <li className="drawer-item">

            <a href="/" className="drawer-link">
              <span className="material-symbol-outlined">
                <MdOutlineVideocam />
              </span>

              <span className="label-large">Videos</span>
            </a>

          </li>

          <li className="drawer-item">

            <a href="/" className="drawer-link">
              <span className="material-symbol-outlined">
                <MdOutlineAutoAwesomeMosaic />
              </span>

              <span className="label-large">Collections</span>
            </a>

          </li>

          <li className="drawer-item">

            <a href="/" className="drawer-link">
              <span className="material-symbol-outlined">
                <MdOutlineFavoriteBorder />
              </span>

              <span className="label-large">Favorite</span>
            </a>

          </li>

        </ul>

      </nav>

      <div className={`scrim ${isOpen? 'active' : ''}`} />
    </>


  )
};

export default Sidebar;