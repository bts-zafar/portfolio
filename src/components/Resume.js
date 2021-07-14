import React from 'react'
import react  from '../assets/icons/react.svg'
import Bar from './Bar'
import { motion } from 'framer-motion'
const languages = [
    {
        icon: react,
        name: 'NodeJS',
        level: '45'
    },
    {
        icon: react,
        name: 'ReactJS',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML/CSS',
        level: '80'
    },
    {
        icon: react,
        name: 'Java',
        level: '41'
    },
    {
        icon: react,
        name: 'PHP',
        level: '63'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Adobe Illustrator',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Corel Draw',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },
    {
        icon: react,
        name: 'Adobe XD',
        level: '65'
    },

]

const resume_variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.6,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const Resume = () => {
    return(
        <motion.div className="container resume"

        variants={resume_variants}
        initial="hidden"
        animate="visible"
        exit="exit"

    >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h5 className="resume-card_heading">
                        Education
                    </h5>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Computer Science Engg.
                        </h5>
                        <p className="resume-card_title">
                           S.R.M.U, Lucknow (2017-2021)
                        </p>
                        <p className="resume-card_details">
                        I am currently persuing B.tech in Computer Science Engineering from Academy of Technology
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                    Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                        Intern
                        </h5>
                        <p className="resume-card_title">
                            ADS Keytronics(2020)
                        </p>
                        <p className="resume-card_details">
                        I work as a intern in ADS Keytronics and also completed some projects on Php CMS.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-language">
                    <h5 className="resume-language_heading">
                    Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(languages => 
                                <Bar value= { languages }/>
                                )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-language">
                    <h5 className="resume-language_heading">
                        Tools and Software
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tools => <Bar value={tools} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Resume;