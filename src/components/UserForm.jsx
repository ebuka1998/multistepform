import React, {useState} from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetail from './FormPersonalDetail';
import Success from './Success';
import Confirm from './Confirm';

const UserForm = () => {

    const [step, setStep] = useState(1)

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        bio: '',
        city: '',
    })

       //methods to go the next step

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const {firstName, lastName, email, occupation, bio, city} = user
    const values = {firstName, lastName, email, occupation, bio, city}


    const handleChange = input => (e) => {
        setUser({
            ...user,
            [input]: e.target.value
        })
        console.log(user);
    }

    switch(step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values = {values}
                
                />
            )

        case 2:
            return (
                <FormPersonalDetail
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values = {values} 
                />
            )
        
        case 3:
            return(
                <Confirm 
                    prevStep={prevStep}
                    values = {values}
                />
            )
        case 4:
            return <Success/>
        default:
           ( console.log('this is a multipartstep form'))

    }
   
}

export default UserForm
