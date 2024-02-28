const { RangeControl, Tooltip, Dashicon } = wp.components
const { useState, useEffect } = wp.element;

const THEME_PREFIX_ResponsiveRange = ( props ) =>  {
    const [ icon, setIcon ] = useState('desktop')
    const [ range, setRange ] = useState(props.value)
    const [ initialRange ] = useState(props.value)

    useEffect(() => {
        customize.value( props.setting )(range)
    }, [ range.desktop, range.smartphone, range.tablet ])
    
    const updateIcon = (newIcon) => {
        const footer = document.getElementById( "customize-footer-actions" )
        if( newIcon == 'tablet' ) { 
            setIcon( 'tablet' )
            footer.getElementsByClassName( "preview-tablet" )[0].click()
        }
        if( newIcon == 'smartphone' ) {
            setIcon( 'smartphone' )
            footer.getElementsByClassName( "preview-mobile" )[0].click()
        }
        if( newIcon == 'desktop' ) {
            setIcon( 'desktop' )
            footer.getElementsByClassName( "preview-desktop" )[0].click()
        }
    }

    const triggerDevice = (device) => {
        if( device == 'mobile' ) {
            setIcon( 'smartphone' )
        } else {
            setIcon( device )
        }
    }

    useEffect(() => {
        const resFooter = document.getElementById( "customize-footer-actions" )
        const resFooterClass =  resFooter.getElementsByClassName( "devices-wrapper" )
        const buttons = resFooterClass[0].getElementsByTagName( "button" )
        for(  const button of buttons ) {
            button.addEventListener( "click", function() {
                const currentDevice =  button.getAttribute("data-device")
                triggerDevice(currentDevice)
            })
        }
    },[])

    return (
        <>
            <div className="responsive-icons">
                <Tooltip placement="top" delay={200} text={ __( escapeHTML( 'Desktop' ), 'text-domain' ) }><Dashicon className={ `responsive-trigger ${ ( icon == 'desktop' ) && "isActive" }` } icon="desktop" onClick={() => updateIcon("desktop") } /></Tooltip>
                <Tooltip placement="top" delay={200} text={ __( escapeHTML( 'Tablet' ), 'text-domain' ) }><Dashicon className={ `responsive-trigger ${ ( icon == 'tablet' ) && "isActive" }` } icon="tablet" onClick={() => updateIcon("tablet") } /></Tooltip>
                <Tooltip placement="top" delay={200} text={ __( escapeHTML( 'Mobile' ), 'text-domain' ) }><Dashicon className={ `responsive-trigger ${ ( icon == 'smartphone' ) && "isActive" }` } icon="smartphone" onClick={() => updateIcon("smartphone") } /></Tooltip>
            </div>
            <RangeControl
                label = { customize.settings.controls[props.setting].label }
                description = { customize.settings.controls[props.setting].description }
                value = { range[icon] }
                allowReset = {customize.settings.controls[props.setting].input_attrs.reset}
                onChange = { ( newRange ) => setRange({ ...range, [icon]: newRange }) }
                min = { customize.settings.controls[props.setting].input_attrs.min }
                max = { customize.settings.controls[props.setting].input_attrs.max }
                step = { customize.settings.controls[props.setting].input_attrs.step }
                resetFallbackValue = { initialRange[icon] }
            />
        </>
    )
}
