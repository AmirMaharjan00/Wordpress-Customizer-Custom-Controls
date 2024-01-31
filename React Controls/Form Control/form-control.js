const { TextControl, RadioControl, Dashicon } = wp.components
const { useState, useEffect } = wp.element

const NewsisFormControl = ( props ) => {
    const [ fieldValue, setFieldValue ] = useState( props.value )
    const [ isNewAdded, setIsNewAdded ] = useState( false )
    const [ isInputTypeAdded, setIsInputTypeAdded ] = useState( false )
    const [ selectedInputType, setSelectedInputType ] = useState({ label: 'Text', slug: 'text' })
    const [ selectedFormField, setSelectedFormField ] = useState({})
    const [ formItems, setFormItems ] = useState([{ label: 'Text', slug: 'text' }])
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
        if( element.slug != 'input-field' ) {
            setIsNewAdded( false )
            formItems.push( element )
            setFormItems( formItems )
        }
        setSelectedFormField( element )
    }

    // input type element click handle
    const handleInputTypeClick = ( element, event ) => {
        setSelectedInputType( element )
        setIsInputTypeAdded( isInputTypeAdded ? false : true )
        setIsNewAdded( false )
        formItems.push( element )
        setFormItems( formItems )
    }

    // add new form field click handle
    const handleAddNewFormFieldClick = () => {
        setIsNewAdded( isNewAdded ? false : true )
        setIsInputTypeAdded( false )
    }

    const formField = ( element ) => {
        switch( element.slug ) {
            case 'textarea-field': 
                return (
                    <TextareaControl 
                        label = { element.label }
                        key = { element.key }
                    />
                )
            break;
            case 'select-field': 
                return (
                    <SelectControl 
                        label = { element.label }
                        options = {[
                            { label: 'Big', value: '100%' },
                            { label: 'Medium', value: '50%' },
                            { label: 'Small', value: '25%' }
                        ]}
                        key = { element.key }
                    />
                )
            break;
            default:
                console.log( element )
                // <TextControl 
                //     label = { element.label } 
                //     help = "Test Description"
                //     key = { element.key }
                //     type = { element.slug }
                // />
            break;
        }
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
                        { formItems.map(( element, index ) => { 
                            element.key = index
                            return ( formField( element ) )
                         }) }
                        <Button
                            className="form-field-add-button"
                            text="Add new form field"
                            variant='secondary'
                            onClick={ handleAddNewFormFieldClick }
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