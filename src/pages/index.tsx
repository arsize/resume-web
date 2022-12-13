import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Content from '@/components/content'
import Footer from '@/components/footer'
import Header from '@/components/header'

import './index.less'

const Page = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Page
