import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem] mt-4`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Discover, collect and sell extraordinary NFTs
                    </div>
                    <div className={style.description}>
                        OpenSea is the world&apos;s first and largest NFT marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                </div>               
                <div className={style.cardContainer}>
                    <img 
                        className="rounded-t-lg" 
                        src="https://lh3.googleusercontent.com/tUmThHik6uGhvOHorfVdt49aNC4us7m-8gdYG6UsWJYf-VHtdRHcPSVnw-rX7cmCJOJUsoMO39ZpgRse1bgce4oea2yBNKJ-hye7yA=s550" 
                        alt="" 
                    />
                    <div className={style.infoContainer}>
                        <img
                            className="h-[2.25rem] rounded-full"
                            src="https://lh3.googleusercontent.com/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec=s100" 
                            alt=""
                        />
                        <div className={style.author}>
                            <div className={style.name}>Jolly</div>
                            <a
                                className="text-[#1868b7]"
                                href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/75175737854990633963038132750829382025497231539213825528077744744957699162113"
                            >
                                hola-konola
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero