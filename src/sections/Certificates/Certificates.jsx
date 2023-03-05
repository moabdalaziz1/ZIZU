import { useContext } from 'react';
import './Certificates.scss';
import { SectionTitle, Certificate, LoadButton } from '../../components/index';
import { FaCertificate } from 'react-icons/fa';

import certificateData from '../../data/certificatesData';
import { LoadMoreContext } from '../../Contexts/LoadMoreContext';


const Certificates = () => {

  const { next, setNext } = useContext(LoadMoreContext);
  const handleCertificates = () => setNext(prevState => ({
    ...prevState,
    certificates: prevState.certificates + 2
  }));

  return (
    <section className='certificates main p-md-5 px-3 py-5 bg-white' id='certificates'>
      <SectionTitle title='certificates' icon={<FaCertificate />} />
      <div className='row g-3'>
        {
          certificateData?.slice(0, next.certificates)?.map((item) => (
            <Certificate key={item.id} item={item} />
          ))
        }
      </div>
      {
        certificateData?.length > next.certificates && 
        <LoadButton handleClick={handleCertificates} />
      }
    </section>
  )
}

export default Certificates