<?php
/**
 * Plugin Name:       Rating Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rating_plugin
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rating_plugin_rating_plugin_block_init() {
	register_block_type( __DIR__ . '/build/star-rating' );
	register_block_type( __DIR__ . '/build/tab-bar');
	register_block_type( __DIR__ . '/build/cover-block');
	register_block_type( __DIR__ . '/build/map-block');
	register_block_type( __DIR__ . '/build/destination-highlight');
	register_block_type( __DIR__ . '/build/icon-picker');
	
	
}
add_action( 'init', 'rating_plugin_rating_plugin_block_init' );




function rating_plugin_frontend_assets() {
    
    wp_enqueue_style('font-awesome', plugin_dir_url( __FILE__ ).'assets/css/all.min.css', array(), ' 6.5.1', true);
    wp_enqueue_script('font-js', plugin_dir_url( __FILE__ ).'assets/js/all.min.js', array(), ' 6.5.1', true);
}
add_action( 'wp_enqueue_scripts', 'rating_plugin_frontend_assets' ); 


function rating_plugin_editor_assets() {
    
    wp_enqueue_style('font-awesome-editor', plugin_dir_url( __FILE__ ).'assets/css/all.min.css', array(), ' 6.5.1', true);
    
    
    wp_enqueue_script('font-awesome-js-editor', plugin_dir_url( __FILE__ ).'assets/js/all.min.js', array(), ' 6.5.1', true);
}
add_action( 'enqueue_block_editor_assets', 'rating_plugin_editor_assets' );