"use client"

import styles from './navbar2.module.css'
import Link from 'next/link';

const Navbar03 = () => {
<<<<<<< HEAD

    const Menu = () => (
        <>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Explore">Explore Neighbourhood</a>
          </p>
          <p>
            <a href="#Projects">Projects</a>
          </p>
          <p>
            <a href="#SimilarLocalities">Similar Localities</a>
          </p>
          <p>
            <a href="Developer">Developer</a>
          </p>
          <p>
            <a href="#Guides">Guides</a>
          </p>
        </>
    );
=======
  
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d

    return (
      <div className={styles.navbarContainer} >
        <Menu/>
      </div>
    )
}


const Menu = () => {

  const handleNavLinkClick = (e) => {

    e.preventDefault();
    let id = e.target.attributes.getNamedItem('href').value

    let el = document.getElementById(id)

    if(el){
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


  }

  return (
    <>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#About">About</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Explore">Explore Neighbourhood</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Projects">Projects</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#SimilarLocalities">Similar Localities</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#PhotoVideo">Photos & Videos</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="Developer">Developer</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Guides">Guides</Link>
      </p>
    </>
  )
};

export default Navbar03