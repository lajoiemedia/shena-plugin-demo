<?php
/**
 * Plugin Name: Shena Knit Plugin
 * Text Domain: shena-knit-plugin
 */

defined( 'ABSPATH' ) || exit;

function shena_knit_plugin_register_blocks() {
	$build_dir = __DIR__ . '/build/blocks';
	$manifest  = __DIR__ . '/build/blocks-manifest.php';

	// WordPress 6.7+: fast, manifest-based registration.
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) && file_exists( $manifest ) ) {
		wp_register_block_types_from_metadata_collection( $build_dir, $manifest );
		return;
	}

	// Fallback for older WordPress: register every built block folder.
	foreach ( glob( $build_dir . '/*', GLOB_ONLYDIR ) as $dir ) {
		register_block_type( $dir );
	}
}
add_action( 'init', 'shena_knit_plugin_register_blocks' );