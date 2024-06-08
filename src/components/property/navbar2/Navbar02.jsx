"use client"
import Link from 'next/link';
import styles from './navbar2.module.css'

const Navbar02 = () => {



  return (
    <div className={`${styles.navbarContainer}`}>
      <Menu />
      
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
      <Link  onClick={handleNavLinkClick} href="#overview">Overview</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link  onClick={handleNavLinkClick} href="#seller">Specification</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link  onClick={handleNavLinkClick} href="#amenities">Amenities</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link  onClick={handleNavLinkClick} href="#mortgageCalculator">Mortgage Calculator</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link onClick={handleNavLinkClick} href="#aboutBuilder">About Builder</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link  onClick={handleNavLinkClick} href="#loalityOverview">Locality Overview</Link>
    </p>
    <p className="whitespace-nowrap" >
      <Link  onClick={handleNavLinkClick} href="#propertiesByBuilder">Properties By Builder</Link>
    </p>
  </>
  )
};

export default Navbar02