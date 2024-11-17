'use client';
import React from 'react';

const SocialLinks = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="bottom-container text-center ">
      <div id="cubeContainer">
        <div id="boxDiv">
          <div id="front">
            <div onClick={() => openInNewTab('https://www.facebook.com/pauljosef.agbuya')} style={{ cursor: 'pointer' }}>&nbsp;</div>
          </div>
          <div id="back">
            <div onClick={() => openInNewTab('https://www.youtube.com/channel/UCcjLvRL90XwBNxg9j_kBQWA')} style={{ cursor: 'pointer' }}>&nbsp;</div>
          </div>
          <div id="left">
            <div onClick={() => openInNewTab('https://twitter.com/PaulAgbuya')} style={{ cursor: 'pointer' }}>&nbsp;</div>
          </div>
          <div id="right">
            <div onClick={() => openInNewTab('mailto:pjagbuya2@gmail.com')} style={{ cursor: 'pointer' }}>&nbsp;</div>
          </div>
          <div id="top"></div>
          <div id="bottom"></div>
          <div className="shadow"></div>
        </div>
      </div>
      
      <div className="mx-auto gap-11">
        <a target="_blank" className="footer-link" href="https://www.youtube.com/channel/UCcjLvRL90XwBNxg9j_kBQWA">Youtube </a>|
        <a target="_blank" className="footer-link" href="https://twitter.com/PaulAgbuya">  Twitter </a>|
        <a target="_blank" className="footer-link" href="mailto:pjagbuya2@gmail.com">  Gmail </a>|
        <a target="_blank" className="footer-link" href="https://www.facebook.com/pauljosef.agbuya">  Facebook</a>
      </div>



      <p className="copyright">© 2024 Paul Josef Agbuya.</p>
    </div>
  );
};

export default SocialLinks;