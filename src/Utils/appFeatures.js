import { ethers } from "ethers";
import Web3Modal from 'web3modal'

import {
    BooTokenAddress, 
    BooTokenABI,
    LifeTokenAddress,
    LifeTokenABI,
    SingleSwapTokenABI,
    SingleSwapTokenAddress,
    SwapMultiHopABI,
    SwapMultiHopAddress,
    IWETHAddress,
    IWETHABI
} from '../Context/Constants'

export const checkIfWalletConnected = async() => {
    try {
       if(!window.ethereum) return console.log("Install Metamask")
       const accounts = await window.ethereum.request({
        method: "eth_accounts" ,      
       })
       const firstAccount = accounts[0];
       return firstAccount;
    } catch (error) {
        console.log(error)
    }
}
export const connectWallet = async() => {
    try {
        if(!window.ethereum) return console.log("Install Metamask")
        const accounts = await window.ethereum.request({
         method: "eth_requestAccounts" ,      
        })
        const firstAccount = accounts[0];
        return firstAccount;
     } catch (error) {
         console.log(error)
     }
}
export const fetchBooContract = (signerOrProvider) => new ethers.Contract(BooTokenAddress, BooTokenABI, signerOrProvider)
export const connectingWithBooToken = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect() 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchBooContract(signer)
        return contract;
    } catch (error) {
        console.log(error)
    }
}

export const fetchLifeContract = (signerOrProvider) => new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerOrProvider)
export const connectingWithLifeToken = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect() 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchLifeContract(signer)
        return contract;
    } catch (error) {
        console.log(error)
    }
}

export const fetchSingleSwapContract = (signerOrProvider) => new ethers.Contract(SingleSwapTokenAddress, SingleSwapTokenABI, signerOrProvider)
export const connectingWithSingleSwapToken = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect() 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchSingleSwapContract(signer)
        return contract;
    } catch (error) {
        console.log(error)
    }
}

// export const fetchMultiSwapContract = (signerOrProvider) => new ethers.Contract(SwapMultiHopAddress, SwapMultiHopABI, signerOrProvider)
// export const connectingWithMultiSwapToken = async () => {
//     try {
//         const web3modal = new Web3Modal()
//         const connection = await web3modal.connect() 
//         const provider = new ethers.providers.Web3Provider(connection)
//         const signer = provider.getSigner();
//         const contract = fetchMultiSwapContract(signer)
//         return contract;
//     } catch (error) {
//         console.log(error)
//     }
// }

export const fetchIWETHContract = (signerOrProvider) => new ethers.Contract(IWETHAddress, IWETHABI, signerOrProvider)
export const connectingWithIWETHToken = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect() 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchIWETHContract(signer)
        return contract;
    } catch (error) {
        console.log(error)
    }
}

const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
export const fetchDAIContract = (signerOrProvider) => new ethers.Contract(DAIAddress, IWETHABI, signerOrProvider)
export const connectingWithDAIToken = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect() 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchDAIContract(signer)
        return contract;
    } catch (error) {
        console.log(error)
    }
}