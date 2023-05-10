import React, { useEffect, useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import Web3Modal from 'web3modal'

import{
    checkIfWalletConnected,
    connectWallet,
    connectingWithBooToken,
    connectingWithDAIToken,
    connectingWithIWETHToken,
    connectingWithLifeToken,
    connectingWithSingleSwapToken
} from '../Utils/appFeatures'

import { IWETHABI } from './Constants'
import ERC20 from './ERC20.json'

export const SwapTokenContext = React.createContext()

export const SwapTokenContextProvider = ({ children }) => {

    const [account, setAccount] = useState("")
    const [ether, setEther] = useState("")
    const [networkConnect, setNetworkConnect] = useState("")
    const [weth9, setWeth9] = useState("")
    const [dai, setDai] = useState("")
    const [tokenData, setTokenData] = useState([])

    const addToken = [
        //"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "0x1c39BA375faB6a9f6E0c01B9F49d488e101C2011",
        "0xb04CB6c52E73CF3e2753776030CE85a36549c9C2"
    ]
    const fetchingData = async() => {
        try {
            const userAccount = await checkIfWalletConnected()
            //console.log(userAccount)
            setAccount(userAccount)

            const web3modal = new Web3Modal()
            const connection = await web3modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const balance  = await provider.getBalance(userAccount)
            const convertBal = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(convertBal)
            //console.log(balance)
            //console.log(ethValue)
            setEther(ethValue);

            const network = await provider.getNetwork()
            //console.log(network)
            setNetworkConnect(network.name)
            
            addToken.map(async (el, i) => {
                const contract = new ethers.Contract(el, ERC20, provider)
                //console.log(el, IWETHABI, provider)
                const userBalance = await contract.balanceOf(userAccount)
                const tokenLeft = BigNumber.from(userBalance).toString()
                const convertTokenBal = ethers.utils.formatEther(tokenLeft)
                //console.log(convertTokenBal)
                //console.log(contract)
                //console.log(userBalance)
                const symbol = await contract.symbol()
                const name = await contract.name()

                tokenData.push({
                    name: name,
                    symbol: symbol,
                    tokenBalance: convertTokenBal
                })
                //console.log(tokenData)
                
                const wethContract = await connectingWithIWETHToken()
                //console.log(weth)
                const wethBal = await wethContract.balanceOf(userAccount)
                const wethToken = BigNumber.from(wethBal).toString()
                const convertWethTokenBal = ethers.utils.formatEther(wethToken)
                setWeth9(convertWethTokenBal)

                const daiContract = await connectingWithDAIToken()
                const daiBal = await daiContract.balanceOf(userAccount)
                const daiToken = BigNumber.from(daiBal).toString()
                const convertDaiTokenBal = ethers.utils.formatEther(daiToken)
                setDai(convertDaiTokenBal)
                //console.log(dai, weth9)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchingData()
    }, [])

    const singleSwapToken = async() => {
        try {
            let singleSwapToken
            let weth
            let dai

            singleSwapToken = await connectingWithSingleSwapToken()
            weth = await connectingWithIWETHToken()
            dai = await connectingWithDAIToken()
            const amountIn = 10n ** 18n
            await weth.deposit({value: amountIn})
            await weth.approve(singleSwapToken.address, amountIn)

            await singleSwapToken.swapExactInputSingle(amountIn, {
                gasLimit: 300000    
            })
            const balance = await dai.balanceOf(account)
            const transferAmount = BigNumber.from(balance).toString()
            const ethValue = ethers.utils.formatEther(transferAmount)
            setDai(ethValue)
            console.log("DAI balance:", ethValue)
            // console.log(singleSwapToken)
            // console.log(weth)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     singleSwapToken()
    // }, [])
    
    return(
         <SwapTokenContext.Provider value={{connectWallet, account, weth9, dai, networkConnect, ether, tokenData, singleSwapToken}}>
            {children}
        </SwapTokenContext.Provider>
    )    
}