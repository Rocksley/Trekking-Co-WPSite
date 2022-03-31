<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/*
 * register trek post type
 */
if ( ! function_exists( 'trav_register_trek_post_type' ) ) {
	function trav_register_trek_post_type() {
		$labels = array(
			'name'                => _x( 'Treks', 'Post Type General Name', 'trav' ),
			'singular_name'       => _x( 'Trek', 'Post Type Singular Name', 'trav' ),
			'menu_name'           => __( 'Treks', 'trav' ),
			'all_items'           => __( 'All Treks', 'trav' ),
			'view_item'           => __( 'View Trek', 'trav' ),
			'add_new_item'        => __( 'Add New Trek', 'trav' ),
			'add_new'             => __( 'New Trek', 'trav' ),
			'edit_item'           => __( 'Edit Treks', 'trav' ),
			'update_item'         => __( 'Update Treks', 'trav' ),
			'search_items'        => __( 'Search Treks', 'trav' ),
			'not_found'           => __( 'No Treks found', 'trav' ),
			'not_found_in_trash'  => __( 'No Treks found in Trash', 'trav' ),
		);
		$args = array(
			'label'               => __( 'trek', 'trav' ),
			'description'         => __( 'Trek information pages', 'trav' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
			'taxonomies'          => array( ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'trek',
			'map_meta_cap'        => true,
		);
		register_post_type( 'trek', $args );
	}
}

/*
 * register room post type
 */
if ( ! function_exists( 'trav_register_room_type_post_type' ) ) {
	function trav_register_room_type_post_type() {
		$labels = array(
			'name'                => _x( 'Room Types', 'Post Type Name', 'trav' ),
			'singular_name'       => _x( 'Room Type', 'Post Type Singular Name', 'trav' ),
			'menu_name'           => __( 'Room Types', 'trav' ),
			'all_items'           => __( 'All Room Types', 'trav' ),
			'view_item'           => __( 'View Room Type', 'trav' ),
			'add_new_item'        => __( 'Add New Room', 'trav' ),
			'add_new'             => __( 'New Room Types', 'trav' ),
			'edit_item'           => __( 'Edit Room Types', 'trav' ),
			'update_item'         => __( 'Update Room Types', 'trav' ),
			'search_items'        => __( 'Search Room Types', 'trav' ),
			'not_found'           => __( 'No Room Types found', 'trav' ),
			'not_found_in_trash'  => __( 'No Room Types found in Trash', 'trav' ),
		);
		$args = array(
			'label'               => __( 'room types', 'trav' ),
			'description'         => __( 'Room Type information pages', 'trav' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
			'taxonomies'          => array( ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			//'show_in_menu'        => 'edit.php?post_type=trek',
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'trek',
			'map_meta_cap'        => true,
			'rewrite' => array('slug' => 'room-type', 'with_front' => true)
		);
		if ( current_user_can( 'manage_options' ) ) {
			$args['show_in_menu'] = 'edit.php?post_type=trek';
		}
		register_post_type( 'room_type', $args );
	}
}

/*
 * register things_to_do post type
 */
if ( ! function_exists( 'trav_register_things_to_do_post_type' ) ) {
	function trav_register_things_to_do_post_type() {
			
		$labels = array(
			'name'                => _x( 'Things To Do', 'Post Type Name', 'trav' ),
			'singular_name'       => _x( 'Things To Do', 'Post Type Singular Name', 'trav' ),
			'menu_name'           => __( 'Things To Do', 'trav' ),
			'all_items'           => __( 'All Things To Do', 'trav' ),
			'view_item'           => __( 'View Things To Do', 'trav' ),
			'add_new_item'        => __( 'Add New Things To Do', 'trav' ),
			'add_new'             => __( 'New Things To Do', 'trav' ),
			'edit_item'           => __( 'Edit Things To Do', 'trav' ),
			'update_item'         => __( 'Update Things To Do', 'trav' ),
			'search_items'        => __( 'Search Things To Do', 'trav' ),
			'not_found'           => __( 'No Things To Do found', 'trav' ),
			'not_found_in_trash'  => __( 'No Things To Do found in Trash', 'trav' ),
		);
		$args = array(
			'label'               => __( 'Things To Do', 'trav' ),
			'description'         => __( 'Things To Do page', 'trav' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
			'taxonomies'          => array( ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'trek',
			'map_meta_cap'        => true,
			'rewrite' => array('slug' => 'things-to-do', 'with_front' => true)
		);
		register_post_type( 'things_to_do', $args );
	}
}

/*
 * register things_to_do post type
 */
if ( ! function_exists( 'trav_register_travel_package_post_type' ) ) {
	function trav_register_travel_package_post_type() {
			
		$labels = array(
			'name'                => _x( 'Travel Package', 'Post Type Name', 'trav' ),
			'singular_name'       => _x( 'Travel Package', 'Post Type Singular Name', 'trav' ),
			'menu_name'           => __( 'Travel Package', 'trav' ),
			'all_items'           => __( 'All Travel Package', 'trav' ),
			'view_item'           => __( 'View Travel Package', 'trav' ),
			'add_new_item'        => __( 'Add New Travel Package', 'trav' ),
			'add_new'             => __( 'New Travel Package', 'trav' ),
			'edit_item'           => __( 'Edit Travel Package', 'trav' ),
			'update_item'         => __( 'Update Travel Package', 'trav' ),
			'search_items'        => __( 'Search Travel Package', 'trav' ),
			'not_found'           => __( 'No Travel Package found', 'trav' ),
			'not_found_in_trash'  => __( 'No Travel Package found in Trash', 'trav' ),
		);
		$args = array(
			'label'               => __( 'Travel Package', 'trav' ),
			'description'         => __( 'Travel Package page', 'trav' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'author' ),
			'taxonomies'          => array( ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'trek',
			'map_meta_cap'        => true,
			'rewrite' => array('slug' => 'travel-package', 'with_front' => true)
		);
		register_post_type( 'travel_package', $args );
	}
}

/*
 * register trek type taxonomy
 */
if ( ! function_exists( 'trav_register_trek_type_taxonomy' ) ) {
	function trav_register_trek_type_taxonomy(){
		$labels = array(
				'name'              => _x( 'Trek Types', 'taxonomy general name', 'trav' ),
				'singular_name'     => _x( 'Trek Type', 'taxonomy singular name', 'trav' ),
				'menu_name'         => __( 'Trek Types', 'trav' ),
				'all_items'         => __( 'All Trek Types', 'trav' ),
				'parent_item'                => null,
				'parent_item_colon'          => null,
				'new_item_name'     => __( 'New Trek Type', 'trav' ),
				'add_new_item'      => __( 'Add New Trek Type', 'trav' ),
				'edit_item'         => __( 'Edit Trek Type', 'trav' ),
				'update_item'       => __( 'Update Trek Type', 'trav' ),
				'separate_items_with_commas' => __( 'Separate trek types with commas', 'trav' ),
				'search_items'      => __( 'Search Trek Types', 'trav' ),
				'add_or_remove_items'        => __( 'Add or remove trek types', 'trav' ),
				'choose_from_most_used'      => __( 'Choose from the most used trek types', 'trav' ),
				'not_found'                  => __( 'No trek types found.', 'trav' ),
			);
		$args = array(
				'labels'            => $labels,
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'meta_box_cb'       => false
			);
		register_taxonomy( 'trek_type', array( 'trek' ), $args );
	}
}

/*
 * register location taxonomy
 */
if ( ! function_exists( 'trav_register_location_taxonomy' ) ) {
	function trav_register_location_taxonomy(){
		$labels = array(
				'name'              => _x( 'Locations', 'taxonomy general name', 'trav' ),
				'singular_name'     => _x( 'Location', 'taxonomy singular name', 'trav' ),
				'menu_name'         => __( 'Locations', 'trav' ),
				'all_items'         => __( 'All Locations', 'trav' ),
				'parent_item'                => null,
				'parent_item_colon'          => null,
				'new_item_name'     => __( 'New Location', 'trav' ),
				'add_new_item'      => __( 'Add Location', 'trav' ),
				'edit_item'         => __( 'Edit Location', 'trav' ),
				'update_item'       => __( 'Update Location', 'trav' ),
				'separate_items_with_commas' => __( 'Separate locations with commas', 'trav' ),
				'search_items'      => __( 'Search Locations', 'trav' ),
				'add_or_remove_items'        => __( 'Add or remove locations', 'trav' ),
				'choose_from_most_used'      => __( 'Choose from the most used locations', 'trav' ),
				'not_found'                  => __( 'No locations found.', 'trav' ),
			);
		$args = array(
				'labels'            => $labels,
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'meta_box_cb'       => false
			);
		register_taxonomy( 'location', array( 'trek', 'things_to_do', 'tour' ), $args );
	}
}

/*
 * remove posts column on amenity list panel
 */
if ( ! function_exists( 'trav_tax_location_columns' ) ) {
	function trav_tax_location_columns($columns) {
		unset( $columns['posts'] );
		return $columns;
	}
}

/*
 * register amenity taxonomy
 */
if ( ! function_exists( 'trav_register_amenity_taxonomy' ) ) {
	function trav_register_amenity_taxonomy(){
		$labels = array(
				'name'              => _x( 'Amenities', 'taxonomy general name', 'trav' ),
				'singular_name'     => _x( 'Amenity', 'taxonomy singular name', 'trav' ),
				'menu_name'         => __( 'Amenities', 'trav' ),
				'all_items'         => __( 'All Amenities', 'trav' ),
				'parent_item'                => null,
				'parent_item_colon'          => null,
				'new_item_name'     => __( 'New Amenity', 'trav' ),
				'add_new_item'      => __( 'Add New Amenity', 'trav' ),
				'edit_item'         => __( 'Edit Amenity', 'trav' ),
				'update_item'       => __( 'Update Amenity', 'trav' ),
				'separate_items_with_commas' => __( 'Separate amenities with commas', 'trav' ),
				'search_items'      => __( 'Search Amenities', 'trav' ),
				'add_or_remove_items'        => __( 'Add or remove amenities', 'trav' ),
				'choose_from_most_used'      => __( 'Choose from the most used amenities', 'trav' ),
				'not_found'                  => __( 'No amenities found.', 'trav' ),
			);
		$args = array(
				'labels'            => $labels,
				'hierarchical'      => false,
				'show_ui'           => true,
				'show_admin_column' => true,
				'meta_box_cb'       => false
			);
		register_taxonomy( 'amenity', array( 'room_type', 'trek' ), $args );
	}
}

// Post Types for Tour
/*
 * register tour post type
 */
if ( ! function_exists( 'trav_register_tour_post_type' ) ) {
	function trav_register_tour_post_type() {
		$labels = array(
			'name'                => _x( 'Tours', 'Post Type General Name', 'trav' ),
			'singular_name'       => _x( 'Tour', 'Post Type Singular Name', 'trav' ),
			'menu_name'           => __( 'Tours', 'trav' ),
			'all_items'           => __( 'All Tours', 'trav' ),
			'view_item'           => __( 'View Tour', 'trav' ),
			'add_new_item'        => __( 'Add New Tour', 'trav' ),
			'add_new'             => __( 'New Tour', 'trav' ),
			'edit_item'           => __( 'Edit Tours', 'trav' ),
			'update_item'         => __( 'Update Tours', 'trav' ),
			'search_items'        => __( 'Search Tours', 'trav' ),
			'not_found'           => __( 'No Tours found', 'trav' ),
			'not_found_in_trash'  => __( 'No Tours found in Trash', 'trav' ),
		);
		$args = array(
			'label'               => __( 'tour', 'trav' ),
			'description'         => __( 'Tour information pages', 'trav' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
			'taxonomies'          => array( ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'trek',
			'map_meta_cap'        => true,
		);
		register_post_type( 'tour', $args );
	}
}

/*
 * register tour type taxonomy
 */
if ( ! function_exists( 'trav_register_tour_type_taxonomy' ) ) {
	function trav_register_tour_type_taxonomy(){
		$labels = array(
				'name'              => _x( 'Tour Types', 'taxonomy general name', 'trav' ),
				'singular_name'     => _x( 'Tour Type', 'taxonomy singular name', 'trav' ),
				'menu_name'         => __( 'Tour Types', 'trav' ),
				'all_items'         => __( 'All Tour Types', 'trav' ),
				'parent_item'                => null,
				'parent_item_colon'          => null,
				'new_item_name'     => __( 'New Tour Type', 'trav' ),
				'add_new_item'      => __( 'Add New Tour Type', 'trav' ),
				'edit_item'         => __( 'Edit Tour Type', 'trav' ),
				'update_item'       => __( 'Update Tour Type', 'trav' ),
				'separate_items_with_commas' => __( 'Separate tour types with commas', 'trav' ),
				'search_items'      => __( 'Search Tour Types', 'trav' ),
				'add_or_remove_items'        => __( 'Add or remove tour types', 'trav' ),
				'choose_from_most_used'      => __( 'Choose from the most used tour types', 'trav' ),
				'not_found'                  => __( 'No tour types found.', 'trav' ),
			);
		$args = array(
				'labels'            => $labels,
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'meta_box_cb'       => false,
				'rewrite' => array('slug' => 'tour-type', 'with_front' => true)
			);
		register_taxonomy( 'tour_type', array( 'tour' ), $args );
	}
}


/*
 * init custom post_types
 */
if ( ! function_exists( 'trav_init_custom_post_types' ) ) {
	function trav_init_custom_post_types(){
		global $trav_options;
		if ( empty( $trav_options['disable_acc'] ) ) {
			trav_register_trek_post_type();
			trav_register_trek_type_taxonomy();
			trav_register_amenity_taxonomy();
			trav_register_room_type_post_type();
		}
		trav_register_location_taxonomy();
		trav_register_things_to_do_post_type();
		trav_register_travel_package_post_type();

		if ( empty( $trav_options['disable_tour'] ) ) {
			trav_register_tour_post_type();
			trav_register_tour_type_taxonomy();
		}
	}
}

/*
 * hide Add Trek Submenu on sidebar
 */
if ( ! function_exists( 'trav_hd_add_trek_box' ) ) {
	function trav_hd_add_trek_box() {
		if ( current_user_can( 'manage_options' ) ) {
			global $submenu;
			unset($submenu['edit.php?post_type=trek'][10]);
		}
	}
}

/*
 * hide Add Trek Submenu on sidebar
 */
if ( ! function_exists( 'trav_user_capablilities' ) ) {
	function trav_user_capablilities() {
		$admin_role = get_role( 'administrator' );
		$adminCaps = array(
			'edit_trek',
			'read_trek',
			'delete_trek',
			'edit_treks',
			'edit_others_treks',
			'publish_treks',
			'read_private_treks',
			'delete_treks',
			'delete_private_treks',
			'delete_published_treks',
			'delete_others_treks',
			'delete_trek',
			'edit_private_treks',
			'edit_published_treks',
		);
		foreach ($adminCaps as $cap) {
			$admin_role->add_cap( $cap );
		}

		$role = get_role( 'trav_busowner' );
		$caps = array(
			'edit_trek',
			'read_trek',
			'delete_trek',
			'edit_treks',
			'read_private_treks',
			'delete_treks',
			'delete_private_treks',
			'delete_published_treks',
			'edit_private_treks',
			'edit_published_treks',
		);
		foreach ($caps as $cap) {
			$role->add_cap( $cap );
		}
	}
}

add_action( 'init', 'trav_init_custom_post_types', 0 );
add_action('admin_menu', 'trav_hd_add_trek_box');
add_action('admin_init', 'trav_user_capablilities');

add_filter("manage_edit-location_columns", 'trav_tax_location_columns'); 
?>