<?php
/**
 * Padding Control
 */

 if( class_exists( 'WP_Customize_Control' ) ) :
    class THEME_PREFIX_WP_Spacing_Control extends \WP_Customize_Control {
      /**
      * List of controls for this theme
      * 
      * @since 1.0.0
      */
      protected $type_array = [];
      public $type = 'spacing';
      public $tab = 'general';

      /**
      * Add custom JSON parameters to use in the JS template.
      * 
      * @since 1.0.0
      * @access public
      * @return void
      */
      public function to_json() {
         parent::to_json();
         if( $this->tab && $this->type != 'section-tab' ) {
            $this->json['tab'] = $this->tab;
         }
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
    add_action( 'customize_register', 'THEME_PREFIX_padding_control' );
}