import './profile.css'
export const Profile=({name ,email,personalInfo})=>{
    return(
        <>
        <div>
        <p>{name}</p>
    
       <p>{name}</p>
      <p>{email}</p>
       <p>{personalInfo}</p>
       <p>cvbnm</p>
       <button onClick={()=>{console.log('clicked')}}>clickmeeee</button>
        </div>
       
        </>
    )
}