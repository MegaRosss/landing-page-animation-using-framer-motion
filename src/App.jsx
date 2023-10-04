
import React, { useState } from 'react';
import './App.scss';
import './sass/main.scss';
// import './sass/modal.scss';


import Header from './component/Header';
import Card from './component/Card';
// import ServiceSection from './component/card.jsx'
import Hero from './component/Hero';


import {motion} from 'framer-motion';
import Footer from './component/Footer';
import ModalBTN from './component/modal';



function App() {
  
  const [showModal, setShowModal] = useState(false)

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);



  
  
  
  return (
    <motion.div initial='initial' animate='animate'>
    <Header openModal={open} />
      <Hero />
      <Card />
      <Footer />
{    showModal &&  <ModalBTN setShowModal={setShowModal} handleClose={close} showModal={showModal} type={"dropIn"}/>
}      {/* {
        cardsData.map( (card)=><Card backgroundColor={card.backgroundColor} Icontype={card.Icontype} servicename={card.servicename}/> )
      }

      <ServiceSection /> */}
  



    </motion.div>
  );
}

export default App;


