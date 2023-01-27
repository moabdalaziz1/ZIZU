import './Contact.scss';
import { MdEmail } from 'react-icons/md';
import { FaCopyright } from 'react-icons/fa'
import { SectionTitle, Form, SocialMedia } from '../../components/index';

const Contact = () => {
  let date = new Date().getFullYear();

  return (
    <section className='contact main' id='contactMe'>
      <div className="overlay p-sm-5 px-3 p-5">
        <SectionTitle title='contact me' icon={<MdEmail />} />
        <Form />
        <SocialMedia />
        <footer>
          all rights reserved {date} <span><FaCopyright /></span>
        </footer>
      </div>
    </section>
  )
}

export default Contact