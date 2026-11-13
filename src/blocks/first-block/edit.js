import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.css';

import { TextControl } from '@wordpress/components';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label="Starting count"
				type="number"
				value={ attributes.startCount }
				onChange={ ( value ) =>
					setAttributes( { startCount: value === '' ? 0 : +value })
				}
			/>
		</div>
	);
}
