
import './Contact.css'
export default function Contact({content,infor})
{
    return (
        <div className='contact-container'>
            <div className='contact-content'>{content}</div>
            <div className='contact-infor'>{infor}</div>
        </div>
    )
}