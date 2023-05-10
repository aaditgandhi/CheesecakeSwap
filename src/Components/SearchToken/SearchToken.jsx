import React, { useState } from 'react'
import './SearchToken.css'
import {FaEthereum} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import ETH_LOGO from './download.png'

const SearchToken = ({openToken, tokens, tokenData}) => {
  const [active, setActive] = useState(1)
  const coin = [
    {
      img: ETH_LOGO,
      name:'ETH'
    },
    {
      img: ETH_LOGO,
      name:'HEY'
    },
    {
      img: ETH_LOGO,
      name:'DAI'
    },
    {
      img: ETH_LOGO,
      name:'NOO'
    },
    {
      img: ETH_LOGO,
      name:'BTC'
    },
    {
      img: ETH_LOGO,
      name:'BSC'
    },
    {
      img: ETH_LOGO,
      name:'DOG'
    },
    {
      img: ETH_LOGO,
      name:'CHS'
    }
  ]
  return (
    <div className='SearchToken'>
      <div className='SearchToken_box'>
        <div className='SearchToken_box_heading'>
          <h4>Select a Token</h4>
          <AiFillLock width={50} height={50} onClick={() => openToken(false)} />
        </div>
        <div className='SearchToken_box_search'>
          <div className='SearchToken_box_search_img'>
            <BiSearchAlt width={20} height={20}/>
          </div>
          <input type="text" placeholder='Search name and paste the address' />
        </div>
        <div className='SearchToken_box_token'>
          {coin.map((el,i) => (
            <span key={i+1} className={active == i + 1? `${active}` : ''} onClick={() => (setActive(i+1), tokens({name: el.name, image: el.img }))}>
              <img src={el.img } alt="IMAAGGGGEEE" width={30} height={30} className='aadit' />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchToken