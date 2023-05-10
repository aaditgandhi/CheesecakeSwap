import React, {useState, useEffect, useContext} from 'react'
import './HeroSection.css'
import {FiSettings} from 'react-icons/fi'
import {FaEthereum} from 'react-icons/fa'
import SearchToken from '../SearchToken/SearchToken'
import Token from '../Token/Token'
import { SwapTokenContext } from '../../Context/SwapContext'
import { connectWallet } from '../../Utils/appFeatures'

const HeroSection = ({accounts, tokenData}) => {
    const[openSetting, setOpenSetting] = useState(false)
    const[openToken, setOpenToken] = useState(false)
    const[openTokensTwo, setOpenTokensTwo] = useState(false)

    const {singleSwapToken, connectWallet, account, ether, dai} = useContext(SwapTokenContext)

    const [tokenOne, setTokenOne] = useState({
        name: '',
        image: ''
    })

    const [tokenTwo, setTokenTwo] = useState({
        name: '',
        image: ''
    })

    return (
    <div className='HeroSection'>
        <div className='HeroSection_box'>
            <div className='HeroSection_box_heading'>
                <p>Swap</p>
                <div className='HeroSection_box_heading_img'>
                    <FiSettings width={50} height={50} onClick={() => setOpenSetting(true)}/>
                </div>
            </div>
            <div className='HeroSection_box_input'>
                <input type="text" placeholder='0' />
                <button onClick={() => setOpenToken(true)}>
                    <FaEthereum width={20} height={20}/>
                    {tokenOne.name}
                    <small>{ether.slice(0,7)}</small>
                </button>
            </div>
            <div className='HeroSection_box_input'>
                <input type="text" placeholder='0' />
                <button onClick={() => setOpenTokensTwo(true)}>
                    <FaEthereum width={20} height={20}/>
                    {tokenTwo.name}
                    <small>{dai.slice(0,7)}</small>
                </button>
            </div>
            {account ? (
                <button className='HeroSection_box_btn' onClick={() => singleSwapToken()}>
                    Swap
                </button>        
            ):(
                <button className='HeroSection_box_btn' onClick={() => connectWallet()}>
                    Connect Wallet
                </button>
            )}
        </div>
        {openSetting && <Token setOpenSetting={setOpenSetting} />}
        {openToken && (
            <SearchToken
                openToken = {setOpenToken}
                tokens = {setTokenOne}
                tokenData = {tokenData } 
            />
        )}
        {openTokensTwo && (
            <SearchToken
                openToken = {setOpenTokensTwo}
                tokens = {setTokenTwo}
                tokenData = {tokenData } 
            />
        )}
    </div>
  )
}

export default HeroSection