const { TextControl, RadioControl } = wp.components
const { useState, useEffect } = wp.element

const NewsisFormControl = ( props ) => {
    let controlVariables = customize.settings.controls[props.setting]
    console.log( controlVariables )
    return (
        <div className='field-main'>
            <div className='control-title'>
                <span className='customize-control-title'>{ controlVariables.label }</span>
                { controlVariables.description && <p className='customize-control-description'>{ controlVariables.description }</p> }
            </div>
            <div className='control-content'>
                <div className='form-attrbutes'>
                    <TextControl 
                        label='Action' 
                        help="Specifies where to send the form-data when a form is submitted"
                    />
                    <RadioControl  
                        label='Method' 
                        help="Specifies the HTTP method to use when sending form-data"
                        options={[
                            { label: 'GET', value: 'get' },
                            { label: 'POST', value: 'post' }
                        ]}
                    />
                </div>
                <div className='form-creation-area'>
                    <h2 className='form-create-head'>Create Form</h2>
                    <div className='form-fields'>
                        <TextControl 
                            label='Test' 
                            help="Test Description"
                        />
                        <Button
                            className="form-field-add-button"
                            text="Add new form field"
                            variant='secondary'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// render form control
const formControls = document.getElementsByClassName( "customize-form-control-control" )
for( let formControl of formControls ) {
    const setting = formControl.getAttribute( 'data-setting' );
    const settingValue =  customize.settings.settings[setting].value
    if( formControl ) {
        render( <NewsisFormControl value={settingValue} setting={setting}/>, formControl )
    }
}