import React from 'react'

const Confirm = (props) => {

    const {values : {firstName, lastName, email, occupation, bio, city}} = props

    const prevStep = (e) => {
        e.preventDefault()
        props.prevStep()
    }

    const save = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, occupation, bio, city);
    }
    return (
        <div>
            <div className="container">
                <h2>confirm your details you can go back and edit</h2>
                <h3>{firstName}</h3>
                <br/>
                <h3>{lastName}</h3>
                <br/>
                <h3>{email}</h3>
                <br/>
                <h3>{occupation}</h3>
                <br/>
                <h3>{bio}</h3>
                <br/>
                <h3>{city}</h3>

                <br/><br/>
                <button class="btn waves-effect waves-light" onClick={prevStep} style={{background: 'red'}} >
                    back
                </button>

                <button class="btn waves-effect waves-light" type='submit' onClick={save}>
                    submit
                </button>
            </div>
        </div>
    )
}

export default Confirm
