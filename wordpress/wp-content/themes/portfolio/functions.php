<?php
//adicionando resumo as páginas
add_action( 'init', 'my_add_excerpts_to_pages' );
function my_add_excerpts_to_pages() {
     add_post_type_support( 'page', 'excerpt' );
}

//add suport pra miniatura
if ( function_exists('add_theme_support') ) {
    add_theme_support('post-thumbnails');
}

// Criando a seção Portfolio
register_post_type('portfolio', array(
'label' => 'Portfolio',
'public' => true,
'show_ui' => true,
'show_in_rest' => true,
'capability_type' => 'post',
'hierarchical' => true,
'rewrite' => array('slug' => 'works'),
'query_var' => true,
'supports' => array(
'thumbnail',
'title',
'excerpt',
'custom-fields')
));
//registrando categorias para receitas
register_taxonomy(
"Tags",
      "portfolio",
      array(            
        "label" => "Tags",
            "singular_label" => "Tag",
            "rewrite" => true,
            "hierarchical" => true
  )
);
//secao timeline
register_post_type('timeline', array(
	'label' => 'Timeline',
	'public' => true,
	'show_ui' => true,
	'show_in_rest' => true,
	'capability_type' => 'post',
	'hierarchical' => true,
	'rewrite' => array('slug' => 'timeline'),
	'query_var' => true,
	'supports' => array(
		'title'
	)
));

//secao funfacts
register_post_type('funfacts', array(
	'label' => 'Funfacts',
	'public' => true,
	'show_ui' => true,
	'show_in_rest' => true,
	'capability_type' => 'post',
	'hierarchical' => true,
	'rewrite' => array('slug' => 'funfacts'),
	'query_var' => true,
	'supports' => array(
		'title'
	)
));



if ( function_exists( 'add_theme_support' ) ) { 
  add_theme_support( 'post-thumbnails' );  
  //add_image_size( 'thumb_portfolio', 320, auto, false );
}

?>
