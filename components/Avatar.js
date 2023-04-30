function Avatar({url,className,link }) {
    return (
        <a href={link}>
           <img 
             loading="lazy"
             className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
             src={url}
             alt="profile pic"
             href={link}
            />
        </a>
    )
}
export default Avatar;