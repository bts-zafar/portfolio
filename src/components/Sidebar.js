import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin  from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import coder from '../assets/img.jpg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'
const Sidebar = () => {
    const handleEmailme = () => {
        window.open("mailto:rkzafar@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return(
        <motion.div className="sidebar"
        variants={sidebar_variant}
        initial='hidden'
        animate="visible"

    >
          <img src={coder} alt="avatar" className="sidebar_img" />
          <div className="sidebar_name">Zafar <span>Abbas</span></div>
          <div className="sidebar_item sidebar_title">Web Developer</div>
          <a href={resume} download="resume.pdf">
              <div className="sidebar_item sidebar_resume my-5">
                  <img src={tie} alt="resume" className="sidebar_icon mr-2 "/> Download Resume
              </div>
          </a>
         
          
          <div className="sidebar_contact">
          <div className=" sidebar_github">
          <a href="https://github.com/bts-zafar"><img src={github} alt="github" className="sidebar_icon mr-3 my-2"/>Github</a>
              </div>
              <div className="sidebar_location "><img src={pin} alt="location" className="sidebar_icon mt-2" />
            </div>
            <div className="sidebar_item">Lucknow, India</div>
              <div className="sidebar_item px-5">rkzafar@gmail.com</div>
              <div className="sidebar_item">8630220344</div>
          </div>
          <div className="sidebar_item sidebar_email" onClick={handleEmailme}>email me</div>
          <figure className="sidebar_social-icon m-4">
              <a href="https://www.facebook.com/rkzaz.99/"><img src={facebook} alt="facebook" className="sidebar_icon mx-3"/></a>
              <a href="https://www.instagram.com/az.zzzafar/"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
          </figure>
      </motion.div>
    )
}

export default Sidebar;