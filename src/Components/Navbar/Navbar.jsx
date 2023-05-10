import React, {useEffect, useState} from 'react'
import Model from '../Model/Model'
import Tokenlist from '../Tokenlist/Tokenlist'
import './Navbar.css'
import logo from './CheesecakeSwap-logowithTitle.png'
import { Link } from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
import {FaEthereum} from 'react-icons/fa'
import { SwapTokenContext } from '../../Context/SwapContext'
import { useContext } from 'react'

export const Navbar = () => {
  const {ether, account, networkConnect, connectWallet, tokenData} = useContext(SwapTokenContext)
  const menuItems = [
    {
      name: 'Swap',
      link: '/'
    },
    {
      name: 'Tokens',
      link: '/'
    },
    {
      name: 'Pools',
      link: '/'
    }
  ]

  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)
  //const [account, setAccount] = useState(true)

  return (
    <div className='Navbar'>
      <div className='Navbar_box'>
        <div className='Navbar_box_left'>
          <div className='Navbar_box_left_image'>
            <img src={logo} alt="LOGO" width={180} height={50}/>
          </div>
          <div className='Navbar_box_left_menu'>
            {menuItems.map((el, i) => (
              <Link key={i + 1} to={{pathname: `${el.name}`}}>
                <p className='Style.Navbar_box_left_menu_item'>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className='Navbar_box_middle'>
          <div className='Navbar_box_middle_search'>
            <div className='Navbar_box_middle_search_img'>
              <BiSearchAlt width={20} height={20}/>
            </div>
            <input type="text" placeholder='Search Tokens' />
          </div>
        </div>
        <div className='Navbar_box_right'>
          <div className='Navbar_box_right_box'>
              <div className='Navbar_box_right_box_img'>
                <FaEthereum height={30} width={30}/>
              </div>
              <p>{networkConnect}</p>
          </div>
          {account ? (
            <button onClick={() => setOpenTokenBox(true)}>{account.slice(0,20)}..</button> 
          ) : (
            <button onClick={() => setOpenModel(true)}>Connect</button>
          )}
          
          {openModel && (
            <Model setOpenModel = {setOpenModel} connectWallet={connectWallet} />
          )}
        </div>
      </div>
      {openTokenBox && (
        <Tokenlist tokenData= {tokenData} setOpenTokenBox={setOpenTokenBox}/>
      )}
    </div>
  )
}
