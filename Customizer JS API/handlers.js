(function( api, $ ) {
    api.bind( 'ready', function(){
        api.section( 'title_tagline' ).panel( 'site_identity_panel' );
        // api.section( 'title_tagline' ).params.title = 'Logo & Site Icon'
        const DEFAULTS = handlersObject.controlDefaults
        const PATHTOIMAGE = handlersObject.pathToImage

        class BlogStyleCustomizerList {
            /**
             * Returns list of all panels in the customizer
             * 
             * @since 1.0.0
             * @package Blog Style Pro
             */
            _getPanels = () => {
                return {
                    'site_identity_panel'   :   {
                        'title' :   'Site Identity',
                        'priority'  :   10
                    },
                    'global_panel'  :   {
                        'title' :   'Global',
                        'priority'  :   10
                    },
                    'colors_panel'  :   {
                        'title' :   'Colors',
                        'priority'  :   10
                    },
                    'theme_header_panel'    :   {
                        'title' :   'Theme Header',
                        'priority'  :   50
                    },
                    'archive_panel' :   {
                        'title' :   'Blog / Archives',
                        'priority'  :   80
                    },
                    'single_section_panel'  :   {
                        'title' :   'Single Post',
                        'priority'  :   80
                    },
                    'page_setting_panel'    :   {
                        'title' :   'Page Settings',
                        'priority'  :   80
                    }
                }
            }

            /**
             * Returns list of all section in the customizer
             * 
             * @since 1.0.0
             * @package Blog Style Pro
             */
            _getSections = () => {
                return {
                    'about_section' :    {
                        'title' :   'About Theme',
                        'priority'  :   1,
                        'customizeAction'   :   'Customizing'
                    },
                    'site_title_section'    :    {
                        'panel' :   'site_identity_panel',
                        'title' :   'Site Title & Tagline',
                        'priority'  :   30,
                        'customizeAction'   :   'Customizing'
                    },
                    'top_header_section'    :    {
                        'title' :   'Top Header',
                        'priority'  :   40,
                        'customizeAction'   :   'Customizing'
                    },
                    'theme_header_general_settings_section' :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'General Settings',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'header_menu_options_section'   :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Menu Options',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'header_live_search_section'    :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Search',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'custom_button_section' :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Custom Button',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'theme_mode_section'    :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Theme Mode',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'canvas_menu_section'   :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Off canvas',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'header_advertisement_banner_section'   :    {
                        'panel' :   'theme_header_panel',
                        'title' :   'Advertisement Banner',
                        'priority'  :   50,
                        'customizeAction'   :   'Customizing'
                    },
                    'main_banner_section'   :    {
                        'title' :   'Main Banner',
                        'priority'  :   70,
                        'customizeAction'   :   'Customizing'
                    },
                    'carousel_section'  :    {
                        'title' :   'Carousel',
                        'priority'  :   70,
                        'customizeAction'   :   'Customizing'
                    },
                    'video_playlist_section'    :    {
                        'title' :   'Video Playlist',
                        'priority'  :   71,
                        'customizeAction'   :   'Customizing'
                    },
                    'category_collection_section'   :    {
                        'title' :   'Category collection',
                        'priority'  :   71,
                        'customizeAction'   :   'Customizing'
                    },
                    'theme_presets_section' :    {
                        'panel' :   'colors_panel',
                        'title' :   'Theme Colors / Presets',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'category_colors_section'   :    {
                        'panel' :   'colors_panel',
                        'title' :   'Category Colors',
                        'priority'  :   20,
                        'customizeAction'   :   'Customizing'
                    },
                    'tag_colors_section'    :    {
                        'title' :   'Tag Colors',
                        'panel' :   'colors_panel',
                        'priority'  :   30,
                        'customizeAction'   :   'Customizing'
                    },
                    'seo_misc_section'  :    {
                        'panel' :   'global_panel',
                        'title' :   'SEO / Misc',
                        'customizeAction'   :   'Customizing'
                    },
                    'preloader_section' :    {
                        'panel' :   'global_panel',
                        'title' :   'Preloader',
                        'customizeAction'   :   'Customizing'
                    },
                    'website_layout_section'    :    {
                        'panel' :   'global_panel',
                        'title' :   'Website Layout',
                        'customizeAction'   :   'Customizing'
                    },
                    'animation_section' :    {
                        'title' :   'Animation / Hover Effects',
                        'panel' :   'global_panel',
                        'customizeAction'   :   'Customizing'
                    },
                    'social_icons_section'  :    {
                        'panel' :   'global_panel',
                        'title' :   'Social Icons',
                        'customizeAction'   :   'Customizing'
                    },
                    'buttons_section'   :    {
                        'panel' :   'global_panel',
                        'title' :   'Buttons',
                        'customizeAction'   :   'Customizing'
                    },
                    'post_format_section'   :    {
                        'panel' :   'global_panel',
                        'title' :   'Post Format',
                        'customizeAction'   :   'Customizing'
                    },
                    'breadcrumb_options_section'    :    {
                        'panel' :   'global_panel',
                        'title' :   'Breadcrumb Options',
                        'customizeAction'   :   'Customizing'
                    },
                    'stt_options_section'   :    {
                        'panel' :   'global_panel',
                        'title' :   'Scroll To Top',
                        'customizeAction'   :   'Customizing'
                    },
                    'global_sidebar_sticky_section' :    {
                        'panel' :   'global_panel',
                        'title' :   'Sidebar Sticky',
                        'customizeAction'   :   'Customizing'
                    },
                    'global_social_share_section'   :    {
                        'panel' :   'global_panel',
                        'title' :   'Social Share',
                        'customizeAction'   :   'Customizing'
                    },
                    'reset_section' :    {
                        'panel' :   'global_panel',
                        'title' :   'Reset To Default',
                        'customizeAction'   :   'Customizing'
                    },
                    'archive_general_section'   :    {
                        'panel' :   'archive_panel',
                        'title' :   'General Settings',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'category_archive_section'  :    {
                        'panel' :   'archive_panel',
                        'title' :   'Category Page',
                        'priority'  :   20,
                        'customizeAction'   :   'Customizing'
                    },
                    'tag_archive_section'   :    {
                        'panel' :   'archive_panel',
                        'title' :   'Tag Page',
                        'priority'  :   20,
                        'customizeAction'   :   'Customizing'
                    },
                    'author_archive_section'    :    {
                        'panel' :   'archive_panel',
                        'title' :   'Author Page',
                        'priority'  :   20,
                        'customizeAction'   :   'Customizing'
                    },
                    'pagination_settings_section'   :    {
                        'panel' :   'archive_panel',
                        'title' :   'Pagination Settings',
                        'priority'  :   30,
                        'customizeAction'   :   'Customizing'
                    },
                    'blog_single_general_settings'  :    {
                        'panel' :   'single_section_panel',
                        'title' :   'General Settings',
                        'priority'  :   80,
                        'customizeAction'   :   'Customizing'
                    },
                    'blog_single_elements_settings_section' :    {
                        'title' :   'Elements Settings',
                        'priority'  :   80,
                        'panel' :   'single_section_panel',
                        'customizeAction'   :   'Customizing'
                    },
                    'blog_single_toc_section'   :    {
                        'panel' :   'single_section_panel',
                        'title' :   'Table of Content',
                        'priority'  :   80,
                        'customizeAction'   :   'Customizing'
                    },
                    'blog_single_related_posts_section' :    {
                        'panel' :   'single_section_panel',
                        'title' :   'Related Posts',
                        'priority'  :   80,
                        'customizeAction'   :   'Customizing'
                    },
                    'page_settings_section' :    {
                        'panel' :   'page_setting_panel',
                        'title' :   'Page Settings',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'error_page_settings_section'   :    {
                        'panel' :   'page_setting_panel',
                        'title' :   '404 Page',
                        'priority'  :   30,
                        'customizeAction'   :   'Customizing'
                    },
                    'search_page_settings'  :    {
                        'panel' :   'page_setting_panel',
                        'title' :   'Search Page', 
                        'priority'  :   30,
                        'customizeAction'   :   'Customizing'
                    },
                    'instagram_section' :    {
                        'title' :   'Instagram Section',
                        'priority'  :   85,
                        'customizeAction'   :   'Customizing'
                    },
                    'customizer_you_may_have_missed_section'    :    {
                        'title' :   'You May Have Missed',
                        'priority'  :   85,
                        'customizeAction'   :   'Customizing'
                    },
                    'footer_section'    :    {
                        'title' :   'Theme Footer',
                        'priority'  :   85,
                        'customizeAction'   :   'Customizing'
                    },
                    'bottom_footer_section' :    {
                        'title' :   'Bottom Footer',
                        'priority'  :   85,
                        'customizeAction'   :   'Customizing'
                    },
                    'typography_section'    :    {
                        'title' :   'Typography',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'widget_styles_section' :    {
                        'title' :   'Widget Styles',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'mobile_options_section'    :    {
                        'title' :   'Mobile Options',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    },
                    'advertisement_section' :    {
                        'title' :   'Advertisement',
                        'priority'  :   10,
                        'customizeAction'   :   'Customizing'
                    }
                }
            }   // End of _getSections Method

            /**
             * Returns a complete parameters object
             * 
             * @since 1.0.0
             * @params default parameters of control
             * @params object to append to default object
             * @return object
             */
            _getParams = ( defaultParams = {}, append = {} ) => {
                if( Object.keys( append ).length !== 0 && typeof append === 'object' ) return { ...defaultParams, ...append }
                return defaultParams;
            }
    
            /**
             * Returns object of all checkbox type controls in the customizer
             * 
             * @since 1.0.0
             */
            _getCheckbox = () => {
                var defaultParams = {
                    'section'   :  'mobile_options_section',
                    'type'  :  'checkbox'
                };
                return {
                    'blogdescription_option'   :    this._getParams( defaultParams, {
                        'label' :   'Display site description',
                        'section'   :  'site_title_section',
                        'priority'  :  50
                    }),
                    'instagram_enable_slider_in_header'    :    this._getParams( defaultParams, {
                        'label' :   'Enable slider in header',
                        'section'   :  'instagram_section',
                    }),
                    'instagram_enable_slider_in_footer'    :    this._getParams( defaultParams, {
                        'label' :   'Enable slider in footer',
                        'section'   :  'instagram_section',
                    }),
                    'show_top_header_on_mobile' :   this._getParams( defaultParams, {
                        'label' :   'Show top header on mobile',
                    }),
                    'show_top_header_date_time_on_mobile' : this._getParams( defaultParams, {
                        'label' :   'Show date/time on mobile',
                    }),
                    'show_top_header_social_icon_on_mobile' :   this._getParams( defaultParams, {
                        'label' :   'Show social icons on mobile',
                    }),
                    'show_top_header_search_on_mobile' :    this._getParams( defaultParams, {
                        'label' :   'Show search on mobile',
                    }),
                    'sub_menu_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show sub menu on mobile',
                    }),
                    'show_menu_text_mobile_option'  :   this._getParams( defaultParams, {
                        'label' :   'Show menu text on mobile',
                    }),
                    'show_custom_button_mobile_option'  :   this._getParams( defaultParams, {
                        'label' :   'Show custom button on mobile',
                    }),
                    'show_custom_button_text_mobile_option' :   this._getParams( defaultParams, {
                        'label' :   'Show custom button text on mobile',
                    }),
                    'header_search_mobile_option'   :   this._getParams( defaultParams, {
                        'label' :   'Show header search on mobile',
                    }),
                    'show_theme_mode_mobile_option' :   this._getParams( defaultParams, {
                        'label' :   'Show theme mode on mobile',
                    }),
                    'show_canvas_menu_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show canvas menu on mobile',
                    }),
                    'show_main_banner_excerpt_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show main banner excerpt on mobile',
                    }),
                    'show_carousel_banner_excerpt_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show carousel banner excerpt on mobile',
                    }),
                    'show_video_playlist_in_mobile' :   this._getParams( defaultParams, {
                        'label' :   'Show video playlist on mobile',
                    }),
                    'show_archive_excerpt_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show archive excerpt on mobile',
                    }),
                    'show_archive_category_in_mobile'  :    this._getParams( defaultParams, {
                        'label' :   'Show archive category on mobile',
                    }),
                    'show_archive_date_in_mobile'   :   this._getParams( defaultParams, {
                        'label' :   'Show archive date on mobile',
                    }),
                    'show_author_meta_text' :   this._getParams( defaultParams, {
                        'label' :   'Show author text on mobile',
                    }),
                    'show_archive_author_mobile_option' :   this._getParams( defaultParams, {
                        'label' :   'Show archive author on mobile',
                    }),
                    'show_readmore_text_mobile_option'  :   this._getParams( defaultParams, {
                        'label' :   'Show readmore text on mobile',
                    }),
                    'show_readmore_button_mobile_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show readmore button on mobile',
                    }),
                    'show_readtime_mobile_option'   :   this._getParams( defaultParams, {
                        'label' :   'Show readtime on mobile',
                    }),
                    'show_comment_number_mobile_option' :   this._getParams( defaultParams, {
                        'label' :   'Show comment number on mobile',
                    }),
                    'show_left_sidebar_mobile_option'   :   this._getParams( defaultParams, {
                        'label' :   'Show left sidebar on mobile',
                    }),
                    'show_right_sidebar_mobile_option'  :   this._getParams( defaultParams, {
                        'label' :   'Show right sidebar on mobile',
                    }),
                    'show_background_animation_on_mobile'   :   this._getParams( defaultParams, {
                        'label' :   'Show background animation on mobile',
                    }),
                    'scroll_to_top_mobile_option'   :   this._getParams( defaultParams, {
                        'label' :   'Show scroll to top on mobile',
                    }),
                    'social_share_mobile_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show social share on mobile',
                    }),
                    'show_table_of_content_label_on_mobile'   : this._getParams( defaultParams, {
                        'label' :   'Show table of content label on mobile',
                    })
                };
            }   // End of _getCheckbox Method

            /**
             * Returns list of all the toggle controls in the customizer
             * 
             * @since 1.0.0
             */
            _getToggle = () => {
                var defaultParams = {
                    'type'  :  'toggle-button'
                };
                return {
                    'top_header_option' :   this._getParams( defaultParams, {
                        'label'	      :  'Show top header',
                        'description' :  'Toggle to enable or disable top header bar',
                        'section'     : 'top_header_section'
                    }),
                    'blog_style_header_live_search_option'   :   this._getParams( defaultParams, {
                        'label' :   'Enable Search',
                        'section'   :  'header_live_search_section'
                    }),        
                    'blog_style_header_custom_button_option' :   this._getParams( defaultParams, {
                        'label' :   'Show Custom Button',
                        'section'   :  'custom_button_section'
                    }),        
                    'blog_style_theme_mode_option'   :   this._getParams( defaultParams, {
                        'label' :   'Theme Mode',
                        'section'   :  'theme_mode_section'
                    }),        
                    'canvas_menu_enable_disable_option' :   this._getParams( defaultParams, {
                        'label' :   'Enable Canvas Menu',
                        'section'   :  'canvas_menu_section'
                    }),        
                    'header_ads_banner_option'  :   this._getParams( defaultParams, {
                        'label'	      :  'Enable advertisement banner',
                        'section'     : 'header_advertisement_banner_section'
                    }),
                    'main_banner_option'    :   this._getParams( defaultParams, {
                        'label'	      :  'Show main banner',
                        'section'     : 'main_banner_section'
                    }),       
                    'main_banner_center_mode'   :   this._getParams( defaultParams, {
                        'label' :   'Enable Center Mode',
                        'section'   :  'main_banner_section',
                        'description'   :   'Center Mode is not compatible when slider fade is enabled'
                    }),
                    'carousel_option'   :   this._getParams( defaultParams, {
                        'label'	      :  'Show carousel',
                        'section'     : 'carousel_section'
                    }),
                    'video_playlist_option' :   this._getParams( defaultParams, {
                        'label'	      :  'Show video playlist',
                        'section'     : 'video_playlist_section'
                    }),        
                    'category_collection_option'    :   this._getParams( defaultParams, {
                        'label'	      :  'Enable category collection',
                        'section'     : 'category_collection_section'
                    }),        
                    'site_schema_ready' :   this._getParams( defaultParams, {
                        'label'	      :  'Make website schema ready',
                        'section'     : 'seo_misc_section'
                    }),        
                    'blog_style_disable_admin_notices'   :   this._getParams( defaultParams, {
                        'label'	      :  'Disabled the theme admin notices',
                        'description'	      :  'This will hide all the notices or any message shown by the theme like review notices, change log notices',
                        'section'     : 'seo_misc_section'
                    }),
                    'preloader_option'  :   this._getParams( defaultParams, {
                        'label'	      :  'Enable site preloader',
                        'section'     : 'preloader_section'
                    }),        
                    'aos_animation_option'  :   this._getParams( defaultParams, {
                        'label'	      :  'Enable AOS Animation',
                        'section'     : 'animation_section'
                    }),        
                    'blog_style_scroll_to_top_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show Scroll to Top',
                        'section'   :  'stt_options_section'
                    }),
                    'social_share_option'   :   this._getParams( defaultParams, {
                        'label'	      :  'Enable Social Share',
                        'section'     : 'global_social_share_section'
                    }),
                    'archive_category_info_box_option'  :   this._getParams( defaultParams, {
                        'label' :   'Show category info box',
                        'section'   :  'category_archive_section'
                    }),
                    'archive_tag_info_box_option'   :   this._getParams( defaultParams, {
                        'label' :   'Show tag info box',
                        'section'   :  'tag_archive_section'
                    }),
                    'archive_author_info_box_option'    :   this._getParams( defaultParams, {
                        'label' :   'Show author info box',
                        'section'   :  'author_archive_section'
                    }),
                    'toc_option'    :   this._getParams( defaultParams, {
                        'label'	      :  'Enable table of content',
                        'section'     : 'blog_single_toc_section'
                    }),         
                    'single_post_related_posts_option'  :   this._getParams( defaultParams, {
                        'label'	      :  'Show related articles',
                        'section'     : 'blog_single_related_posts_section'
                    }),       
                    'you_may_have_missed_section_option'    :   this._getParams( defaultParams, {
                        'label'	      :  'Enable you may have missed section',
                        'section'     : 'customizer_you_may_have_missed_section'                    
                    }),         
                    'footer_option' :   this._getParams( defaultParams, {
                        'label'	      :  'Enable footer section',
                        'section'     : 'footer_section'
                    }),
                    'bottom_footer_option'  :   this._getParams( defaultParams, {
                        'label'	      :  'Enable bottom footer',
                        'section'     : 'bottom_footer_section'
                    })
                };
            }   // End of _getToggle Method

            /**
             * Returns all text type control in customizer
             * 
             * @since 1.0.0
             */
            _getText = () => {
                var defaultParams = {
                    'type'  :  'text'
                };
                return {
                    'menu_cutoff_text' :   this._getParams( defaultParams, {
                        'label'    :   'Menu cutoff more text',
                        'section'  :   'header_menu_options_section',
                        'tab'  :   'general'
                    }),
                    'blog_style_search_view_all_button_text'   :   this._getParams( defaultParams, {
                        'label'    :   'View all button text',
                        'section'  :   'header_live_search_section'
                    }),
                    'blog_style_search_no_result_found_text'   :   this._getParams( defaultParams, {
                        'label'    :   'No result found text',
                        'section'  :   'header_live_search_section'
                    }),
                    'blog_style_custom_button_label'   :   this._getParams( defaultParams, {
                        'label'    :   'Button Label',
                        'section'  :   'custom_button_section',
                    }),
                    'video_playlist_api_key'   :   this._getParams( defaultParams, {
                        'label'    :   'Youtube API key is required',
                        'description'  :   'In order to display proper title and video duration api key is required. Please go throught this url to know how to generate api key https://blog.hubspot.com/website/how-to-get-youtube-api-key.',
                        'section'  :   'video_playlist_section'
                    }),
                    'global_button_label'    : this._getParams( defaultParams, {
                        'label'    :   'Button Label',
                        'section'  :   'buttons_section',
                    }),
                    'stt_text' :   this._getParams( defaultParams, {
                        'label'    :   'Button Label',
                        'section'  :   'stt_options_section',
                    }),
                    'pagination_button_label'  :   this._getParams( defaultParams, {
                        'label'    :   'Button Label',
                        'section'  :   'pagination_settings_section',
                    }),
                    'pagination_no_more_reults_text'   :   this._getParams( defaultParams, {
                        'label'    :   'No more results text',
                        'section'  :   'pagination_settings_section',
                    }),
                    'toc_heading_option'   :   this._getParams( defaultParams, {
                        'label'    :   'Table of content title',
                        'section'  :   'toc_section',
                    }),
                    'single_post_related_posts_title'  :   this._getParams( defaultParams, {
                        'section'  :   'related_posts_section'
                   }),
                    'page_toc_heading_option'  :   this._getParams( defaultParams, {
                        'label'    :   'Table of content title',
                        'section'  :   'page_settings_section',
                    }),
                    'error_page_title_text'    :   this._getParams( defaultParams, {
                        'label'    :   '404 Title Text',
                        'section'  :   'error_page_settings_section',
                    }),
                    'error_page_content_text'  :   this._getParams( defaultParams, {
                        'label'    :   '404 Content Text',
                        'section'  :   'error_page_settings_section',
                    }),
                    'error_page_button_text'   :   this._getParams( defaultParams, {
                        'label'    :   '404 Button Text',
                        'section'  :   'error_page_settings_section',
                    }),
                    'search_page_title'    :   this._getParams( defaultParams, {
                        'label'    :   'Search page title',
                        'section'  :   'search_page_settings'
                    }),
                    'search_nothing_found_title'   :   this._getParams( defaultParams, {
                        'label'    :   'Nothing found title',
                        'section'  :   'search_page_settings'
                    }),
                    'search_page_button_text'  :   this._getParams( defaultParams, {
                        'label'    :   'Button Text',
                        'section'  :   'search_page_settings'
                   }),
                    'instagram_button_text'    :   this._getParams( defaultParams, {
                        'label'    :   'Button label',
                        'section'  :   'instagram_section',
                   }),
                    'you_may_have_missed_title'    :   this._getParams( defaultParams, {
                        'label'    :   'Section title',
                        'section'  :   'customizer_you_may_have_missed_section',
                        'tab'  :   'general'
                    })
               }
            }   // End of _getText Method

            /**
             * Returns list of simple toggle control in customizer
             * 
             * @since 1.0.0
             */
            _getSimpleToggle = () => {
                var defaultParams = {
                    'type'  :  'simple-toggle'
                };
                return {
                    'top_header_date_time_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show date and time',
                        'section'   :   'top_header_section'
                    }),
                    'top_header_social_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show social icons',
                        'section'   :   'top_header_section',
                    }),
                    'top_header_social_icons_hover_animation'   :    this._getParams( defaultParams, {
                        'label' :   'Show social icons hover animation',
                        'section'   :   'top_header_section',
                    }),
                    'top_header_show_search'    :    this._getParams( defaultParams, {
                        'label' :   'Show search',
                        'section'   :   'top_header_section',
                    }),
                    'menu_options_sticky_header'    :    this._getParams( defaultParams, {
                        'label' :   'Enable Header Section Sticky',
                        'section'   :   'theme_header_general_settings_section'
                    }),
                    'menu_cutoff_option'    :    this._getParams( defaultParams, {
                        'label' :   'Enable menu cutoff',
                        'section'   :   'header_menu_options_section',
                        'tab'   :   'general'
                    }),
                    'enable_menu_background'    :    this._getParams( defaultParams, {
                        'label' :   'Enable menu background',
                        'section'   :   'header_menu_options_section',
                        'tab'   :   'design'
                    }),
                    'blog_style_search_post_image_show_hide' :    this._getParams( defaultParams, {
                        'label' :   'Show post Image',
                        'section'   :   'header_live_search_section',
                    }),
                    'blog_style_search_post_date_show_hide'  :    this._getParams( defaultParams, {
                        'label' :   'Show post Date',
                        'section'   :   'header_live_search_section',
                    }),
                    'blog_style_theme_mode_set_dark_mode_as_default' :    this._getParams( defaultParams, {
                        'label' :   'Set Dark Mode as Default',
                        'section'   :   'theme_mode_section',
                    }), 
                    'main_banner_show_social_icon'  :    this._getParams( defaultParams, {
                        'label' :   'Show social share',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_hide_post_with_no_featured_image'  :    this._getParams( defaultParams, {
                        'label' :   'Hide posts with no featured image',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_title'  :    this._getParams( defaultParams, {
                        'label' :   'Show Title',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_categories' :    this._getParams( defaultParams, {
                        'label' :   'Show Categories',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_date'   :    this._getParams( defaultParams, {
                        'label' :   'Show Date',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_author' :    this._getParams( defaultParams, {
                        'label' :   'Show Author',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_author_image'   :    this._getParams( defaultParams, {
                        'label' :   'Show Author Image',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_post_elements_show_excerpt'    :    this._getParams( defaultParams, {
                        'label' :   'Show Excerpt',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_show_arrows'   :    this._getParams( defaultParams, {
                        'label' :   'Show Arrows',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_show_fade' :    this._getParams( defaultParams, {
                        'label' :   'Show Fade',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_slider_infinite_loop'  :    this._getParams( defaultParams, {
                        'label' :   'Infinite Loop',
                        'section'   :   'main_banner_section',
                        'description'   :   'Repeats the slide items',
                    }),
                    'main_banner_slider_autoplay'   :    this._getParams( defaultParams, {
                        'label' :   'Enable Autoplay',
                        'section'   :   'main_banner_section',
                    }),
                    'main_banner_show_arrow_on_hover'   :    this._getParams( defaultParams, {
                        'label' :   'Show arrow on hover',
                        'section'   :   'main_banner_section',
                    }),
                    'carousel_hide_post_with_no_featured_image' :    this._getParams( defaultParams, {
                        'label' :   'Hide posts with no featured image',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_title' :    this._getParams( defaultParams, {
                        'label' :   'Show Title',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_categories'    :    this._getParams( defaultParams, {
                        'label' :   'Show Categories',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_date'  :    this._getParams( defaultParams, {
                        'label' :   'Show Date',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_author'    :    this._getParams( defaultParams, {
                        'label' :   'Show Author',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_author_image'  :    this._getParams( defaultParams, {
                        'label' :   'Show Author Image',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_post_elements_show_excerpt'   :    this._getParams( defaultParams, {
                        'label' :   'Show Excerpt',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_show_arrows'  :    this._getParams( defaultParams, {
                        'label' :   'Show Arrows',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_show_fade'    :    this._getParams( defaultParams, {
                        'label' :   'Show Fade',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_slider_infinite_loop' :    this._getParams( defaultParams, {
                        'label' :   'Infinite Loop',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_slider_autoplay'  :    this._getParams( defaultParams, {
                        'label' :   'Enable Autoplay',
                        'section'   :   'carousel_section',
                    }),
                    'carousel_show_arrow_on_hover'  :    this._getParams( defaultParams, {
                        'label' :   'Show arrow on hover',
                        'section'   :   'carousel_section',
                    }),
                    'video_playlist_slider_arrow'   :    this._getParams( defaultParams, {
                        'label' :   'Enable Arrow',
                        'section'   :   'video_playlist_section',
                    }),
                    'video_playlist_slider_show_arrow_on_hover' :    this._getParams( defaultParams, {
                        'label' :   'Show arrow on hover',
                        'section'   :   'video_playlist_section',
                    }),
                    'video_playlist_slider_infinite'    :    this._getParams( defaultParams, {
                        'label' :   'Enable Infinite Loop',
                        'section'   :   'video_playlist_section',
                    }),
                    'video_playlist_slider_autoplay'    :    this._getParams( defaultParams, {
                        'label' :   'Enable Autoplay',
                        'section'   :   'video_playlist_section',
                    }),
                    'category_collection_show_count'    :    this._getParams( defaultParams, {
                        'label' :   'Show category count',
                        'section'   :   'category_collection_section',
                    }),
                    'category_collection_hide_empty'    :    this._getParams( defaultParams, {
                        'label' :   'Hide empty category',
                        'section'   :   'category_collection_section',
                    }),
                    'category_collection_slider_option' :    this._getParams( defaultParams, {
                        'label' :   'Enable slider',
                        'section'   :   'category_collection_section',
                    }),
                    'category_collection_slider_arrow'  :    this._getParams( defaultParams, {
                        'label' :   'Show arrows',
                        'section'   :   'category_collection_section',
                    }),
                    'category_collection_autoplay_option'   :    this._getParams( defaultParams, {
                        'label' :   'Enable autoplay',
                        'section'   :   'category_collection_section',
                    }),
                    'category_collection_slider_infinite'   :    this._getParams( defaultParams, {
                        'label' :   'Enable infinite',
                        'section'   :   'category_collection_section',
                    }),
                    'social_icon_official_color_inherit'    :    this._getParams( defaultParams, {
                        'label' :   'Inherit official color',
                        'section'   :   'social_icons_section',
                    }),
                    'site_breadcrumb_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show breadcrumb trails',
                        'section'   :   'breadcrumb_options_section',
                    }),
                    'sidebar_sticky_option' :    this._getParams( defaultParams, {
                        'label' :   'Enable Sidebar Sticky',
                        'section'   :   'global_sidebar_sticky_section'
                    }),
                    'social_share_icon_color_type'  :    this._getParams( defaultParams, {
                        'label' :   'Inherit official color',
                        'section'   :   'global_social_share_section',
                    }),
                    'social_share_show_on_click'    :    this._getParams( defaultParams, {
                        'label' :   'Show on click',
                        'section'   :   'global_social_share_section',
                    }),
                    'archive_show_social_share' :    this._getParams( defaultParams, {
                        'label' :   'Show social share',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_title_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show post title',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_excerpt_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show post excerpt',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_category_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post category',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_date_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post date',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_read_time_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show post read time',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_comments_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show comments number',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_author_option' :    this._getParams( defaultParams, {
                        'label' :   'Show author',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_author_image_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show author image',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_button_option' :    this._getParams( defaultParams, {
                        'label' :   'Show button',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_hide_image_placeholder'    :    this._getParams( defaultParams, {
                        'label' :   'Hide image placeholder',
                        'section'   :   'archive_general_section'
                    }),
                    'archive_category_info_box_icon_option' :    this._getParams( defaultParams, {
                        'label' :   'Show category icon',
                        'section'   :   'category_archive_section'
                    }),
                    'archive_category_info_box_title_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show category title',
                        'section'   :   'category_archive_section'
                    }),
                    'archive_category_info_box_description_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show category description',
                        'section'   :   'category_archive_section'
                    }),
                    'archive_tag_info_box_icon_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show tag icon',
                        'section'   :   'tag_archive_section'
                    }),
                    'archive_tag_info_box_title_option' :    this._getParams( defaultParams, {
                        'label' :   'Show tag title',
                        'section'   :   'tag_archive_section'
                    }),
                    'archive_tag_info_box_description_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show tag description',
                        'section'   :   'tag_archive_section'
                    }),
                    'archive_author_info_box_image_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show author image',
                        'section'   :   'author_archive_section'
                    }),
                    'archive_author_info_box_title_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show author title',
                        'section'   :   'author_archive_section'
                    }),
                    'archive_author_info_box_description_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show author description',
                        'section'   :   'author_archive_section'
                    }),
                    'single_author_box_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show author box',
                        'section'   :   'blog_single_general_settings'
                    }),
                    'single_author_box_image_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show author image',
                        'section'   :   'blog_single_general_settings'
                    }),
                    'single_author_info_box_title_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show author title',
                        'section'   :   'blog_single_general_settings'
                    }),
                    'single_author_info_box_description_option' :    this._getParams( defaultParams, {
                        'label' :   'Show author description',
                        'section'   :   'blog_single_general_settings'
                    }),
                    'single_post_navigation_option' :    this._getParams( defaultParams, {
                        'label' :   'Show Post Navigation',
                        'section'   :   'blog_single_general_settings',
                    }),
                    'single_post_navigation_thumbnail_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post thumbnail',
                        'section'   :   'blog_single_general_settings'
                    }),
                    'single_post_navigation_show_date'  :    this._getParams( defaultParams, {
                        'label' :   'Show Date',
                        'section'   :   'blog_single_general_settings',
                    }),
                    'single_title_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post title',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_thumbnail_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post thumbnail',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_category_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show post category',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_date_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show post date',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_read_time_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post read time',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_comments_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show comments number',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_author_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show author',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_author_image_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show author image',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'single_gallery_lightbox_option'    :    this._getParams( defaultParams, {
                        'label' :   'Show lightbox',
                        'section'   :   'blog_single_elements_settings_section'
                    }),
                    'toc_enable_accordion'  :    this._getParams( defaultParams, {
                        'label' :   'Enable accordion',
                        'section'   :   'blog_single_toc_section',
                    }),
                    'toc_default_toggle'    :    this._getParams( defaultParams, {
                        'label' :   'Default toggle open',
                        'section'   :   'blog_single_toc_section',
                    }),
                    'related_posts_author_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show author',
                        'section'   :   'blog_single_related_posts_section'
                    }),
                    'related_posts_date_option' :    this._getParams( defaultParams, {
                        'label' :   'Show date',
                        'section'   :   'blog_single_related_posts_section'
                    }),
                    'related_posts_comment_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show comments',
                        'section'   :   'blog_single_related_posts_section'
                    }),
                    'page_title_option' :    this._getParams( defaultParams, {
                        'label' :   'Show page title',
                        'section'   :   'page_settings_section'
                    }),
                    'page_thumbnail_option' :    this._getParams( defaultParams, {
                        'label' :   'Show page thumbnail',
                        'section'   :   'page_settings_section'
                    }),
                    'page_content_option'   :    this._getParams( defaultParams, {
                        'label' :   'Show post content',
                        'section'   :   'page_settings_section'
                    }),
                    'page_toc_option'   :    this._getParams( defaultParams, {
                        'label' :   'Enable table of content',
                        'section'   :   'page_settings_section',
                    }),
                    'page_toc_enable_accordion' :    this._getParams( defaultParams, {
                        'label' :   'Enable accordion',
                        'section'   :   'page_settings_section',
                    }),
                    'page_toc_default_toggle'   :    this._getParams( defaultParams, {
                        'label' :   'Default toggle',
                        'section'   :   'page_settings_section',
                    }),
                    'error_page_button_show_hide'   :    this._getParams( defaultParams, {
                        'label' :   'Show 404 button',
                        'section'   :   'error_page_settings_section'
                    }),
                    'search_page_form_show_hide'    :    this._getParams( defaultParams, {
                        'label' :   'Show search form',
                        'section'   :   'search_page_settings'
                    }),
                    'instagram_url_image_link'  :    this._getParams( defaultParams, {
                        'label' :   'Link url with image',
                        'section'   :   'instagram_section',
                    }),
                    'instagram_enable_lightbox' :    this._getParams( defaultParams, {
                        'label' :   'Enable lightbox',
                        'section'   :   'instagram_section',
                    }),
                    'show_instagram_button' :    this._getParams( defaultParams, {
                        'label' :   'Show instagram button',
                        'section'   :   'instagram_section'
                    }),
                    'instagram_caption' :    this._getParams( defaultParams, {
                        'label' :   'Show image caption',
                        'section'   :   'instagram_section',
                    }),
                    'instagram_slider_arrow'    :    this._getParams( defaultParams, {
                        'label' :   'Show arrows',
                        'section'   :   'instagram_section',
                    }),
                    'instagram_autoplay_option' :    this._getParams( defaultParams, {
                        'label' :   'Enable autoplay',
                        'section'   :   'instagram_section',
                    }),
                    'instagram_slider_infinite' :    this._getParams( defaultParams, {
                        'label' :   'Enable infinite',
                        'section'   :   'instagram_section',
                    }),
                    'you_may_have_missed_title_option'  :    this._getParams( defaultParams, {
                        'label' :   'Show section title',
                        'section'   :   'customizer_you_may_have_missed_section'
                    }),
                    'you_may_have_missed_hide_post_with_no_featured_image'  :    this._getParams( defaultParams, {
                        'label' :   'Hide posts with no featured image',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'you_may_have_missed_post_elements_show_title'  :    this._getParams( defaultParams, {
                        'label' :   'Show Title',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'you_may_have_missed_post_elements_show_categories' :    this._getParams( defaultParams, {
                        'label' :   'Show Categories',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'you_may_have_missed_post_elements_show_date'   :    this._getParams( defaultParams, {
                        'label' :   'Show Date',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'you_may_have_missed_post_elements_show_author' :    this._getParams( defaultParams, {
                        'label' :   'Show Author',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'bottom_footer_show_social_icons'   :    this._getParams( defaultParams, {
                        'label' :   'Show social icons',
                        'section'   :   'bottom_footer_section'
                    }),
                    'bottom_footer_show_logo'   :    this._getParams( defaultParams, {
                        'label' :   'Show Logo',
                        'section'   :   'bottom_footer_section'
                    })
                };
            }   // End of _getSimpleToggle Method

            /**
             * Returns all radio image control in the customizer
             * 
             * @since 1.0.0
             */
            _getRadioImage = () => {
                var defaultParams = {
                    'type'  :  'radio-image'
                };
                return {
                    'header_layout' :   this._getParams( defaultParams, {
                        'label'    :   'Header Layouts',
                        'section'  :   'theme_header_general_settings_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Header One',
                                'url'  :   PATHTOIMAGE + 'header-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Header Two',
                                'url'  :   PATHTOIMAGE + 'header-two.png'
                            },
                            'three'    :   {
                                'label'    :   'Header Three',
                                'url'  :   PATHTOIMAGE + 'header-three.png'
                            }
                        }
                    }),
                    'main_banner_layouts'   :   this._getParams( defaultParams, {
                        'label'    :   'Banner Layouts',
                        'section'  :   'main_banner_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Layout One',
                                'url'  :   PATHTOIMAGE + 'banner-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Layout Two',
                                'url'  :   PATHTOIMAGE + 'banner-two.png'
                            }
                        }
                    }),
                    'carousel_layouts'  :   this._getParams( defaultParams, {
                        'label'    :   'Carousel Layouts',
                        'section'  :   'carousel_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Header One',
                                'url'  :   PATHTOIMAGE + 'carousel-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Header Two',
                                'url'  :   PATHTOIMAGE + 'carousel-two.png'
                            }
                        }
                    }),
                    'video_playlist_layouts'    :   this._getParams( defaultParams, {
                        'label'    :    'Video Playlist Layouts',
                        'section'  :   'video_playlist_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Layout 1',
                                'url'  :   PATHTOIMAGE + 'video-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Layout 2',
                                'url'  :   PATHTOIMAGE + 'video-two.png'
                            }
                        }
                    }),
                    'category_collection_layout'    :   this._getParams( defaultParams, {
                        'label'    :    'Layouts',
                        'section'  :   'category_collection_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Layout 1',
                                'url'  :   PATHTOIMAGE + 'category-collection-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Layout 2',
                                'url'  :   PATHTOIMAGE + 'category-collection-two.png'
                            }
                        }
                    }),
                    'website_layout'    :   this._getParams( defaultParams, {
                        'section'  :   'blog_style_website_layout_section',
                        'choices'  :   {
                            'boxed--layout'    :   {
                                'label'    :   'Boxed',
                                'url'  :   PATHTOIMAGE + 'boxed-width.png'
                            },
                            'full-width--layout'   :   {
                                'label'    :   'Full Width',
                                'url'  :   PATHTOIMAGE + 'full-width.png'
                            }
                        }
                    }),
                    'archive_post_layout'   :   this._getParams( defaultParams, {
                        'label'    :    'Archive Layout',
                        'section'  :    'archive_general_section',
                        'choices'  :   {
                            'grid' :   {
                                'label'    :   'Grid',
                                'url'  :   PATHTOIMAGE + 'archive-grid.png'
                            },
                            'list' :   {
                                'label'    :   'List',
                                'url'  :   PATHTOIMAGE + 'archive-list.png'
                            },
                            'block'    :   {
                                'label'    :   'Block',
                                'url'  :   PATHTOIMAGE + 'archive-block.png'
                            },
                            'masonry'  :   {
                                'label'    :   'Masonry',
                                'url'  :   PATHTOIMAGE + 'archive-masonry.png'
                            }
                        }
                    }),
                    'archive_sidebar_layout'    :   this._getParams( defaultParams, {
                        'label'    :    'Sidebar Layout',
                        'section'  :    'archive_general_section',
                        'choices'  :   {
                            'right-sidebar'    :   {
                                'label'    :   'Right Sidebar',
                                'url'  :   PATHTOIMAGE + 'right-sidebar.png'
                            },
                            'left-sidebar' :   {
                                'label'    :   'Left Sidebar',
                                'url'  :   PATHTOIMAGE + 'left-sidebar.png'
                            },
                            'both-sidebar' :   {
                                'label'    :   'Both Sidebar',
                                'url'  :   PATHTOIMAGE + 'both-sidebar.png'
                            },
                            'no-sidebar'   :   {
                                'label'    :   'No Sidebar',
                                'url'  :   PATHTOIMAGE + 'no-sidebar.png'
                            }
                        }
                    }),
                    'single_post_layout'    :   this._getParams( defaultParams, {
                        'label'    :    'Single Layout',
                        'section'  :    'blog_single_general_settings',
                        'choices'  :   {
                            'layout-one'   :   {
                                'label'    :   'Layout One',
                                'url'  :   PATHTOIMAGE + 'single-one.png'
                            },
                            'layout-two'   :   {
                                'label'    :   'Layout Two',
                                'url'  :   PATHTOIMAGE + 'single-two.png'
                            },
                            'layout-three' :   {
                                'label'    :   'Layout Three',
                                'url'  :   PATHTOIMAGE + 'single-three.png'
                            },
                            'layout-four'  :   {
                                'label'    :   'Layout Four',
                                'url'  :   PATHTOIMAGE + 'single-four.png'
                            }
                        }
                    }),
                    'single_sidebar_layout' :   this._getParams( defaultParams, {
                        'label'    :    'Sidebar Layout',
                        'section'  :    'blog_single_general_settings',
                        'choices'  :   {
                            'right-sidebar'    :   {
                                'label'    :   'Right Sidebar',
                                'url'  :   PATHTOIMAGE + 'right-sidebar.png'
                            },
                            'left-sidebar' :   {
                                'label'    :   'Left Sidebar',
                                'url'  :   PATHTOIMAGE + 'left-sidebar.png'
                            },
                            'both-sidebar' :   {
                                'label'    :   'Both Sidebar',
                                'url'  :   PATHTOIMAGE + 'both-sidebar.png'
                            },
                            'no-sidebar'   :   {
                                'label'    :   'No Sidebar',
                                'url'  :   PATHTOIMAGE + 'no-sidebar.png'
                            }
                        }
                    }),
                    'related_posts_layouts' :   this._getParams( defaultParams, {
                        'label'    :    'Related Posts Layout',
                        'section'  :    'blog_single_related_posts_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Layout 1',
                                'url'  :   PATHTOIMAGE + 'related-post-list.png'
                            },
                            'two'  :   {
                                'label'    :   'Layout 2',
                                'url'  :   PATHTOIMAGE + 'related-post-grid.png'
                            }
                        }
                    }),
                    'page_settings_sidebar_layout'  :   this._getParams( defaultParams, {
                        'label'    :    'Sidebar Layout',
                        'section'  :    'page_settings_section',
                        'choices'  :   {
                            'right-sidebar'    :   {
                                'label'    :   'Right Sidebar',
                                'url'  :   PATHTOIMAGE + 'right-sidebar.png'
                            },
                            'left-sidebar' :   {
                                'label'    :   'Left Sidebar',
                                'url'  :   PATHTOIMAGE + 'left-sidebar.png'
                            },
                            'both-sidebar' :   {
                                'label'    :   'Both Sidebar',
                                'url'  :   PATHTOIMAGE + 'both-sidebar.png'
                            },
                            'no-sidebar'   :   {
                                'label'    :   'No Sidebar',
                                'url'  :   PATHTOIMAGE + 'no-sidebar.png'
                            }
                        }
                    }),
                    'error_page_sidebar_layout' :   this._getParams( defaultParams, {
                        'label'    :    'Sidebar Layout',
                        'section'  :    'error_page_settings_section',
                        'choices'  :   {
                            'right-sidebar'    :   {
                                'label'    :   'Right Sidebar',
                                'url'  :   PATHTOIMAGE + 'right-sidebar.png'
                            },
                            'left-sidebar' :   {
                                'label'    :   'Left Sidebar',
                                'url'  :   PATHTOIMAGE + 'left-sidebar.png'
                            },
                            'both-sidebar' :   {
                                'label'    :   'Both Sidebar',
                                'url'  :   PATHTOIMAGE + 'both-sidebar.png'
                            },
                            'no-sidebar'   :   {
                                'label'    :   'No Sidebar',
                                'url'  :   PATHTOIMAGE + 'no-sidebar.png'
                            }
                        }
                    }),
                    'search_page_sidebar_layout'    :   this._getParams( defaultParams, {
                        'label'    :    'Sidebar Layout',
                        'section'  :    'search_page_settings',
                        'choices'  :   {
                            'right-sidebar'    :   {
                                'label'    :   'Right Sidebar',
                                'url'  :   PATHTOIMAGE + 'right-sidebar.png'
                            },
                            'left-sidebar' :   {
                                'label'    :   'Left Sidebar',
                                'url'  :   PATHTOIMAGE + 'left-sidebar.png'
                            },
                            'both-sidebar' :   {
                                'label'    :   'Both Sidebar',
                                'url'  :   PATHTOIMAGE + 'both-sidebar.png'
                            },
                            'no-sidebar'   :   {
                                'label'    :   'No Sidebar',
                                'url'  :   PATHTOIMAGE + 'no-sidebar.png'
                            }
                        }
                    }),
                    'instagram_layout'  :   this._getParams( defaultParams, {
                        'label'    :   'Layouts',
                        'section'  :   'instagram_section',
                        'choices'  :   {
                            'one'  :   {
                                'label'    :   'Header One',
                                'url'  :   PATHTOIMAGE + 'instagram-one.png'
                            },
                            'two'  :   {
                                'label'    :   'Header Two',
                                'url'  :   PATHTOIMAGE + 'instagram-two.png'
                            }
                        }
                    }),
                    'you_may_have_missed_layouts'   :   this._getParams( defaultParams, {
                        'label'    :   'Layouts',
                        'section'  :   'blog_style_customizer_you_may_have_missed_section',
                        'choices'  :   {
                            'grid' :   {
                                'label'    :   'Grid',
                                'url'  :   PATHTOIMAGE + 'carousel-one.png'
                            },
                            'list' :   {
                                'label'    :   'List',
                                'url'  :   PATHTOIMAGE + 'carousel-two.png'
                            }
                        }
                    }),
                    'footer_widget_column'  :   this._getParams( defaultParams, {
                        'section'  :   'footer_section',
                        'tab'  :   'general',
                        'choices'  :   {
                            'column-one'   :   {
                                'label'    :   'Column One',
                                'url'  :   PATHTOIMAGE + 'footer_column_one.png'
                            },
                            'column-two'   :   {
                                'label'    :   'Column Two',
                                'url'  :   PATHTOIMAGE + 'footer_column_two.png'
                            },
                            'column-three' :   {
                                'label'    :   'Column Three',
                                'url'  :   PATHTOIMAGE + 'footer_column_three.png'
                            },
                            'column-four'  :   {
                                'label'    :   'Column Four',
                                'url'  :   PATHTOIMAGE + 'footer_column_four.png'
                            }
                        }
                    })
                }
            }   // End of _getRadioImage Method

            /**
             * Returns list of all typography control in the customizer
             * 
             * @since 1.0.0
             */
            _getTypography = () =>{
                var defaultParams = {
                    'type'   :   'typography',
                    'tab'   :   'design',
                    'fields'    :   [ 'font_family', 'font_weight', 'font_size', 'line_height', 'letter_spacing', 'text_transform', 'text_decoration' ]
                };
                return {
                    'site_title_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Site Title Typography',
                        'section'   :   'site_title_section'
                    }),
                    'site_description_typo' :   this._getParams( defaultParams, {
                        'label' :    'Site Description Typography',
                        'section'   :   'site_title_section'
                    }),
                    'main_menu_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Main Menu Typography',
                        'section'   :   'header_menu_options_section'
                    }),
                    'main_menu_sub_menu_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Sub Menu Typography',
                        'section'   :   'header_menu_options_section'
                    }),
                    'blog_style_custom_button_text_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Text Typography',
                        'section'   :   'custom_button_section'
                    }),
                    'main_banner_design_post_title_typography'  :   this._getParams( defaultParams, {
                        'label' :    'Title Typo',
                        'section'   :   'main_banner_section'
                    }),
                    'main_banner_design_post_excerpt_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Excerpt Typo',
                        'section'   :   'main_banner_section'
                    }),
                    'main_banner_design_post_categories_typography' :   this._getParams( defaultParams, {
                        'label' :    'Category Typo',
                        'section'   :   'main_banner_section'
                    }),
                    'main_banner_design_post_date_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Date Typo',
                        'section'   :   'main_banner_section'
                    }),
                    'main_banner_design_post_author_typography' :   this._getParams( defaultParams, {
                        'label' :    'Author Typo',
                        'section'   :   'main_banner_section'
                    }),
                    'carousel_design_post_title_typography' :   this._getParams( defaultParams, {
                        'label' :    'Title Typo',
                        'section'   :   'carousel_section'
                    }),
                    'carousel_design_post_excerpt_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Excerpt Typo',
                        'section'   :   'carousel_section'
                    }),
                    'carousel_design_post_categories_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Category Typo',
                        'section'   :   'carousel_section'
                    }),
                    'carousel_design_post_date_typography'  :   this._getParams( defaultParams, {
                        'label' :    'Date Typo',
                        'section'   :   'carousel_section'
                    }),
                    'carousel_design_post_author_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Author Typo',
                        'section'   :   'carousel_section'
                    }),
                    'video_playlist_active_title_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Active Title Typo',
                        'section'   :   'video_playlist_section'
                    }),
                    'video_playlist_title_typo' :   this._getParams( defaultParams, {
                        'label' :    'Title Typo',
                        'section'   :   'video_playlist_section'
                    }),
                    'video_playlist_video_time_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Video Time Typo',
                        'section'   :   'video_playlist_section'
                    }),
                    'category_collection_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Typography',
                        'section'   :   'category_collection_section',
                    }),
                    'global_button_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Typography',
                        'section'   :   'buttons_section'
                    }),
                    'breadcrumb_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Typography',
                        'section'   :   'breadcrumb_options_section',
                    }),
                    'archive_title_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Post Title',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_excerpt_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Excerpt Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_category_typo' :   this._getParams( defaultParams, {
                        'label' :    'Category Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_date_typo' :   this._getParams( defaultParams, {
                        'label' :    'Date Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_author_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Author Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_read_time_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Read Time Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_comment_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Comment Typo',
                        'section'   :   'archive_general_section',
                    }),
                    'archive_category_info_box_title_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Category Title',
                        'section'   :   'category_archive_section',
                    }),
                    'archive_category_info_box_description_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Category Description Typo',
                        'section'   :   'category_archive_section',
                    }),
                    'archive_tag_info_box_title_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Tag Title',
                        'section'   :   'tag_archive_section',
                    }),
                    'archive_tag_info_box_description_typo' :   this._getParams( defaultParams, {
                        'label' :    'Tag Description Typo',
                        'section'   :   'tag_archive_section',
                    }),
                    'archive_author_info_box_title_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Author Name',
                        'section'   :   'author_archive_section',
                    }),
                    'archive_author_info_box_description_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Author Description Typo',
                        'section'   :   'author_archive_section',
                    }),
                    'single_title_typo' :   this._getParams( defaultParams, {
                        'label' :    'Title Typo'
                    }),
                    'single_content_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Content Typo'
                    }),
                    'single_category_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Category Typo'
                    }),
                    'single_date_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Date Typo'
                    }),
                    'single_author_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Author Typo'
                    }),
                    'single_read_time_typo' :   this._getParams( defaultParams, {
                        'label' :    'Read Time Typo'
                    }),
                    'page_title_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Page Title Typo'
                    }),
                    'page_content_typo' :   this._getParams( defaultParams, {
                        'label' :    'Page Content Typo'
                    }),
                    'error_page_title_typo' :   this._getParams( defaultParams, {
                        'label' :    'Title Typo'
                    }),
                    'error_page_content_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Content Typo'
                    }),
                    'error_page_button_text_typo'   :   this._getParams( defaultParams, {
                        'label' :    'Button Text Typo'
                    }),
                    'instagram_button_typo' :   this._getParams( defaultParams, {
                        'label' :    'Button typo',
                        'section'   :   'instagram_section',
                    }),
                    'you_may_have_missed_design_section_title_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Section Title Typo',
                        'section'   :   'customizer_you_may_have_missed_section',
                    }),
                    'you_may_have_missed_design_post_title_typography'  :   this._getParams( defaultParams, {
                        'label' :    'Title Typo',
                        'section'   :   'customizer_you_may_have_missed_section'
                    }),
                    'you_may_have_missed_design_post_categories_typography' :   this._getParams( defaultParams, {
                        'label' :    'Category Typo',
                        'section'   :   'customizer_you_may_have_missed_section'
                    }),
                    'you_may_have_missed_design_post_date_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Date Typo',
                        'section'   :   'customizer_you_may_have_missed_section'
                    }),
                    'you_may_have_missed_design_post_author_typography' :   this._getParams( defaultParams, {
                        'label' :    'Author Typo',
                        'section'   :   'customizer_you_may_have_missed_section'
                    }),
                    'footer_title_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Block Title Typo',
                        'section'   :   'footer_section'
                    }),
                    'footer_text_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Text Typo',
                        'section'   :   'footer_section'
                    }),
                    'bottom_footer_text_typography' :   this._getParams( defaultParams, {
                        'label' :    'Text Typo',
                        'section'   :   'bottom_footer_section'
                    }),
                    'bottom_footer_link_typography' :   this._getParams( defaultParams, {
                        'label' :    'Link Typo',
                        'section'   :   'bottom_footer_section'
                    }),
                    'heading_one_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Heading 1',
                        'section'   :   'typography_section',
                    }),
                    'heading_two_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Heading 2',
                        'section'   :   'typography_section',
                    }),
                    'heading_three_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Heading 3',
                        'section'   :   'typography_section',
                    }),
                    'heading_four_typo' :   this._getParams( defaultParams, {
                        'label' :    'Heading 4',
                        'section'   :   'typography_section',
                    }),
                    'heading_five_typo' :   this._getParams( defaultParams, {
                        'label' :    'Heading 5',
                        'section'   :   'typography_section',
                    }),
                    'heading_six_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Heading 6',
                        'section'   :   'typography_section',
                    }),
                    'sidebar_block_title_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Block Title',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_post_title_typography' :   this._getParams( defaultParams, {
                        'label' :    'Post Title',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_category_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Category',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_date_typography'   :   this._getParams( defaultParams, {
                        'label' :    'Date',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_pagination_button_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Pagination typo',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_one_typography'    :   this._getParams( defaultParams, {
                        'label' :    'Heading 1',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_two_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Heading 2',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_three_typo'    :   this._getParams( defaultParams, {
                        'label' :    'Heading 3',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_four_typo' :   this._getParams( defaultParams, {
                        'label' :    'Heading 4',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_five_typo' :   this._getParams( defaultParams, {
                        'label' :    'Heading 5',
                        'section'   :   'widget_styles_section',
                    }),
                    'sidebar_heading_six_typo'  :   this._getParams( defaultParams, {
                        'label' :    'Heading 6',
                        'section'   :   'widget_styles_section'
                    })
                };
            }   // End of _getTypography Method

            /**
             * returns all the controls in the customizer
             * 
             * @since 1.0.0
             */
            _getControls = () => {
                return {
                    ...this._getCheckbox(),
                    ...this._getToggle(),
                    ...this._getText(),
                    ...this._getSimpleToggle(),
                    ...this._getRadioImage(),
                    ...this._getTypography()
                }
            }
        }   // End of BlogStyleCustomizerList Class

        class BlogStyleCustomizer extends BlogStyleCustomizerList {
            /**
             * Method that gets called when class is instantiated
             * 
             * @since 1.0.0
             */
            constructor() {
                super()
                this._register( this._getPanels(), 'panel' )
                this._register( this._getSections(), 'section' )
                this._register( this._getControls(), 'control' )
            }

            /**
             * Register Panels, Sections and Controls
             * 
             * @since 1.0.0
             * @param object    =>  _getPanels() || _getSections() || _getControls()
             * @param type  =>  panel || section || control
             */
            _register = ( obj = {}, type = '' ) => {
                // capitalize first letter of a word
                let capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
                
                Object.entries( obj ).map(([ id, params ]) => {
                    let _thisParam = params
                    if( type === 'control' ) {
                        api.add( new api.Setting( id, DEFAULTS[id], {
                                transport: "postMessage",
                                type: "theme_mod"
                            })
                        )
                        _thisParam = { ...params, 'setting': id }

                        api.control.add( new api.Control( id, _thisParam ) );
                    } else {
                        api[type].add( new api[capitalizedType]( id, _thisParam ) );       
                    }
                })
            }
        }   // End of BlogStyleCustomizer Class

        new BlogStyleCustomizer();
    } )
})( wp.customize, jQuery )