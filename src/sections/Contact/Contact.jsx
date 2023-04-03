import './Contact.scss';
import { MdEmail } from 'react-icons/md';
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
          copyright {date} &copy; - mohamed abdalaziz
        </footer>
      </div>
    </section>
  )
}

export default Contact