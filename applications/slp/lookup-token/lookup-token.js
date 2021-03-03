/*
  Get the token information based on the id.
*/

// EDIT THIS WITH THE TOKEN ID YOU WANT TO LOOK UP
const TOKENID =
  // '8de4984472af772f144a74de473d6c21505a6d89686b57445c3e4fc7db3773b6'
  'c96230c6eec94729ab3bc4573bc45b345ad095c0c2094bb91bdc9a06bfa8283b' // bcPro - to be burned
  // '0c8d48bb808cf84705cd4c7cf27807d439a5dd032f662116966263226424805a' // EAT - to be burned
  // 'c4a119949f73ff7776992f7fa7131e7027bb8b1ac6d1840524469edd9cd751ee' // EAT
  // '5a68fe2909240832f5e3de0d57cb8d622934f47ee7ab7b2ba49d5295a581ca13' // bcPro

// Set NETWORK to either testnet or mainnet
const NETWORK = 'mainnet'

// REST API servers.
// const BCHN_MAINNET = 'https://bchn.fullstack.cash/v4/'
const ABC_MAINNET = 'https://abc.fullstack.cash/v4/'
const TESTNET3 = 'https://testnet3.fullstack.cash/v4/' // BCH testnet

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js based on the network.
let bchjs
if (NETWORK === 'mainnet') bchjs = new BCHJS({ restURL: ABC_MAINNET })
else bchjs = new BCHJS({ restURL: TESTNET3 })

async function lookupToken () {
  try {
    const properties = await bchjs.SLP.Utils.list(TOKENID)
    console.log(properties)
  } catch (err) {
    console.error('Error in getTokenInfo: ', err)
    throw err
  }
}
lookupToken()
