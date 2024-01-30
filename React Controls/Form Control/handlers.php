<?php
    // form control
    if( ! class_exists( 'Newsis_WP_Form_Control' ) ) :
        class Newsis_WP_Form_Control extends Newsis_WP_Base_Control {
            public $type = 'form-control';

            /**
             * Add custom JSON parameters to use in the JS template
             * 
             * @since 1.0.0
             * @access public
             * @return void
             */
            public function to_json() {
                parent::to_json();
                $this->json['choices'] = $this->choices;
            }
        }
    endif;

    if( ! function_exists( 'newsis_form_control' ) ) :
        function newsis_form_control( $wp_customize ) {
            // form control
            $wp_customize->add_setting( 'test_form_control', array(
                'default'   => ''
            ));
            $wp_customize->add_control(
                new Newsis_WP_Form_Control( $wp_customize, 'test_form_control', array(
                    'section'   => 'newsis_seo_misc_section',
                    'label'     => esc_html__( 'Form Control', 'newsis' ),
                    'description'   =>  esc_html__( 'Create a form of your choosing', 'newsis' )
                ))
            );
        }
        add_action( 'customize_register', 'newsis_form_control' );
    endif;