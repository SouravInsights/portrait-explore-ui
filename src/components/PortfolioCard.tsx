import React from "react";
import Image from "next/image";
import { IconButton, Chip } from '@/components'
import { truncateAddress } from '@/utils/general'
import { useEnsName } from 'wagmi'
import { ArrowsPointingInIcon, HandThumbUpIcon } from "@heroicons/react/24/solid"

type PortfolioCardProps = {
  address: `0x${string}`
  isFeatured?: boolean
  isStaffPick?: boolean
  portfolioId: string
  onModalClick: () => void
  onPortfolioClick?: () => void
  selectedPortfolioId?: string
  isPreviewOn?: boolean
}

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { address, isFeatured, isStaffPick, portfolioId, onModalClick, onPortfolioClick, selectedPortfolioId, isPreviewOn } = props
  const { data: ensName } = useEnsName({ address: address })
  const truncatedAddress = truncateAddress(address)

  return (
      <div onClick={onPortfolioClick} className={`relative flex max-w-[280px] max-h-[160px] bg-white ${isFeatured && "border border-2 border-black p-1"} ${isStaffPick && "border border-2 border-blue-600"} rounded-lg shadow`}>
        <Image 
          className={`rounded-lg realtive width-[280px] height-[160px] ${isFeatured || isStaffPick && "p-1"} `} 
          src={ selectedPortfolioId === portfolioId && isPreviewOn ? "https://res.cloudinary.com/dp5xqavlz/image/upload/v1684922875/placeholder_ld8kuk.png" : `https://arweave.net/${portfolioId}`}
          alt="Portfolio Thumbnail" 
          width={280}
          height={160}
        />
        {isFeatured && (
          <div className='absolute right-[-8px] top-[-12px]'>
            <Chip variant='dark' />
          </div>
        )}
        {isStaffPick && (
          <div className='absolute right-[-8px] top-[-12px]'>
            <Chip variant='special' />
          </div>
        )}
        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
          <Chip label={ensName || truncatedAddress} variant='light' />
        </div>
        
        <div className='absolute flex inset-0 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 opacity-0 hover:opacity-100 transition ease-in-out'>
          <IconButton variant='dark' onClick={onModalClick}>
            <ArrowsPointingInIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </IconButton>
          <IconButton variant='light'>
            <HandThumbUpIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </IconButton>
        </div>
      </div>
  )
}