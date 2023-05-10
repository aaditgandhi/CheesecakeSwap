import React from 'react'
import './Model.css'
import {FiSettings} from 'react-icons/fi'

const Model = ({setOpenModel, connectWallet}) => {
  const walletMenu= ['Metamask', 'Coinbase', 'Wallet', 'WalletConnect']
  return (
    <div className='Model'>
      <div className='Model_box'>
        <div className='Model_box_heading'>
          <p>Connect Wallet</p>
          <div className='Model_box_heading_image'>
            <FiSettings width={50} height={50} onClick={() => setOpenModel(false)}/>
          </div>
        </div>
        <div className='Model_box_wallet'>
          {walletMenu.map((el, i) => (
            <p key={i+1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Model