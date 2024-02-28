<?php
/**
 * Function to sanitize number control ( responsive )
 */

if( ! function_exists( 'THEME_PREFIX_sanitize_number_control' ) ) :
    function THEME_PREFIX_sanitize_number_control( $range, $setting ) {
        // Ensure input is an absolute integer.
        foreach( $range as $rangKey => $rang ) :
            $range[$rangKey] = is_numeric( $rang ) ? $rang: 0;
        endforeach;
        // Get the input attributes associated with the setting.
        $atts = $setting->manager->get_control( $setting->id )->input_attrs;

        // Get minimum number in the range.
        $min = ( isset( $atts['min'] ) ? $atts['min'] : $number );
        // Get maximum number in the range.
        $max = ( isset( $atts['max'] ) ? $atts['max'] : $number );
        // Get step.
        $step = ( isset( $atts['step'] ) ? $atts['step'] : 1 );

        // If the number is within the valid range, return it; otherwise, return the default
        return ( ( $min <= $range['smartphone'] && $range['smartphone'] <= $max && is_numeric( $range['smartphone'] / $step ) && ( $min <= $range['tablet'] && $range['tablet'] <= $max && is_numeric( $range['tablet'] / $step ) ? $range : $setting->default ) && ( $min <= $range['desktop'] && $range['desktop'] <= $max && is_numeric( $range['desktop'] / $step ) ? $range : $setting->default ) ) ? $range : $setting->default );
        }
 endif;