import {useEffect, useState} from "react"

export default function User (props){
    const [isClicked, setIsClicked] = useState(false)

         useEffect(() => {
             console.log(isClicked)
         }, [isClicked])

           let newDateofBirth = new Date(props.person.dob.date).toDateString()
           let address = props.person.location
           let altProps = `${props.person.name.first} ${props.person.name.last}`
          return (
            // Add styling here
            <li className='Address' key={props.person.login.md5}>
              <img src={props.person.picture.large} alt={altProps}></img>
              <p className = 'Name'>{props.person.name.title} {props.person.name.first} {props.person.name.last}</p>
              <p>DOB: {newDateofBirth}</p>
              <button onClick={() => setIsClicked(!isClicked)}>Show Address</button>
              {isClicked && <><p>{address.street.number} {address.street.name}</p>
              <p>{address.city}, {address.state}  {address.country}  {address.postcode}</p></>}
            </li>
          );
        }
  
