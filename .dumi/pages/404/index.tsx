import { HomeOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link, useLocation } from 'dumi';
import React, { useEffect } from 'react';
// import * as utils from '../../theme/utils';

export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const DIRECT_MAP: Record<string, string> = {
  'docs/spec/download': 'docs/resources',
  'docs/spec/work-with-us': 'docs/resources',
};

const NotFoundPage: React.FC<NotFoundProps> = ({ router }) => {
  const { pathname } = useLocation();


  useEffect(() => {
    const directLinks = Object.keys(DIRECT_MAP);
    for (let i = 0; i < directLinks.length; i += 1) {
      const matchPath = directLinks[i];
      if (pathname.includes(matchPath)) {
        // router.replace(utils.getLocalizedPathname(`/${DIRECT_MAP[matchPath]}`, isZhCN).pathname);
      }
    }

    // Report if necessary
    const { yuyanMonitor } = window as any;
    yuyanMonitor?.log({
      code: 11,
      msg: `Page not found: ${location.href}; Source: ${document.referrer}`,
    });
  }, []);

  return (
    <Result
      status="404"
      title="404"
      subTitle={  '你访问的页面貌似不存在？' }

    />
  );
};

export default NotFoundPage;
