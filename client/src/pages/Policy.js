import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <p>Account Information” means data about how and when a BigCommerce account is accessed and the features used, including Store Information.</p>
        <p>“Browser Information” means provided by a browser, including the IP address, the website visited, network connection, device information, and other data, including Cookies.</p>
        <p>“Contact Information” means basic personal and business information, such as first and last name, company name, email address, postal address, phone number, and may include social media account information.</p>
        <p>“Device Information” means information about your device, such as device ID number, model, and manufacturer, version of your operating system and geographical region, collected from any devices when accessing our website, using the Mobile App, or any of our services</p>
        <p>“Payment Information” means, for example, credit card, ACH or other payment information.</p>
        
      </div>
    </div>
  </Layout>
  )
}

export default Policy