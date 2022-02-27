import React from 'react'
import Header from '../../components/Headers'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
  }

const Nft = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectedNft] = useState()
    const [listings,setListings] = useState([])
    const router = useRouter()

    const nftModule = useMemo( () => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/TduS1sIlsj1SKSOSuWkGvAxqImkVJV_S'
        )
        return sdk.getNFTModule('0x9Af65aEdA5AbBdBb7BE6D668C300Ea392Aa04B83')
    }, [provider])

    useEffect(() => {
        if (!nftModule) return
        ;(async () => {
            const nfts = await nftModule.getAll()

            const selectedNft = nfts.find((nft) => nft.id === router.query.nftid)

            setSelectedNft(selectedNft)
        })()
    }, [nftModule])

    const marketPlaceModule = useMemo(() => {
        if (!provider) return
    
        const sdk = new ThirdwebSDK(
          provider.getSigner(),
          'https://eth-rinkeby.alchemyapi.io/v2/TduS1sIlsj1SKSOSuWkGvAxqImkVJV_S'
        )
        return sdk.getMarketplaceModule(
          '0x84B9ef6230050912adb5F020aA8bCC2af068461A'
        )
    }, [provider])
    
    // get all listings in the collection
    useEffect(() => {
        if (!marketPlaceModule) return
        ;(async () => {
          setListings(await marketPlaceModule.getAllListings())
        })()
    }, [marketPlaceModule])



    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                <div className={style.topContent}>
                    <div className={style.nftImgContainer}>
                    <NFTImage selectedNft={selectedNft} />
                    </div>
                    <div className={style.detailsContainer}>
                    <GeneralDetails selectedNft={selectedNft} />
                    <Purchase
                        isListed={router.query.isListed}
                        selectedNft={selectedNft}
                        listings={listings}
                        marketPlaceModule={marketPlaceModule}
                    />
                    </div>
                </div>
                <ItemActivity />
                </div>
            </div>
        </div>
    )
}

export default Nft