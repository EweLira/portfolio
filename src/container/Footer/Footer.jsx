import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';


import { client } from '../../client';
import { images } from '../../constants';


import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <h2 className='head-text'>Tome um café & converse comigo</h2>

      <div className='app__footer--cards'>
        <div className='app__footer--cards-card'>
          <a href='mailto:ewellynflira@gmail.com'>
            <div>
              <img src={images.email} alt='Email' />
              <p className='p-text'>ewellynflira@gmail.com</p>
            </div>
          </a>
        </div>

        <div className='app__footer--cards-card'>
          <a
            href='tel:+5581995925667
'
          >
            <div>
              <img src={images.mobile} alt='Phone' />
              <p className='p-text'>+55 (81) 99592-5667</p>
            </div>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          action='mailto:ewellynflira@gmail.com'
          method='post'
          encType='text/plain'
          className='app__footer--form app__flex'
        >
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Nome'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className='p-text'
              placeholder='Sua Mensagem'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>

          <button type='submit' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Envie sua mensagem' : 'Enviando...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}

    
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);