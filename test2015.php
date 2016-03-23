<?php 
header( 'Content-type: application/json' );

/**
 * Template Name: json-dump-page
 * Description: Outputs your posts as json
 http://www.codechewing.com/library/output-wp-post-as-json-in-new-page/
 https://gist.github.com/luetkemj/2023628  for tag definitions
 *
 */ 

 

$args = array( 
  'post_type' => 'post',
  'category_name' => '2015', 
   'post_status' => 'publish',
     'orderby' => 'title',
  'order' => 'ASC',
 'posts_per_page' => -1
   
);
 
$query = new WP_Query( $args );
 
$year2015 = array(); 
 


 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2015['list_year15'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
    'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
    'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
    'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query(); 


echo json_encode( $year2015 );


 ?>