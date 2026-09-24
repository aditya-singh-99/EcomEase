import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Amazon from './pages/Amazon.jsx'
import Flipkart from './pages/Flipkart.jsx'
import Meesho from './pages/Meesho.jsx'
import JioMart from './pages/JioMart.jsx'
import FirstCry from './pages/FirstCry.jsx'
import Myntra from './pages/Myntra.jsx'
import Ebay from './pages/Ebay.jsx'
import AdvertisementServices from './pages/AdvertisementServices.jsx'
import ContactUs from './pages/ContactUs.jsx'
import FBAEnrollment from './pages/FBAEnrollment.jsx'
import FBFEnrollment from './pages/FBFEnrollment.jsx'
import IXDEnrollment from './pages/IXDEnrollment.jsx'
import ReconciliationServices from './pages/ReconcilationServices.jsx'
import ShiprocketIntegration from './pages/ShiprocketIntegration.jsx'
import LogisticsIntegration from './pages/LogisticsIntegration.jsx'
import AmazonGlobalExpansion from './pages/AmazonGlobalExpansion.jsx'
import BrandStoreEBC from './pages/BrandStoreEBC.jsx'
import AccountReinstatement from './pages/AccountReinstatement.jsx'
import DropshippingSocial from './pages/DropshippingSocial.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route path='' element={<Home />} />

      <Route path='amazon-management-services' element={<Amazon />} />
      <Route path='flipkart-management-services' element={<Flipkart />} />
      <Route path='meesho-management-services' element={<Meesho />} />
      <Route path='jiomart-management-services' element={<JioMart />} />
      <Route path='firstcry-management-services' element={<FirstCry />} />
      <Route path='myntra-management-services' element={<Myntra />} />
      <Route path='ebay-management-services' element={<Ebay />} />

      <Route path='advertisement-services' element={<AdvertisementServices />} />
      <Route path='amazon-fba-enrollment' element={<FBAEnrollment/>} />
      <Route path='flipkart-fbf-enrollment' element={<FBFEnrollment/>} />
      <Route path='ixd-enrollment' element={<IXDEnrollment/>} />
      <Route path='reconcilation-services' element={<ReconciliationServices/>} />
      <Route path='shiprocket-integration' element={<ShiprocketIntegration/>} />
      <Route path='3pl-logistics-integration' element={<LogisticsIntegration/>} />
      
      <Route path='amazon-global-expansion' element={<AmazonGlobalExpansion />} />
      <Route path='brand-store-ebc-services' element={<BrandStoreEBC />} />
      <Route path='account-reinstatement-services' element={<AccountReinstatement />} />
      <Route path='dropshipping-social-commerce' element={<DropshippingSocial />} />

      <Route path='contact-us' element={<ContactUs />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

