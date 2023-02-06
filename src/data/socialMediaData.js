import 
{ FaGithubSquare, 
  FaTwitterSquare, 
  FaLinkedin, 
  FaFacebookSquare,
  FaInstagramSquare } from 'react-icons/fa';

const socialMediaData = [
  {
    id: 1,
    href: 'https://twitter.com/m_abdalaziz_',
    colorClass: 'twitter',
    icon: <FaTwitterSquare />
  },
  {
    id: 2,
    href: 'https://www.instagram.com/mo_abdalaziz11/',
    colorClass: 'instagram',
    icon: <FaInstagramSquare />
  },
  {
    id: 3,
    href: 'https://www.facebook.com/profile.php?id=100007644693140',
    colorClass: 'facebook',
    icon: <FaFacebookSquare />
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/mohamed-abdalaziz-2a9606236/',
    colorClass: 'linkedIn',
    icon: <FaLinkedin />
  },
  {
    id: 5,
    href: 'https://github.com/moabdalaziz1',
    colorClass: 'github',
    icon: <FaGithubSquare />
  },
]

export default socialMediaData;