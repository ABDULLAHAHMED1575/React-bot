import React from 'react'
import Robort from '../robot.jpg'
import { motion } from 'framer-motion';
import '../../src/App.css'

export const Home = () => {
  return (
    <div className='mt-40 flex justify-center mr-56 '>
        <div>
            <div className='w-[500px] rounded-full'>
                <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                
            >
                <img src={Robort} alt="Robot" className='w-72 h-72 rounded-full' />
                <div className='text-2xl'>
                    Hi! Welcome to the Website
                </div>
                
                </motion.div>
            </div>
            <div>
                <div className='w-[500px] mt-4 rounded-full'>
                <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                
            >
                <div  className='text-xl text-start'>
                    This Websites Provides Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis facilis accusamus veritatis, doloremque quia ipsa illo harum! Ea cum perferendis vitae in nesciunt recusandae modi praesentium nobis officiis tempore.
                </div>
                
                </motion.div>
            </div>
            <div>
            <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 4 }}
                
            >
                <div className='text-3xl mt-4'>
                    In-order to access bot click on the Image below
                </div>
                
            </motion.div>
            </div>
        </div>
        </div>
    </div>
  );
}
