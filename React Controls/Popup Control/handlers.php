<?php
/**
 * Popup control
 */
if( class_exists( 'WP_Customize_Control' ) ) :
    class THEME_PREFIX_WP_Popup_Control extends \WP_Customize_Control  {
        /**
         * List of controls for this theme
         * 
         * @since 1.0.0
         */
        public $type = 'popup';
        public $tab = 'general';
    
        /**
         * Add custom JSON parameters to use in the JS template.
         *
         * @since  1.0.0
         * @access public
         * @return void
         */
        public function to_json() {
            parent::to_json();
            $this->json['type'] = $this->type;
            $this->json['tab'] = $this->tab;
        }
    
        /**
         * Override control's content
         */
        public function render_content() {
            ?>
               <div class="<?php echo esc_attr( $this->type ); ?>" data-setting="<?php if( isset( $this->setting->id ) ) echo esc_attr( $this->setting->id ); ?>"></div>
            <?php
        }
    }
endif;

if( ! function_exists( 'THEME_PREFIX_popup_control' ) ) {
    function THEME_PREFIX_popup_control( $wp_customize ) {
        $wp_customize->add_setting( 'popup_control_id', [
            'sanitize_callback' => 'sanitize_text_field'
        ]);
        $wp_customize->add_control( 
            new THEME_PREFIX_WP_Popup_Control( $wp_customize, 'popup_control_id', [
                'label'	=>	esc_html__( 'popup', 'text-domain' ),
				'description'	=>	esc_html__( 'Lorem Ipsum is a dummy text', 'text-domain' ),
				'section'	=>	'popup_section'
            ])
        );

        // Any other custom control
        $wp_customize->add_setting( 'color_control', array(
            'default'   => '#fff',
            'transport' => 'postMessage',
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new THEME_PREFIX_color_control( $wp_customize, 'color_control', array(
                'label'	      => esc_html__( 'Background', 'pubnews-pro' ),
                'section'     => 'your_section',
                'settings'    => 'color_control',
                'popover'   =>  'popup_control_id'
            ))
        );
    }
    add_action( 'customize_register', 'THEME_PREFIX_popup_control' );
}

