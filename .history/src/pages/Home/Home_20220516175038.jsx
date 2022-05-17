import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'


function Home() {
  return (
    <div>
        <div>
        <Sidebar/>
        <Header/>
        </div>
    </div>
  )
}

export default Home