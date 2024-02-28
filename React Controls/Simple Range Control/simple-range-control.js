const { RangeControl } = wp.components
const { useState } = wp.element
// Range control
const THEME_PREFIXRange = ( props ) =>  {
    const [ range, setRange ] = useState( props.value )
    const [ initialValue ] = useState( props.value )

    const updateControl = ( newRange ) => {
        setRange( newRange )
        customize.value( props.setting )(newRange)
    }
    return (
        <RangeControl
            label = { customize.settings.controls[props.setting].label }
            description = { customize.settings.controls[props.setting].description }
            value = { range }
            allowReset = {customize.settings.controls[props.setting].input_attrs.reset}
            onChange = { ( newRange ) => updateControl( newRange ) }
            min = { customize.settings.controls[props.setting].input_attrs.min }
            max = { customize.settings.controls[props.setting].input_attrs.max }
            step = { customize.settings.controls[props.setting].input_attrs.step }
            resetFallbackValue = { initialValue }
        />
    )
}
