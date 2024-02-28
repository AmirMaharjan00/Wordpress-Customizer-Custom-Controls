<?php
/**
 * Responsive Range Control
 */
if( class_exists( 'WP_Customize_Control' ) ) :
    class THEME_PREFIX_WP_Responsive_Range_Control extends \WP_Customize_Control  {
        /**
         * List of controls for this theme
         * 
         * @since 1.0.0
         */
		public $type = 'responsive-range';

		/**
		 * Add custom JSON parameters to use in the JS template
		 * 
		 * @since 1.0.0
		 * @access public
		 * @return void
		 */
		public function to_json() {
			parent::to_json();
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

if( ! function_exists( 'THEME_PREFIX_responsive_range_control' ) ) {
    function THEME_PREFIX_responsive_range_control( $wp_customize ) {
       $wp_customize->add_setting( 'responsive_range', [
            'default'   =>  [
                'desktop'   =>  30,
                'tablet'   =>  20,
                'smartphone'   =>  10
            ],
            'sanitize_callback' =>  'THEME_PREFIX_sanitize_responsive_range',
            'transport' => 'postMessage'
        ]);
        $wp_customize->add_control(
            new THEME_PREFIX_WP_Responsive_Range_Control( $wp_customize, 'responsive_range', [
                'label' =>  esc_html__( 'Responsive range', 'text-domain' ),
                'settings'  =>  'responsive_range',
                'section'   =>  'your_section',
                'unit'  =>  'px',
                'input_attrs'   =>  [
                    'min'   =>  0,
                    'max'   =>  500,
                    'step'  =>  1,
                    'reset'    =>  true
                ]
            ])
        );
    }
    add_action( 'customize_register', 'THEME_PREFIX_responsive_range_control' );
}

