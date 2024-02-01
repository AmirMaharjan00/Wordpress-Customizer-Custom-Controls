const { TextControl, RadioControl, Dashicon } = wp.components
const { useState, useEffect } = wp.element

const NewsisFormControl = ( props ) => {
    const [ fieldValue, setFieldValue ] = useState( props.value )
    const [ isNewAdded, setIsNewAdded ] = useState( false )
    const [ isInputTypeAdded, setIsInputTypeAdded ] = useState( false )
    const [ selectedInputType, setSelectedInputType ] = useState({ label: 'Text', slug: 'text' })
    const [ selectedFormField, setSelectedFormField ] = useState({})
    const [ formItems, setFormItems ] = useState([{ label: 'Text', slug: 'text' }])
    const [ fieldValues, setFieldValues ] = useState({})
    const [ fieldValueActive, setFieldValueActive ] = useState( false )
    const [ actionAttribute, setActionAttribute ] = useState( props.value.action || '' )
    const [ methodAttribute, setMethodAttribute ] = useState( props.value.method || 'GET' )
    let controlVariables = customize.settings.controls[props.setting]

    useEffect(() => {
        customize.value( props.setting )({
            action: actionAttribute,
            method: methodAttribute
        })
    },[actionAttribute, methodAttribute, isNewAdded])

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
            setFormItems([ ...formItems, element ])
        }
        setSelectedFormField( element )
    }

    // input type element click handle
    const handleInputTypeClick = ( element, event ) => {
        setSelectedInputType( element )
        setIsInputTypeAdded( isInputTypeAdded ? false : true )
        setIsNewAdded( false )
        setFormItems([ ...formItems, element ])
    }

    // add new form field click handle
    const handleAddNewFormFieldClick = () => {
        setIsNewAdded( isNewAdded ? false : true )
        setIsInputTypeAdded( false )
        console.log( actionAttribute )
        console.log( methodAttribute )
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
                return ( <TextControl 
                    label = { element.label } 
                    help = "Test Description"
                    key = { element.key }
                    type = { element.slug }
                /> )
            break;
        }
    }

    // clone form field handle
    const handleDuplicateFieldClick = ( element ) => {
        let insertAt = element.key + 1
        setFormItems([ ...formItems.slice( 0, insertAt ), { ...element, key: element.key++ }, ...formItems.slice( insertAt ) ])
    }

    // delete form field handle
    const handleDeleteFieldClick = ( element ) => {
        setFormItems( formItems.filter( formItem => formItem.key != element.key ) )
    }

    // handle field values click
    const handleFieldValueClick = () => {
        setFieldValueActive( fieldValueActive ? false : true )
    }

    // handle field value change
    const handleFieldValueChange = ( event ) => {
        let currentValue = event.target.value
    }

    const FormActions = ({ element }) => {
        return (
            <div className='form-field-actions'>
                <Dashicon icon="welcome-add-page" onClick={() => handleDuplicateFieldClick( element ) }/>
                <Dashicon icon="trash" onClick={() => handleDeleteFieldClick( element ) }/>
                <Dashicon icon="admin-generic" onClick = {() => handleFieldValueClick() } />
            </div>
        );
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
                        onChange = {( value ) => setActionAttribute( value ) }
                        value = { actionAttribute }
                    />
                    <RadioControl  
                        label='Method' 
                        help="Specifies the HTTP method to use when sending form-data"
                        options={[
                            { label: 'GET', value: 'GET' },
                            { label: 'POST', value: 'POST' }
                        ]}
                        selected = { methodAttribute }
                        onChange = {( value ) => setMethodAttribute( value ) }
                    />
                </div>
                <div className='form-creation-area'>
                    <h2 className='form-create-head'>Create Form</h2>
                    <div className='form-fields'>
                        <div className='form-fields-inner'>
                            { formItems.map(( element, index ) => { 
                                element.key = index
                                return ( 
                                    <div className='form-field'>
                                        {formField( element )}
                                        <FormActions element={ element } />
                                    </div>
                                )
                            }) }
                        </div>
                        <Button
                            className="form-field-add-button"
                            text="Add new form field"
                            variant='secondary'
                            onClick={ handleAddNewFormFieldClick }
                        />
                        { fieldValueActive && <div className='field-values-wrap'>
                            <TextControl
                                label='Label' 
                                help="Name of the field"
                                onChange = { handleFieldValueChange }
                            />
                            <TextControl
                                label='Description'
                                help="Description of the field"
                                onChange = { handleFieldValueChange }
                            />
                            <TextControl 
                                label='Value'
                                help="Value of the field"
                                onChange = { handleFieldValueChange }
                            />
                            <TextControl 
                                label='Placeholder'
                                help="Placeholder of the field"
                                onChange = { handleFieldValueChange }
                            />
                            <TextControl
                                label='Name'
                                help="Name of the field"
                                onChange = { handleFieldValueChange }
                            />
                        </div> }
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