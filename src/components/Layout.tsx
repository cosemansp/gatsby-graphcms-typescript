import React from 'react';
import Header from './Header';

import './index.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
