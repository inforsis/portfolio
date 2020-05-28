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
//registrando Tags para portfolio
register_taxonomy(
	"Tags",
		  "portfolio",
		  array(            
			"label" => "Tags",
				"singular_label" => "Tag",
				"rewrite" => true,
				'show_in_rest' => true,
				'rest_base'    => 'Tags',
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

// Criando a seção Social/Contatos
register_post_type('social', array(
	'label' => 'Social',
	'public' => true,
	'show_ui' => true,
	'show_in_rest' => true,
	'capability_type' => 'post',
	'hierarchical' => true,
	'rewrite' => array('slug' => 'social'),
	'query_var' => true,
	'supports' => array(
		'title',
		'editor',
		'excerpt'
	)
));

// Criando a seção Statistic
register_post_type('statistics', array(
	'label' => 'Statistics',
	'public' => true,
	'show_ui' => true,
	'show_in_rest' => true,
	'capability_type' => 'post',
	'hierarchical' => true,
	'rewrite' => array('slug' => 'statistics'),
	'query_var' => true,
	'supports' => array(
		'title',
		'editor',
		'excerpt'
	)
));



if ( function_exists( 'add_theme_support' ) ) { 
  add_theme_support( 'post-thumbnails' );  
  //add_image_size( 'thumb_portfolio', 320, auto, false );
}

//adicionando a segunda imagem de destaque para os artigos
if (class_exists('MultiPostThumbnails')) {
	new MultiPostThumbnails(array( 'label' => 'Mobile', 'id' => 'mobile', 'post_type' => 'portfolio' ) );
	new MultiPostThumbnails(array( 'label' => 'Tablet', 'id' => 'tablet', 'post_type' => 'portfolio' ) );
}


class all_terms
{
    public function __construct()
    {
        $version = '2';
        $namespace = 'wp/v' . $version;
        $base = 'all-terms';
        register_rest_route($namespace, '/' . $base, array(
            'methods' => 'GET',
            'callback' => array($this, 'get_all_terms'),
        ));
    }

    public function get_all_terms($object)
    {
        $return = array();
        // $return['categories'] = get_terms('category');
 //        $return['tags'] = get_terms('post_tag');
        // Get taxonomies
        $args = array(
            'public' => true,
            '_builtin' => false
        );
        $output = 'names'; // or objects
        $operator = 'and'; // 'and' or 'or'
        $taxonomies = get_taxonomies($args, $output, $operator);
        foreach ($taxonomies as $key => $taxonomy_name) {
            if($taxonomy_name = $_GET['term']){
            $return = get_terms($taxonomy_name);
        }
        }
        return new WP_REST_Response($return, 200);
    }
}

add_action('rest_api_init', function () {
    $all_terms = new all_terms;
});

class get_tag {
	public function __construct()
    {
        $version = '2';
        $namespace = 'wp/v' . $version;
        $base = 'get-terms';
        register_rest_route($namespace, '/' . $base, array(
            'methods' => 'GET',
            'callback' => array($this, 'get_the_tag'),
        ));
    }
	public function get_the_tag($object) {
		$return = array();
		$args = array(
			'public' => true,
			'_builtin' => false
		);
		$output = 'id';
		$id = $_GET['id'];
		$taxonomy = $_GET['taxonomy'];
		$tags = explode(',', $id);
		$arrTags = array();
		for ($i = 0; $i < count($tags); $i++) {
			$tag = get_term_by($output,$tags[$i],$taxonomy);
			array_push($arrTags, $tag);
		}
		$return = $arrTags;
		//$return = get_term_by($output,$id,$taxonomy);
		return new WP_REST_Response($return, 200);
	}
}

add_action('rest_api_init', function () {
    $get_tag = new get_tag;
});

class get_custom_field {
	public function __construct() {
		$version = '2';
        $namespace = 'wp/v' . $version;
        $base = 'custom-field';
        register_rest_route($namespace, '/' . $base, array(
            'methods' => 'GET',
            'callback' => array($this, 'get_the_custom_field'),
        ));
	}
	public function get_the_custom_field($object) {
		$return = array();
		$args = array(
			'public' => true,
			'_builtin' => false
		);
		$post_id = $_GET['post_id'];
		$custom_field = $_GET['custom_field'];
		$return = get_post_custom_values($custom_field, $post_id);
		return new WP_REST_Response($return, 200);
	}
}

add_action('rest_api_init', function () {
    $get_custom_field = new get_custom_field;
});

class get_portfolio {
	
	public function __construct() {
		$version = '2';
		$namespace = 'wp/v' . $version;
		$base = 'get-portfolio';
		register_rest_route($namespace, '/' . $base, array(
			'methods' => 'GET',
			'callback' => array($this, 'get_the_portfolio'),
		));
	}

	function get_the_portfolio() {
		$return = array();
		$args = array(
			'public' => true,
			'_builtin' => false
		);

		$works = get_posts(
			array(
				'post_type'		 => 'portfolio',
				'post_status'    => 'publish',
				'posts_per_page' => 10,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);

		$portfolio = array();

		for ($i=0; $i < count($works); $i++) {
			$id = $works[$i]->ID;
			$title = $works[$i]->post_title;
			$description = $works[$i]->post_excerpt;
			
			$link = get_post_custom_values('link', $id);

			//tags
			$tags = get_the_terms( $id, 'Tags');
			$arrTags = array();
			foreach ( $tags as $tag ) {
				array_push($arrTags,$tag->name);
			}

			//thumbnail
			$arrThumbnail = array();
			$web = wp_get_attachment_image_src( get_post_thumbnail_id( $id ) )[0];
			$mobile = MultiPostThumbnails::get_post_thumbnail_id('portfolio', 'mobile', $id);
			$mobile = wp_get_attachment_image_src($mobile)[0];
			$tablet = MultiPostThumbnails::get_post_thumbnail_id('portfolio', 'tablet', $id);
			$tablet = wp_get_attachment_image_src($tablet)[0];


			array_push($arrThumbnail,[$web]);
			array_push($arrThumbnail,[$mobile]);
			array_push($arrThumbnail,[$tablet]);
			
			$item = array();

			array_push($item,['id' => $id]);
			array_push($item,['title' => $title]);
			array_push($item,['description' => $description]);
			array_push($item,['link' => $link[0]]);
			array_push($item,['tags' => $arrTags]);
			array_push($item,['thumbnail' => $arrThumbnail]);
			
			array_push($portfolio,$item);
		}

		$return = $portfolio;
		return new WP_REST_Response($return, 200);

	}
}

add_action('rest_api_init', function () {
    $get_custom_field = new get_portfolio;
});

class get_event {
	public function __construct() {
		$version = '2';
		$namespace = 'wp/v' . $version;
		$base = 'get-event';
		register_rest_route($namespace, '/' . $base, array(
			'methods' => 'GET',
			'callback' => array($this, 'get_the_event'),
		));
	}
	function get_the_event() {
		$return = array();
		
		$args = array(
			'public' => true,
			'_builtin' => false
		);

		$year = $_GET['year'];

		$arrEvents = array();

		$the_query = new WP_Query(
			array(
				'post_type' => 'timeline',
				'ignore_sticky_posts' => 1,
				'year'  => $year
			)
		);

		if ( $the_query->have_posts() ) :
		while ( $the_query->have_posts() ) : $the_query->the_post();

			array_push($arrEvents, ['title' => $the_query->the_title()]);

		endwhile;
		endif;

		wp_reset_postdata();

		$return = $arrEvents;
		return new WP_REST_Response($return, 200);
	}
}

add_action('rest_api_init', function () {
    $get_custom_field = new get_event;
});

?>
