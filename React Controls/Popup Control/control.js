const { customize } = wp;
const { Dashicon } = wp.components;
const { createRoot, useState, useEffect, useMemo, useRef } = wp.element;

/**
 * Component content 
 */
const THEMEPREFIXPopover = ( props ) => {
    const { setting } = props
    const { label, description } = customize.settings.controls[setting]
    const [ open, setOpen ] = useState( false )
    const containerRef = useRef( null )

    useEffect(() => {
        const sectionId =  customize.control( setting ).section()
        let sectionControls = customize.section( sectionId ).controls()
        sectionControls.map(( controlInstance ) => {
            const { params } = controlInstance
            if( controlInstance.active() ) {
                if( ! ( 'popover' in params ) ) params.popover = 'no_popover'
                if( params.popover === setting ) {
                    const { selector } = controlInstance
                    const controlElement = document.querySelector( selector )
                    if ( controlElement && containerRef.current  ) {
                        containerRef.current.appendChild( controlElement );
                    }
                }
            }
        })
    }, [ open ])

    /* On popover click */
    const onPopoverClick = () => {
        setOpen( ! open )
    }

    return <div className='field-main'>
        <div className='control-title'>
            { label && <span className='customize-control-title'>{ label }</span> }
            { description && <span className='customize-control-description'>{ description }</span> }
        </div>
        <Dashicon icon="edit" onClick={ onPopoverClick } />
        <ul className={ 'popup-controls ' + ( open ? 'is-open' : 'is-close' ) } ref={ containerRef }></ul>
    </div>
}


/**
 * Render the component
 */
const control = document.getElementsByClassName( "customize-popup-control" )
const setting = control.getAttribute( 'data-setting' );
const settingValue = customize.settings.settings[setting].value
if( control ) {
    createRoot( control ).render( <THEMEPREFIXPopover value={ settingValue } setting={ setting } /> )
}