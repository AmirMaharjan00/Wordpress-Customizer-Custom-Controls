const { TextControl, RadioControl, Dashicon } = wp.components
const { useState, useEffect } = wp.element

const NewsisFormControl = ( props ) => {
    const [ fieldValue, setFieldValue ] = useState( props.value )
    const [ isNewAdded, setIsNewAdded ] = useState( false )
    const [ isInputTypeAdded, setIsInputTypeAdded ] = useState( false )
    const [ selectedInputType, setSelectedInputType ] = useState({ label: 'Text', slug: 'text' })
    const [ selectedFormField, setSelectedFormField ] = useState({})
    let controlVariables = customize.settings.controls[props.setting]

    const inputTypes = [
        { label: 'Button', slug: 'button' },
        { label: 'Checkbox', slug: 'checkbox' },
        { label: 'Color', slug: 'color' },
        { label: 'Date', slug: 'date' },
        { label: 'Datetime-local', slug: 'datetime-local' },
        { label: 'Email', slug: 'email' },
        { label: 'File', slug: 'file' },
        { label: 'Hidden', slug: 'hidden' },
        { label: 'Image', slug: 'image' },
        { label: 'Month', slug: 'month' },
        { label: 'Number', slug: 'number' },
        { label: 'Password', slug: 'password' },
        { label: 'Radio', slug: 'radio' },
        { label: 'Range', slug: 'range' },
        { label: 'Reset', slug: 'reset' },
        { label: 'Search', slug: 'search' },
        { label: 'Submit', slug: 'submit' },
        { label: 'Tel', slug: 'tel' },
        { label: 'Text', slug: 'text' },
        { label: 'Time', slug: 'time' },
        { label: 'Url', slug: 'url' },
        { label: 'Week', slug: 'week' },
    ]

    // form field elements
    const formFieldElements = [
        { label: 'Input Field', slug: 'input-field' },
        { label: 'Textarea Field', slug: 'textarea-field' },
        { label: 'Button Field', slug: 'button-field' },
        { label: 'Select Field', slug: 'select-field' }
    ]

    // form field element click handle
    const handleFormFieldClick = ( element, event ) => {
        if( element.slug == 'input-field' ) setIsInputTypeAdded( isInputTypeAdded ? false : true )
        setSelectedFormField( element )
        if( element.slug != 'input-field' ) setIsNewAdded( false )
    }

    // input type element click handle
    const handleInputTypeClick = ( element, event ) => {
        console.log( event )
        setSelectedInputType( element )
        setIsInputTypeAdded( isInputTypeAdded ? false : true )
        setIsNewAdded( false )
    }

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
                            onClick={() => { setIsNewAdded( isNewAdded ? false : true ) }}
                        />
                    </div>
                </div>
                { isNewAdded && <div className='form-fields-wrap'>
                    { isNewAdded && <div className='form-fields-elements-wrap'>
                        <ul className='form-field-elements'>
                            { formFieldElements.map(( element, index ) => { return <li key={ index } className={'form-field-element ' + element.slug } onClick={ ( event ) => ( handleFormFieldClick( element, event ) ) }><span className='form-field-label'>{ element.label }</span>{ ( element.slug == 'input-field' ) ? <span className='has-more-indicator'><Dashicon icon="arrow-right-alt2"/></span> : '' }</li> }) }
                        </ul>
                    </div> }
                    { isInputTypeAdded && <div className='input-type-elements-wrap'>
                        <ul className='input-type-elements'>
                            { inputTypes.map(( element, index ) => { return <li key={ index } className={'input-type-element' + ( selectedInputType.slug == element.slug ? ' isactive' : '' ) } onClick={ ( event ) => ( handleInputTypeClick( element, event ) ) }>{ element.label }</li> }) }
                        </ul>
                    </div>}
                </div>}
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