import './Certificate.scss';
import { MainButton } from '../../components/index';
import { BiLinkExternal } from 'react-icons/bi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Certificate = ({ item }) => {

  const elementVariant = {
    visible: {scale: 1, opacity: 1, transition: {duration: 2, type: 'spring', bounce: 0.2}},
    hidden: {scale: 0, opacity: 0, transition: {duration: 2, type: 'spring', bounce: 0.2}}
  }

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={elementVariant}
      initial='hidden'
      animate={control}
      className="col-lg-6"
    >
      <div className="certificate">
        <div className="certificate-logo">
          <img src={item.logo} className="img-fluid logo" alt={item.title} />
        </div>
        <div className="certificate-body">
          <h5 className="certificate-title">
            <a 
              href={item.url}
              target='_blank'
              rel="noreferrer"
            >
              {item.title}
            </a>
          </h5>
          <span>provider: {item.provider}</span>
          <span>issued: {item.issued}</span>
          <span>Certification ID: {item.certificationID}</span>
          <div className="certificate-btn">
            <MainButton btnLink={item.url}>
              show credential <BiLinkExternal size='20px' />
            </MainButton>
          </div>
        </div>
        <div className="certificate-img">
          <a 
            href={item.url}
            target='_blank'
            rel="noreferrer"
          >
            <img src={item.certificateImg} alt={item.title} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Certificate