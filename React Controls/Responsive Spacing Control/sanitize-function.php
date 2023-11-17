<?php
/**
 * Function to sanitize responsive spacing control
 */

if( ! function_exists( 'THEME_PREFIX_sanitize_spacing_control' ) ) :
    function THEME_PREFIX_sanitize_spacing_control( $value, $setting ) {
        if( ! is_array( $value ) ) return $settings->default;
        // for desktop
        $value['desktop']['top'] = isset( $value['desktop']['top'] ) && is_int( $value['desktop']['top'] ) ? $value['desktop']['top'] : $setting->default['desktop']['top'];
        $value['desktop']['right'] = isset( $value['desktop']['right'] ) && is_int( $value['desktop']['right'] ) ? $value['desktop']['right'] : $setting->default['desktop']['right'];
        $value['desktop']['bottom'] = isset( $value['desktop']['bottom'] ) && is_int( $value['desktop']['bottom'] ) ? $value['desktop']['bottom'] : $setting->default['desktop']['bottom'];
        $value['desktop']['left'] = isset( $value['desktop']['left'] ) && is_int( $value['desktop']['left'] ) ? $value['desktop']['left'] : $setting->default['desktop']['left'];
        $value['desktop']['link'] = isset( $value['desktop']['link'] ) && is_bool( $value['desktop']['link'] ) ? $value['desktop']['link'] : $setting->default['desktop']['link'];
        // for tablet
        $value['tablet']['top'] = isset( $value['tablet']['top'] ) && is_int( $value['tablet']['top'] ) ? $value['tablet']['top'] : $setting->default['tablet']['top'];
        $value['tablet']['right'] = isset( $value['tablet']['right'] ) && is_int( $value['tablet']['right'] ) ? $value['tablet']['right'] : $setting->default['tablet']['right'];
        $value['tablet']['bottom'] = isset( $value['tablet']['bottom'] ) && is_int( $value['tablet']['bottom'] ) ? $value['tablet']['bottom'] : $setting->default['tablet']['bottom'];
        $value['tablet']['left'] = isset( $value['tablet']['left'] ) && is_int( $value['tablet']['left'] ) ? $value['tablet']['left'] : $setting->default['tablet']['left'];
        $value['tablet']['link'] = isset( $value['tablet']['link'] ) && is_bool( $value['tablet']['link'] ) ? $value['tablet']['link'] : $setting->default['tablet']['link'];
        // for smartphone
        $value['smartphone']['top'] = isset( $value['smartphone']['top'] ) && is_int( $value['smartphone']['top'] ) ? $value['smartphone']['top'] : $setting->default['smartphone']['top'];
        $value['smartphone']['right'] = isset( $value['smartphone']['right'] ) && is_int( $value['smartphone']['right'] ) ? $value['smartphone']['right'] : $setting->default['smartphone']['right'];
        $value['smartphone']['bottom'] = isset( $value['smartphone']['bottom'] ) && is_int( $value['smartphone']['bottom'] ) ? $value['smartphone']['bottom'] : $setting->default['smartphone']['bottom'];
        $value['smartphone']['left'] = isset( $value['smartphone']['left'] ) && is_int( $value['smartphone']['left'] ) ? $value['smartphone']['left'] : $setting->default['smartphone']['left'];
        $value['smartphone']['link'] = isset( $value['smartphone']['link'] ) && is_bool( $value['smartphone']['link'] ) ? $value['smartphone']['link'] : $setting->default['smartphone']['link'];

        return $value;
    }
 endif;