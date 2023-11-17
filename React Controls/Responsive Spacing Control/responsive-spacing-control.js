const { RangeControl } = wp.components
const { useState, useEffect } = wp.element;

const BlogcastSpacing = (props) => {
    const [ inputs, setInputs ] = useState( props.value )
    const [ activeResponsive, setActiveResponsive ] = useState('desktop')

    useEffect(() => {
        customize.value( props.setting )( inputs )
    }, [ inputs[activeResponsive].top, inputs[activeResponsive].left, inputs[activeResponsive].bottom, inputs[activeResponsive].right ] )

    const handleClick = () => {
        setInputs({
            ...inputs,
            [activeResponsive]: {
                ...inputs[activeResponsive],
                'link': ( inputs[activeResponsive].link ? false : true )
            }
        })
    }

    const handleOnChange = ( newValue, side ) => {
        if( inputs[activeResponsive].link ){
            setInputs({
                ...inputs,
                [activeResponsive]: {
                    ...inputs[activeResponsive],
                    "top": newValue,
                    "right": newValue,
                    "bottom": newValue,
                    "left": newValue,
                }
            })
        } else {
            setInputs({
                ...inputs,
                [activeResponsive]: {
                    ...inputs[activeResponsive],
                    [side]: newValue
                }
            })
        }
    }

    const handleDashIconClick = ( type ) => {
        setActiveResponsive(type)
        let footer = document.getElementById('customize-footer-actions')
        if( type == 'desktop' ) footer.getElementsByClassName('preview-desktop')[0].click()
        if( type == 'tablet' ) footer.getElementsByClassName('preview-tablet')[0].click()
        if( type == 'smartphone' ) footer.getElementsByClassName('preview-mobile')[0].click()
    }

    return (
        <div className='field-main'>
            <div className='control-title'>
                <span className='customize-control-title'>{ customize.settings.controls[props.setting].label }</span>
                <div className='responsive-icons'>
                    <Dashicon className={activeResponsive == 'desktop' ? "desktop isactive" : 'desktop'} icon="desktop" onClick={() => handleDashIconClick('desktop') }/>
                    <Dashicon className={activeResponsive == 'tablet' ? "tablet isactive" : 'tablet'} icon="tablet" onClick={() => handleDashIconClick('tablet') }/>
                    <Dashicon className={activeResponsive == 'smartphone' ? "smartphone isactive" : 'smartphone'} icon="smartphone" onClick={() => handleDashIconClick('smartphone') }/>
                </div>
            </div>
            <div className='field-wrap'>
                <uL className={'dimensions' + ( inputs[activeResponsive].link ? ' isactive' : ' not-active' ) }>
                    <RangeControl
                        label="Top"
                        onChange={(newValue) => {handleOnChange( newValue, 'top' )} }
                        value={ inputs[activeResponsive].top }
                        min={-10000}
                        max={10000}
                    />
                    <RangeControl
                        label="Right"
                        onChange={(newValue) => {handleOnChange( newValue, 'right' )} }
                        value={ inputs[activeResponsive].right }
                        min={-10000}
                        max={10000}
                    />
                    <RangeControl
                        label="Bottom"
                        onChange={(newValue) => {handleOnChange( newValue, 'bottom' )} }
                        value={ inputs[activeResponsive].bottom }
                        min={-10000}
                        max={10000}
                    />
                    <RangeControl
                        label="Left"
                        onChange={(newValue) => {handleOnChange( newValue, 'left' )} }
                        value={ inputs[activeResponsive].left }
                        min={-10000}
                        max={10000}
                    />
                    <div className='link-wrap' onClick={ handleClick } data-side={'link'}><span className='linked'><i className='fas fa-link'></i></span></div>
                </uL>
            </div>
        </div>
    );
}