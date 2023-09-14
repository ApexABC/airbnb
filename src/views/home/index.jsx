import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import RoomList from '@/components/room-list'
import RoomSelection from '@/components/room-selection'
import { isObjHasVal } from '@/utils/judge'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import PlusSection from './c-cpns/plus-section'
import LongforSection from './c-cpns/longfor-section'

const Home = memo(() => {
  const { goodPriceInfo, heightScoreInfo, discountInfo, hotRecommendInfo, plusInfo, longforInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      heightScoreInfo: state.home.heightScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      plusInfo: state.home.plusInfo,
      longforInfo: state.home.longforInfo
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {isObjHasVal(discountInfo) && <RoomSelection info={discountInfo}></RoomSelection>}
        {isObjHasVal(hotRecommendInfo) && <RoomSelection info={hotRecommendInfo}></RoomSelection>}
        {isObjHasVal(longforInfo) && <LongforSection info={longforInfo}></LongforSection>}
        <SectionHeader title={heightScoreInfo.title} subTitle={heightScoreInfo.subtitle}></SectionHeader>
        <RoomList roomList={heightScoreInfo.list}></RoomList>
        <SectionFooter></SectionFooter>
        <SectionHeader title={goodPriceInfo.title}></SectionHeader>
        <RoomList roomList={goodPriceInfo.list}></RoomList>
        <SectionFooter></SectionFooter>
        <PlusSection plusInfo={plusInfo}></PlusSection>
      </div>
    </HomeWrapper>
  )
})

export default Home
