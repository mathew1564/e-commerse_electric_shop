import './Site.css'

export default function Site({icon,content}) {
    return (
        <>
        <div className='site-container'>
            <span className='site-icon'>

            {icon}
            </span>
            <div className="site-content">{content} </div>
        </div>
        </>
    )
}