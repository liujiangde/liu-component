import { css } from '@emotion/react';
import { ConfigProvider } from 'antd';
import React from 'react';

const useStyle = () => ({
  image: css`
    position: absolute;
    left: 0;
    top: -50px;
    height: 160px;
  `,
});

const locales = {
  cn: {
    assetsTitle: '组件丰富，选用自如',
    assetsDesc: '大量实用组件满足你的需求，灵活定制与拓展',
    designTitle: '设计语言与研发框架',
    designDesc: '配套生态，让你快速搭建网站应用',
  },
  en: {
    assetsTitle: 'Rich components',
    assetsDesc: 'Practical components to meet your needs, flexible customization and expansion',
    designTitle: 'Design and framework',
    designDesc: 'Supporting ecology, allowing you to quickly build website applications',
  },
};

const Homepage: React.FC = () => {

  return (
      <></>
  );
};

export default Homepage;
