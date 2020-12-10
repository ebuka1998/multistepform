import React from 'react'

const FormUserDetails = (props) => {

    const nextStep = (e) => {
        e.preventDefault()
        props.nextStep()
    }
  
    const {handleChange, values} = props

  


    return (
        <div class="container">
            <h5>enter user details</h5>
            <div className="row">
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                placeholder="Placeholder" 
                                id="first_name" 
                                name = 'firstName'
                                type="text" 
                                className="validate"
                                value = {values.firstName}
                                onChange = {handleChange('firstName')}
                            />
                            <label for="first_name">First Name</label>
                        </div>

                        <div className="input-field col s12">
                            <input 
                                id="last_name" 
                                type="text" 
                                className="validate" 
                                name='lastName'
                                value = {values.lastName}
                                onChange = {handleChange('lastName')}
                            
                            
                            />
                            <label for="last_name">Last Name</label>
                        </div>

                        <div className="input-field col s12">
                            <input 
                                id="email" 
                                type="email" 
                                className="validate" 
                                value = {values.email}
                                name = 'email'
                                onChange = {handleChange('email')}
                             
                            />
                            <label for="email">Email</label>
                        </div>

                        <button class="btn waves-effect waves-light" onClick={nextStep}>
                            continue
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}

export default FormUserDetails
