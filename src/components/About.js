import React from 'react'
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import Skillcard from './Skillcard';

import { motion } from 'framer-motion'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using Firebase and MongoDb",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "Problem Solving on HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "Minimalistic user interface designer using figma and framer"
    },
    {
        icon: computer,
        title: "Graphics Designer",
        about: "Digital art and character design in free time using Adobe Illustrator"
    },
]

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return(
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
           <h6 className="about_intro">
           I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.</h6>

        <div className="container about_container">
            <h6 className="about_heading"> What I Offer </h6>
            <div className="row">
                {
                        skills.map( skills => 
                           <Skillcard skills={skills}/>
                            )
                }
            </div>
        </div>
        </motion.div>
    );
}

export default About;