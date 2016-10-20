/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Plugin from '/ckeditor5/core/plugin.js';
import Editor from '/ckeditor5/core/editor/editor.js';

let editor;

before( () => {
	editor = new Editor();
} );

describe( 'constructor', () => {
	it( 'should set the `editor` property', () => {
		let plugin = new Plugin( editor );

		expect( plugin ).to.have.property( 'editor' ).to.equal( editor );
	} );
} );

describe( 'init', () => {
	it( 'should exist and do nothing', () => {
		let plugin = new Plugin( editor );

		expect( plugin.init ).to.be.a( 'function' );

		plugin.init();
	} );
} );

describe( 'destroy', () => {
	it( 'should exist and do nothing', () => {
		let plugin = new Plugin( editor );

		expect( plugin.destroy ).to.be.a( 'function' );

		plugin.destroy();
	} );
} );
