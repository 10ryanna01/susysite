<?php 
header( 'Content-type: application/json' );
 $str = mb_convert_encoding($str, "UTF-8", "Windows-1252");
/**
 * Template Name: json-dump-page
 * Description: Outputs your posts as json
 *
 */ 

 

$args = array(
  'post_type' => 'post',
   'category_name' => '2016',
  'post_status' => 'publish',
  'posts_per_page' => -1, // all
  'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2016 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2016['list_year16'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2016 );


////////////////////////////////////

///   year  2015  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2015',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
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







////////////////////////////////////

///  year  2014  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2014',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2014 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2014['list_year14'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2014 );






////////////////////////////////////

///  year  2013  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2013',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2013 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2013['list_year13'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2013 );






////////////////////////////////////

///  year  2012  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2012',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2012 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2012['list_year12'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2012 );





////////////////////////////////////

///  year  2011  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2011',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2011 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2011['list_year11'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2011 );








////////////////////////////////////

///  year  2010  json query

/////////////////////////////////////
 




$args = array(
  'post_type' => 'post',
   'category_name' => '2010',
   'post_status' => 'publish',
  'posts_per_page' => -1, // all
   'orderby' => 'title',
  'order' => 'ASC'
);
 
$query = new WP_Query( $args );
 
$year2010 = array();
 

 
while( $query->have_posts() ) : $query->the_post();
  
  // Add a car entry
  $year2010['list_year10'] = array(


    'companyTitle' => get_the_title(),
    'companyDate' => get_the_content(),
 
'companySkillsapplied' => get_post_meta($post->ID, $key = 'companySkillsapplied',  true ),
'companyProjectoutline' => get_post_meta($post->ID, $key = 'companyProjectoutline',  true ),
'companyExpertise' => get_post_meta($post->ID, $key = 'companyExpertise',  true ));
 
endwhile;


wp_reset_query();
 
 
 


echo json_encode( $year2010 );

 
?>w