import coursera from '../assets/images/certificates/coursera-logo.png'
import hsoub from '../assets/images/certificates/hsoub-logo.png'
import hsoubCertificate from '../assets/images/certificates/hsoub.png'
import reactBasics from '../assets/images/certificates/react-basics.png'
import advancedReact from '../assets/images/certificates/advaned-react.png'

const certificateData = [
  {
    id: 1,
    logo: hsoub,
    url: 'https://academy.hsoub.com/certificate/Y5GMRA8BR7PJ70Z2XFB6I2H2.pdf',
    title: 'Front-End web development',
    provider: 'hsoub academy',
    issued: 'August 2022',
    certificationID: 'Y5GMRA8BR7PJ70Z2XFB6I2H2',
    certificateImg: hsoubCertificate,
  },
  {
    id: 2,
    logo: coursera,
    url: 'https://www.coursera.org/account/accomplishments/verify/JQ9Z4T66CGSM',
    title: 'react basics',
    provider: 'coursera',
    issued: 'January 2023',
    certificationID: 'JQ9Z4T66CGSM',
    certificateImg: reactBasics,
  },
  {
    id: 3,
    logo: coursera,
    url: 'https://www.coursera.org/account/accomplishments/verify/CT6U2TGP6RUV',
    title: 'advanced react',
    provider: 'coursera',
    issued: 'January 2023',
    certificationID: 'CT6U2TGP6RUV',
    certificateImg: advancedReact,
  },
];

export default certificateData;
