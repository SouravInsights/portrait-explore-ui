import React, { useState } from 'react';
import Image from "next/image";
import _ from 'lodash';
import { truncateAddress } from '@/utils/general'
import { useEnsName } from 'wagmi'

import { 
  PortfolioCard, 
  Modal,
  useModal,
  Chip,
} from '@/components'

const featuredPortfoliosData = [
  { 
    address: "0xC3Df999aAC2DDEcFA0a4d417cb9Fe080487614fA",
    isFeatured: true,
    portfolioId: "vsxq2wSc3Fgci-OZ8EaO1t49AbLw5eByMAirYF1o1JI"
  },
  { 
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    isFeatured: true,
    portfolioId: "o9ItY5zPWOWTzbETJxV-dPp-Pxy8tb3OZ6s2zdCIGgY"
  },
  { 
    address: "0xa5Dc6aa4ff85079C86F5Fc4c7F2d8feb95fD8aa5",
    isFeatured: true,
    portfolioId: "TY7gU_EBDa0nV6JvztNVsFSV7O_lypUfTHDA4VXzh6o"
  }
]

export const FeaturedPortfolioSection = () => {
  const { openModal, isOpen } = useModal()

  const handleModalClick = () => {
    openModal();
  };

  const [selectedPortfolioId, setSelectedPortfolioId] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<any>('');

  const handlePortfolioClick = (imageId: string, address: any) => {
    setSelectedPortfolioId(imageId);
    setSelectedAddress(address);
  };

  const { data: ensName } = useEnsName({ address: selectedAddress })
  const truncatedAddress = truncateAddress(selectedAddress)

  return (
    <div>
      <div className='inline-block max-w-min rounded-lg px-4 py-3 text-md drop-shadow-lg bg-black text-white hover:bg-gray-900 text-white'>
        Features of the week
      </div>
      <div className='flex flex-row gap-2'>
        {featuredPortfoliosData.map((data) => {
          <PortfolioCard 
            key={data.address} 
            portfolioId={data.portfolioId} 
            selectedPortfolioId={selectedPortfolioId}
            isPreviewOn={isOpen}
            address={data.address} 
            onModalClick={handleModalClick}
            onPortfolioClick={() => handlePortfolioClick(data.portfolioId, data.address)}
            isFeatured
          />
        })}
      </div>
      <Modal size="large">
        <Image 
          className={`rounded-lg width-[280px] height-[160px] trasition ease-linear z-0`} 
          src={`https://arweave.net/${selectedPortfolioId}`} 
          alt="Portfolio Thumbnail" 
          width={800}
          height={457}
        />
        <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
          <Chip label={ensName || truncatedAddress} variant='light' />
        </div>
      </Modal>
    </div>
  )
}