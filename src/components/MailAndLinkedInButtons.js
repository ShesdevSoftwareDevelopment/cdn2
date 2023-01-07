import './MailAndLinkedInButtons.css';
import LinkedInIcon from './LinkedInIcon';
import EmailIcon from './EmailIcon';

export default function MailAndLinkedInButtons(props?) {
  if (props?.style?.opacity === 0) return (
    <section className="buttons-container">
    </section>);
  const goToLinkedin = () => {
    const link = 'https://www.linkedin.com/in/eladsheskin/';
    window.location.href = link;
  };
  const sendMail = () => {
    const link = 'mailto:fiveminutes001@gmail.com';
    window.location.href = link;
  }
  return (
    <section className="buttons-container">
      <button className='email' onClick={sendMail}>
        <EmailIcon />
        Email
      </button>
      <button className='linked-in' onClick={goToLinkedin}>
        <LinkedInIcon />
        LinkedIn
      </button>
    </section>);
}


