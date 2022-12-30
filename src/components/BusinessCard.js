import './BusinessCard.css';
import ProfilePic from './ProfilePic';
import MailAndLinkedInButtons from './MailAndLinkedInButtons';
import 'animate.css';

export default function FunFacts() {
  return (
    <article className="business-card-container animate__animated animate__fadeInLeft">
      <div className="business-card__profile-pic-container">
        <ProfilePic />
      </div>
      <h1 className='name'>Elad Sheskin</h1>
      <h4 className='role'>Fullstack Developer</h4>
      <p className='website'>elad.website</p>
      <MailAndLinkedInButtons />
      <h3 className='about'>About</h3>
    </article>);
}


