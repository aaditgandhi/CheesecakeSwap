// Boo deployed to 0x1c39BA375faB6a9f6E0c01B9F49d488e101C2011
// Life deployed to 0xb04CB6c52E73CF3e2753776030CE85a36549c9C2
// SmallS deployed to 0xc0c5618f0F3Fa66b496F2940f373DC366d765BAe
// SwapM deployed to 0xa195ACcEB1945163160CD5703Ed43E4f78176a54

import booToken from './BooToken.json'
import lifeToken from './LifeToken.json'
import singleSwapToken from './SingleSwapToken.json'
import swapMultiHop from './SwapMultiHop.json'
import IWETH from './IWETH.json'

export const BooTokenAddress = "0x1c39BA375faB6a9f6E0c01B9F49d488e101C2011"
export const BooTokenABI = booToken.abi

export const LifeTokenAddress = "0xb04CB6c52E73CF3e2753776030CE85a36549c9C2"
export const LifeTokenABI = lifeToken.abi

export const SingleSwapTokenAddress = "0xc0c5618f0F3Fa66b496F2940f373DC366d765BAe"
export const SingleSwapTokenABI = singleSwapToken.abi

export const SwapMultiHopAddress = "0xa195ACcEB1945163160CD5703Ed43E4f78176a54"
export const SwapMultiHopABI = swapMultiHop.abi

export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const IWETHABI = IWETH.abi
