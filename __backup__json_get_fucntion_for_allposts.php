<?php
header( 'Content-type: application/json' );
 
/**
 * Template Name: json-dump-page
 * Description: Outputs your posts as json
 *
 */ 

 

$args = array(
  'post_type' => 'post',
  'post_status' => 'publish',
  'posts_per_page' => -1, // all
  'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$potato = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $potato['objects'] = array([


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
// 'companySkillsapplied' => get_post_meta( $key = 'companySkillsapplied' )

'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),


'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),

'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true )





   // get_post_custom_keys(),
   // get_post_custom_values()
 
 

// 'companydesc' => get_post_custom() 

//'companySkillsapplied' => meta_value()


//        $custom_fields = get_post_custom()
  







      
  ] );
 
endwhile;


wp_reset_query();
 
 
 

echo json_encode( $potato );


 


