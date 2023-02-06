import './Certificate.scss';
import { MainButton } from '../../components/index';
import { BiLinkExternal } from 'react-icons/bi';


const Certificate = ({ item }) => {
  return (
    <div className="col-lg-6">
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
    </div>
  )
}

export default Certificate