import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

export default function mountBlock( metadata, Component ) {
	const selector = '.wp-block-' + metadata.name.replace( '/', '-' );
	domReady( () => {
		document.querySelectorAll( selector ).forEach( ( el ) => {
			let props = {};
			try {
				props = JSON.parse( el.dataset.props || '{}' );
			} catch ( e ) {}
			createRoot( el ).render( <Component { ...props } /> );
		} );
	} );
}