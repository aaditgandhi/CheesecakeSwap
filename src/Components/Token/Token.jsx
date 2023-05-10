import React from 'react'
import './Token.css'
import Toggle from '../Toggle/Toggle'
import {FiSettings} from 'react-icons/fi'
import {AiFillLock} from 'react-icons/ai'

const Token = ({setOpenSetting}) => {
  return (
    <div className='Token'>
        <div className='Token_box'>
            <div className='Token_box_heading'>
                <h4>Setting</h4>
                <FiSettings width={50} height={50} onClick={() => setOpenSetting(false)} />
            </div>
            <p className='Token_box_para'>
                Slippage tolerance{""}
                <AiFillLock width={20} height={20} />
            </p>
            <div className='Token_box_input'>
                <button>Auto</button>
                <input type="text" placeholder='0.10%' />
            </div>
            <p className='Token_box_para'>
                Slippage tolerance{""}
                <AiFillLock width={20} height={20} />
            </p>
            <div className='Token_box_input'>
                <input type="text" placeholder='30' />
                <button>minutes</button>
            </div>
            <h2>Interface Setting</h2>
            <div className='Token_box_toggle'>
                <p className='Token_box_para'>Transaction deadline</p>
                <Toggle label='No' />
            </div>
        </div>
    </div>
  )
}

export default Token