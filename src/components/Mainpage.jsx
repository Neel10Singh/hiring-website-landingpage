import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'
import jobanim from '../animation/Review Applications.json'
import neon from '../animation/neon.json'
import back from '../animation/back.json'
import Banner from './Banner'
import im1 from '../images/features/user-line-icon-neon-laser-lights-couple-or-group-sign-male-person-silhouette-symbol-glow-laser-speech-bubble-neon-lights-chat-bubble-banner-badge-with-couple-icon-vector-400-173243611.jpg'
import im2 from '../images/features/company.jpg'
import im3 from '../images/features/money.jpeg'
import im4 from '../images/features/lock.jpg'
import im5 from '../images/features/cands.jpg'
import im6 from '../images/features/resm.jpg'
import im7 from '../images/features/veri.jpg'
import im8 from '../images/features/mon.jpg'
import { images } from '../images2'
import Logo from '../images/Logo.png'

const callbackfuntion = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('featurebox')
    }
  })
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}
function Mainpage() {
  const skillRef = useRef(null)
  const skillRef2 = useRef(null)
  const skillRef3 = useRef(null)
  const skillRef4 = useRef(null)
  const skillRef5 = useRef(null)
  const skillRef6 = useRef(null)
  const skillRef7 = useRef(null)
  const skillRef8 = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(callbackfuntion, options)
    if (skillRef.current) observer.observe(skillRef.current)
    if (skillRef2.current) observer.observe(skillRef2.current)
    if (skillRef3.current) observer.observe(skillRef3.current)
    if (skillRef4.current) observer.observe(skillRef4.current)
    if (skillRef5.current) observer.observe(skillRef5.current)
    if (skillRef6.current) observer.observe(skillRef6.current)
    if (skillRef7.current) observer.observe(skillRef7.current)
    if (skillRef8.current) observer.observe(skillRef8.current)
  }, [
    skillRef,
    skillRef2,
    skillRef3,
    skillRef4,
    skillRef5,
    skillRef6,
    skillRef7,
    skillRef8,
    options,
  ])
  return (
    <div className='mainpage'>
      <div className='facediv'>
        <Lottie animationData={jobanim} className='jobanim'></Lottie>
        <div className='faceline1'></div>
        <div className='faceline3'></div>
        <h1>YOUR DREAM JOB RIGHT IN YOUR HAND</h1>
        <p>
          Join us and get one step closer to the job that you were always
          looking for
        </p>
        <button className='getstarted'>Get Started</button>
      </div>
      <div className='subface'></div>
      <div className='toppage'></div>
      <div className='companies'>
        <h3>Companies that can find you here</h3>
        <Banner images={images} />
      </div>
      <div className='features'>
        <h3>Perks of using jobify</h3>
        <Lottie animationData={back} className='backanim'></Lottie>
        <Lottie animationData={neon} className='neonanim' />
        <p>FOR CANDIDATES</p>
        <div className='featuresline1'></div>
        <div className='featuresline2'></div>
        <div className='row1'>
          <div className='er'>
            <div className='featureboxhidden' ref={skillRef}>
              <img src={im1}></img>
              <h3>Create free candidate profile</h3>
            </div>
            <div className='dot b1'></div>
            <div className='featurebox'></div>
          </div>
          <div className='er'>
            <div className='featurebox'></div>
            <div className='dot b2'></div>
            <div className='featureboxhidden' ref={skillRef2}>
              <h3>Companies compete to hire you</h3>
              <img src={im2}></img>
            </div>
          </div>
          <div className='er'>
            <div className='featureboxhidden ' ref={skillRef3}>
              <img src={im3}></img>
              <h3>Salary and role tranparency</h3>
            </div>
            <div className='dot b3'></div>
            <div className='featurebox'></div>
          </div>
          <div className='er'>
            <div className='featurebox'></div>
            <div className='dot b4'></div>
            <div className='featureboxhidden ' ref={skillRef4}>
              <h3>Current employers dont see your profile</h3>
              <img src={im4}></img>
            </div>
          </div>
        </div>
        <p>FOR RECRUITERS</p>
        <div className='row2'>
          <div className='er'>
            <div className='featureboxhidden ' ref={skillRef5}>
              <img src={im5}></img>
              <h3>10X more candidates for each roll</h3>
            </div>
            <div className='dot b5'></div>
            <div className='featurebox'></div>
          </div>
          <div className='er'>
            <div className='featurebox'></div>
            <div className='dot b6'></div>
            <div className='featureboxhidden ' ref={skillRef6}>
              <h3>Better resumes for easier shortlisting</h3>
              <img src={im6}></img>
            </div>
          </div>
          <div className='er'>
            <div className='featureboxhidden ' ref={skillRef7}>
              <img src={im7}></img>
              <h3>Verified Candidates</h3>
            </div>
            <div className='dot b7'></div>
            <div className='featurebox'></div>
          </div>
          <div className='er'>
            <div className='featurebox'></div>
            <div className='dot b8'></div>
            <div className='featureboxhidden' ref={skillRef8}>
              <h3>Minimal fee payable only after hiring</h3>
              <img src={im8}></img>
            </div>
          </div>
        </div>
      </div>
      <div className='contact'>
        <div className='bottomface'>
          <div className='bottomline1'></div>
          <div className='bottomline3'></div>
          <img src={Logo} className='logo' />
          <div style={{ zIndex: '5' }}>
            <div className='footerbox'>
              <span className='topic' style={{ color: '#8653E6 ' }}>
                Product
              </span>
              <a href='' className='content'>
                Product demo
              </a>
              <a href='' className='content'>
                Virtual product tour
              </a>
              <a href='' className='content'>
                What's new?
              </a>
              <a href='' className='content'>
                Pricing
              </a>
              <a href='' className='content'>
                Roadmap
              </a>
            </div>
            <div className='footerbox'>
              <span className='topic' style={{ color: '#E65353 ' }}>
                Features
              </span>
              <a href='' className='content'>
                Candidate profiles
              </a>
              <a href='' className='content'>
                Notifications
              </a>
              <a href='' className='content'>
                Branding
              </a>
              <a href='' className='content'>
                Mobile Optimised
              </a>
            </div>
          </div>
          <div style={{ zIndex: '5' }}>
            <div className='footerbox'>
              <span className='topic' style={{ color: '#E4E653 ' }}>
                Resources
              </span>
              <a href='' className='content'>
                Learn
              </a>
              <a href='' className='content'>
                Customer Reviews
              </a>
              <a href='' className='content'>
                Blog
              </a>
              <a href='' className='content'>
                Creative
              </a>
            </div>
            <div className='footerbox'>
              <span className='topic' style={{ color: '#E009EE ' }}>
                Help
              </span>
              <a href='' className='content'>
                Virtual Academy
              </a>
              <a href='' className='content'>
                Help Center
              </a>
              <a href='' className='content'>
                Proffessional Services
              </a>
              <a href='' className='content'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='footerbox'>
            <span className='topic' style={{ color: '#09A5EE ' }}>
              Leagal
            </span>
            <a href='' className='content'>
              Terms of Use
            </a>
            <a href='' className='content'>
              Privacy Policy
            </a>
            <a href='' className='content'>
              Cookie Preference
            </a>
            <a href='' className='content'>
              Remove My Data
            </a>
            <a href='' className='content'>
              Security Center
            </a>
          </div>
          <div className='footerbox'>
            <span className='topic' style={{ color: '#21EE09 ' }}>
              Company
            </span>
            <a href='' className='content'>
              About Us
            </a>
            <a href='' className='content'>
              Partners
            </a>
            <a href='' className='content'>
              Why Jobify
            </a>
            <a href='' className='content'>
              We are Hiring!
            </a>
          </div>
          <div className='mailing'>
            <span>For querries mail us at:</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <a href='mailto:jobify.help@gmail.com' className='mailbut'>
                <i className='fa fa-envelope'></i>
              </a>
              <p>jobify.help@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='bottomsubface'></div>
      </div>
    </div>
  )
}

export default Mainpage
