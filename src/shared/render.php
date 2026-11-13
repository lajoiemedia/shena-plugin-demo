<?php
$props = empty( $attributes ) ? new stdClass() : $attributes;
?>
<div <?php echo get_block_wrapper_attributes( [
	'data-props' => wp_json_encode( $props ),
] ); ?>></div>