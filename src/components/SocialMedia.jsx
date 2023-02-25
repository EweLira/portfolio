import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillFilePdf } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div id='app__social'>
      <a
        href='https://docs.google.com/document/d/1GPMq9S_5iLfBBjxKE-0ctNYkDBJbhAyt_1GJNtdHKLU/edit?usp=sharing'
      >
        <div>
          <AiFillFilePdf />
        </div>
      </a>

      <a
        href='https://github.com/EweLira'
      >
        <div>
          <BsGithub />
        </div>
      </a>

      <a
        href='https://www.linkedin.com/in/ewellyn-lira/'
        
      >
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a
        href='https://wa.me/5581995925667'
       
      >
        <div>
          <RiWhatsappFill />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;