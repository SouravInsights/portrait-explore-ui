import React, { useState, useMemo, useCallback } from 'react';
import Image from "next/image";
import _ from 'lodash';
import { truncateAddress } from '@/utils/general'
import { useEnsName } from 'wagmi'

import { 
  Layout, 
  PortfolioCard, 
  PortfolioContainer, 
  Tab, 
  TabPanel,
  TabProvider,
  Modal,
  useModal,
  Chip,
  Button
} from '@/components'

import { 
  getAllPortfolios, 
  getPortfliosByKeyword, 
  getAllKeywords 
} from "@/gql/helpers/portfolios"

const staffPickPortfolioOwners = [
  "0xC7f3618C0C8Be10f45a2d04C7Eb11984D19F82Cd",
  "0xD606296ae3EE28F80A8C235a9FF110B29Cf87Dbe",
  "0x8bC13d488Eeb5E898cc9A55Bc0D2D3A2A75e1763",
  "0x5EC2D4bffc3ca3aA553d3e8D5e0e33ae0Afe2182",
  "0xdBe81D9643fEa57D2b383d9A207CAb7B4c68E50A",
  "0x4d55999b51a3dFc182dC9E066DAF356aC46Da10c",
  "0x30cF51554Ed7eC4f8fB8043DbEE6d82e9E5A24F8",
  "0x4bc8432edA11F334ADAD3224F728491FACCC710a",
  "0xa5Dc6aa4ff85079C86F5Fc4c7F2d8feb95fD8aa5"
]

export default function Home() {
  // const { loading, error, allPortfolios } = getAllPortfolios();

  const [currentTab, setCurrentTab] = useState(0)
  const { categories } = getAllKeywords();
  const { loading: loadingPortfolios, portfolios, loadNextPage } = getPortfliosByKeyword(categories[currentTab]);
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

  const handleTabSelect = useCallback((index: number) => {
    setCurrentTab(index);
  }, []);

  const memoizedTab = useMemo(
    () => (
      <Tab
        tabs={categories}
        defaultTab={0}
        onTabSelect={handleTabSelect}
      />
    ),
    [categories, handleTabSelect]
  );

  return (
    <Layout>
      <TabProvider>
        <div className="text-gray-300 font-[15px] font-medium pt-8">Categories</div>
          {memoizedTab}
        <TabPanel>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {loadingPortfolios ? <Button variant='dark' isLoading>Loading...</Button> : (
              <PortfolioContainer>
                {portfolios?.edges.map((item: any) => {
                  const authors = _.find(item.node.tags, { 'name': "Author" })
                  return (
                    <PortfolioCard 
                      key={item.node.id} 
                      portfolioId={item.node.id} 
                      selectedPortfolioId={selectedPortfolioId}
                      isPreviewOn={isOpen}
                      address={authors.value} 
                      isStaffPick={staffPickPortfolioOwners.includes(authors.value)}
                      onModalClick={handleModalClick}
                      onPortfolioClick={() => handlePortfolioClick(item.node.id, authors.value)}
                    />
                  )
                })}
              </PortfolioContainer>
            )}
            {portfolios?.pageInfo.hasNextPage && <Button variant='dark' onClick={loadNextPage}>Load more</Button>}
          </div>
        </TabPanel>
      </TabProvider>
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
    </Layout>
  )
}

const MemoizedTab = React.memo(Tab);