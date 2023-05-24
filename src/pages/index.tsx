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


export default function Home() {
  const { loading, error, allPortfolios } = getAllPortfolios();

  const [currentTab, setCurrentTab] = useState(0)
  const { categories } = getAllKeywords();
  const { loading: loadingPortfolios, portfolios, loadNextPage } = getPortfliosByKeyword(categories[currentTab]);
  console.log('portfolios:', portfolios);
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
        {/* <Tab index={0} label='All' /> */}
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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
                      isStaffPick
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