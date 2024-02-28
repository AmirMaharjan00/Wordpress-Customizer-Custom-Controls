const { RangeControl, Dashicon } = wp.components
const { useState, useEffect } = wp.element;

const THEME_PREFIXNumber = ( props ) => {
    const [ value, setValue ] = useState( props.value )
    const [ activeResponsive, setActiveResponsive ] = useState( 'desktop' )
    const controlValues = customize.settings.controls[props.setting]

    useEffect(() => {
        customize.value( props.setting )( value )
    }, [ ( controlValues.responsive ) ? value[activeResponsive] : value ])

    // handle responsive icon click
    const handleDashIconClick = ( type ) => {
        setActiveResponsive(type)
        let footer = document.getElementById('customize-footer-actions')
        if( type == 'desktop' ) footer.getElementsByClassName('preview-desktop')[0].click()
        if( type == 'tablet' ) footer.getElementsByClassName('preview-tablet')[0].click()
        if( type == 'smartphone' ) footer.getElementsByClassName('preview-mobile')[0].click()
    }

    return (
        <>
            <div className='field-main'><div className='control-title'>
                <span className='customize-control-title'>{ controlValues.label }</span>
                    <div className='responsive-icons'>
                        <Dashicon className="control-reset" icon="image-rotate" onClick={() => { setValue( controlValues.default ) } }/>
                        { controlValues.responsive && <div className='reponsive-items'>
                            <Dashicon className={activeResponsive == 'desktop' ? "desktop isactive" : 'desktop'} icon="desktop" onClick={() => handleDashIconClick('desktop') }/>
                            <Dashicon className={activeResponsive == 'tablet' ? "tablet isactive" : 'tablet'} icon="tablet" onClick={() => handleDashIconClick('tablet') }/>
                            <Dashicon className={activeResponsive == 'smartphone' ? "smartphone isactive" : 'smartphone'} icon="smartphone" onClick={() => handleDashIconClick('smartphone') }/>
                        </div> }
                    </div>
                </div>
                <RangeControl
                    onChange = { ( newValue ) => setValue( ( controlValues.responsive ) ? { ...value, [activeResponsive]: newValue } : newValue ) }
                    value = { ( controlValues.responsive ) ? value[activeResponsive] : value }
                    min = { controlValues.input_attrs.min }
                    max = { controlValues.input_attrs.max }
                    step = { controlValues.input_attrs.step }
                    resetFallbackValue = { props.value }
                    allowReset = { controlValues.input_attrs.reset }
                />
            </div>
        </>
    );
}