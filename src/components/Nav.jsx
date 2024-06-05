import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', to: '/about' },
    { id: 'portfolio', label: 'Portfolio', to: '/portfolio' },
    { id: 'contact', label: 'Contact', to: '/contact' },
    { id: 'resume', label: 'Resume', to: '/resume' },
  ];

  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab.id}>
          <NavLink
            to={tab.to}
            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
