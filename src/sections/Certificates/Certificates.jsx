import './Certificates.scss';
import { SectionTitle, Certificate, LoadButton } from '../../components/index';
import { AiFillSafetyCertificate } from 'react-icons/ai';

import certificateData from '../../data/certificatesData';


const Certificates = ({ currentItems, handleCertificates }) => {
  return (
    <section className='certificates main p-md-5 px-3 py-5 bg-white' id='certificates'>
      <SectionTitle title='certificates' icon={<AiFillSafetyCertificate />} />
      <div className='row g-3'>
        {
          certificateData.slice(0, currentItems).map((item) => (
            <Certificate key={item.id} item={item} />
          ))
        }
      </div>
      {
        certificateData.length > currentItems && 
        <LoadButton handleClick={handleCertificates} />
      }
    </section>
  )
}

export default Certificates