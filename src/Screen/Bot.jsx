import React, { useState, useEffect, memo } from 'react';
import logo from '../../src/robot.jpg';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const Bot = memo(() => {
  const [isVisible, setVisible] = useState(true);
  const [showBox, setShowBox] = useState(false);
  const [close, setClose] = useState(false);

  const handleClick = () => {
    setVisible(false);
    setShowBox(true);
    setClose(true);
  };
  
  const handleClick2 = () => {
    setVisible(true);
    setShowBox(false);
    setClose(false);
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hi, Welcome to our Website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'What is your name?',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, please select your issue',
      trigger: 'issue'
    },
    {
      id: 'issue',
      options: [
        { value: 'React', label: 'React', trigger: 'React' },
        { value: 'Angular', label: 'Angular', trigger: 'Angular' }
      ]
    },
    {
      id: 'React',
      message: 'Thanks for telling me your React issue',
      end: true
    },
    {
      id: 'Angular',
      message: 'Thanks for telling me your Angular issue',
      end: true
    }
  ];

  useEffect(() => {
    console.log('Bot component rendered');
  }, []);

  return (
    <>
      {isVisible && (
        <div className='flex justify-end'>
          <div className='custom-mt-top mr-2'>
            <img
              src={logo}
              alt="Chatbot Trigger"
              className='w-10 h-10 cursor-pointer hover:w-12 hover:h-12 rounded-full'
              onClick={handleClick}
            />
          </div>
        </div>
      )}
      {showBox && (
        <div className='flex justify-end'>
          <div className='fixed bottom-4 right-4 bg-opacity-50 custom-h-w'>
            <div>
              <div className='w-full custom-height flex justify-center'>
                {close && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 cursor-pointer'
                    onClick={handleClick2}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                  </svg>
                )}
                <Segment floated='right'>
                  <ChatBot steps={steps} />
                </Segment>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Bot;
