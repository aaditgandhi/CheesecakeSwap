import React from 'react'
import './TokenList.css'
import {FiSettings} from 'react-icons/fi'

const Tokenlist = ({tokenData, setOpenTokenBox}) => {
  const data = [1,2,3,4,5,6,7]
  let tokenList = []
  for(let i = 0; i<tokenData.length; i++){
    if(i%2 == 1)tokenList.push(tokenData[i])
  }
  return (
    <div className='TokenList'>
      <p className='TokenList_close' onClick={() => setOpenTokenBox(false)}>
        <FiSettings width={50} height={50} />
      </p>
      <div className='TokenList_title'>
        <h2>Your Token List</h2>
      </div>
      {tokenList.map((el, i) =>(
        <div className='TokenList_box'>
          <div className='TokenList_box_info'>
            <p className='TokenList_box_info_symbol'>
              {el.symbol}
            </p>
            <p>
              <span>{el.tokenBalance}</span> {el.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tokenlist
