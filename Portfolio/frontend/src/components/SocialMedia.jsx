import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <a href="https://web.facebook.com/digit.intel?_rdc=1&_rdr">
      <FaFacebookF />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;