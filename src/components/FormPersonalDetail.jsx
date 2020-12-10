import React from 'react'

const FormPersonalDetail = (props) => {

    const nextStep = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const prevStep = (e) => {
        e.preventDefault()
        props.prevStep()
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
                                id="occupation" 
                                name = 'occupation'
                                type="text" 
                                className="validate"
                                value = {values.occupation}
                                onChange = {handleChange('occupation')}
                            />
                            <label for="first_name">occupation</label>
                        </div>

                        <div className="input-field col s12">
                            <input 
                                id="bio" 
                                type="text" 
                                className="validate" 
                                name='bio'
                                value = {values.bio}
                                onChange = {handleChange('bio')}
                            
                            
                            />
                            <label for="last_name">bio</label>
                        </div>

                        <div className="input-field col s12">
                            <input 
                                id="city" 
                                type="text" 
                                className="validate" 
                                value = {values.city}
                                name = 'city'
                                onChange = {handleChange('city')}
                             
                            />
                            <label for="email">city</label>
                        </div>

                        <button class="btn waves-effect waves-light" onClick={nextStep}>
                            continue
                        </button>
                        <button class="btn waves-effect waves-light" onClick={prevStep} style={{background: 'red'}}>
                            back
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}

export default FormPersonalDetail
