import Banner from '@/components/ContactUs/Banner'
import ContactDetails from '@/components/ContactUs/ContactDetails'
import ContactForm from '@/components/ContactUs/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div style={{backgroundColor: "rgb(0, 97, 253, 0.1)", paddingBottom: 55}}>
      <Banner />
      <ContactDetails />
      <ContactForm />
    </div>
  )
}

export default page
