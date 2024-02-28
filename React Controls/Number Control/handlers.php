<?php
/**
 * Number control ( Simple and Responsive )
 */
if( class_exists( 'WP_Customize_Control' ) ) :
    class THEME_PREFIX_WP_Number_Control extends \WP_Customize_Control  {
        /**
         * List of controls for this theme
         * 
         * @since 1.0.0
         */
        public $type = 'number';
        public $fields;
        public $responsive = false;
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
            $this->json['fields'] = $this->fields;
            $this->json['responsive'] = $this->responsive;
            $this->json['input_attrs'] = $this->input_attrs;
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

if( ! function_exists( 'THEME_PREFIX_number_control' ) ) {
    function THEME_PREFIX_number_control( $wp_customize ) {
        // for non-responsive
        $wp_customize->add_setting( 'number', [
            'default'   =>  50,
            'sanitize_callback' =>  'absint',
            'transport' =>  'postMessage'
        ]);
        $wp_customize->add_control( 
            new THEME_PREFIX_WP_Number_Control( $wp_customize, 'number', [
                'label' =>  esc_html__( 'Padding', 'text-domain' ),
                'section'   =>  'section_name_goes_here',
                'input_attrs' => [
                    'min'   => 0,
                    'max'   => 50,
                    'step'  => 1,
                    'reset' => false
                ]
            ])
        );

        // for non-responsive
        $wp_customize->add_setting( 'number', [
            'default'   =>  [
                'desktop'   =>  30,
                'tablet'   =>  20,
                'smartphone'   =>  10
            ],
            'sanitize_callback' =>  'THEME_PREFIX_sanitize_number_control',
            'transport' =>  'postMessage'
        ]);
        $wp_customize->add_control( 
            new THEME_PREFIX_WP_Number_Control( $wp_customize, 'number', [
                'label' =>  esc_html__( 'Padding', 'text-domain' ),
                'section'   =>  'section_name_goes_here',
                'input_attrs' => [
                    'min'   => 0,
                    'max'   => 50,
                    'step'  => 1,
                    'reset' => false
                ],
                'responsive'    =>  true
            ])
        );
    }
    add_action( 'customize_register', 'THEME_PREFIX_number_control' );
}

