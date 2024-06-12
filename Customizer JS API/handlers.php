<?php
/**
 * Send default value of controls by localizing
 * 
 * 
 */

 add_action( 'customize_controls_enqueue_scripts', function(){

    wp_enqueue_script( 
        'customizer-customizer-handlers',
        get_template_directory_uri() . '/inc/customizer/assets/handlers.js',
        [ 'jquery', 'customize-controls' ],
        BLOG_STYLE_VERSION,
        true
    );
    
     wp_localize_script(
            'customizer-customizer-handlers',
            'handlersObject', [
                'controlDefaults'   =>  BS\blog_style_customizer_default_array(),
                'pathToImage'   =>  get_template_directory_uri() . '/assets/images/customizer/'
            ]
        );
 } )