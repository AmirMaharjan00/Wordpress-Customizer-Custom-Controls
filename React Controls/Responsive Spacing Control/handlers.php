<?php
/**
 * Padding Control
 */
if( ! function_exists( 'THEME_PREFIX_padding_control' ) ) {
    function THEME_PREFIX_padding_control( $wp_customize ) {
        $wp_customize->add_setting( 'stt_padding', [
            'default'   =>  [ 
                'desktop' => [ 'top' => 2, 'right' => 2, 'bottom' => 2, 'left' => 2, 'link' => true ],
                'tablet' => [ 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'link' => true ],
                'smartphone' => [ 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'link' => true ]
            ],
            'sanitize_callback' =>  'THEME_PREFIX_sanitize_spacing_control',
            'transport' =>  'postMessage'
        ]);
        $wp_customize->add_control( 
            new THEME_PREFIX_WP_Spacing_Control( $wp_customize, 'stt_padding', [
                'label' =>  esc_html__( 'Padding', 'THEME_PREFIX' ),
                'section'   =>  'section_name_goes_here'
            ])
        );
    }
}