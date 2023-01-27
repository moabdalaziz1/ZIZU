import './SocialMedia.scss';
import socialMediaData from '../../data/socialMediaData';

const SocialMedia = () => {
  return (
    <div className="social-media">
      {
        socialMediaData.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target='_blank'
            rel="noreferrer"  
            className={`mx-1 ${item.colorClass}`}
          >
            {item.icon}
          </a>
        ))
      }
    </div>
  )
}

export default SocialMedia