
	let MNU = mnu = {};


	MNU.init = function() {

		let index, txt;
		txt = '';

		for ( let i = 0; i < sectors.length; i++ ) {

			txt += '<div onclick=MNU.showSector(' + ( i + 1 ) + '); ><span style=background-color:#' + colors[ i + 1 ].toString( 16 ) + '; >&nbsp; &nbsp; &nbsp; </span> &nbsp;' + sectors[ i ].slice(0,25) + '</div>';

		}

		mnuSector.innerHTML = txt + '<p><button onclick=MNU.resetSectors();  style=width:100%; >Reset Sectors</button></p>';

		inpSearch.onclick = function() { this.select(); } // highlights everything
		inpSearch.onkeyup = function() { MNU.setSymbolSearch(); }

	}


	MNU.setMenuSymbolSelect = function() { // runs after symbols loaded

//		detSymbols.open = true; // toggle for debug
		detSymbols.ontoggle = function() { inpSearch.focus(); }

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			selSymbols[ i ] = new Option( symbols.keys[ i ] );

		}

		selSymbols.selectedIndex = Math.floor( Math.random() * symbols.keys.length );

// improve

		selSymbols.onchange = function() {

			index = symbols.keys.indexOf( selSymbols.value )
			intersected = symbols.touchables[ index ] ;
			setHeadsUp();
			MNU.showSymbol( selSymbols.selectedIndex );

		}

		selSymbols.onfocus = function() {

			index = symbols.keys.indexOf( selSymbols.value )
			intersected = symbols.touchables[ index ] ;
			setHeadsUp();
			MNU.showSymbol( selSymbols.selectedIndex );

		}

	}



	MNU.setSymbolSearch = function() {

		let letters;

		letters = inpSearch.value.toUpperCase();

		selSymbols.innerHTML = '';

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			if ( symbols.keys[ i ].indexOf( letters ) > -1 ) {

				selSymbols.innerHTML += '<option>' + symbols.keys[ i ]  + '</option>';

			}

		}

		selSymbols.selectedIndex = 0;

	}


	MNU.showSymbol = function( index ) {

		let tch;

		for ( let i = 0; i < symbols.touchables.length; i++ ) {

			tch = symbols.touchables[ i ];

			if ( index !== i ) {

				tch.material.opacity = 0.1;
				tch.children[0].material.opacity = 0;
				tch.castShadow = false;
				tch.receiveShadow = false;
				symbols.meshes[ i ].children[ 1 ].visible = false;
				symbols.lines.children[ i ].material.opacity = 0.2;

			} else {

				tch.material.opacity = 0.85;
				tch.children[0].material.opacity = 1;
				tch.castShadow = true;
				tch.receiveShadow = true;
				symbols.meshes[ i ].children[ 1 ].visible = true;
				symbols.lines.children[ i ].material.opacity = 1;

			}

		}

	}


	MNU.showSector = function( id ) {

		let tch;

		for ( let i = 0; i < symbols.touchables.length; i++ ) {

			tch = symbols.touchables[ i ];

			if ( symbols[ tch.name ].sectorID !== id ) {

				tch.material.opacity = 0.1;
				tch.children[0].material.opacity = 0;
				tch.castShadow = false;
				tch.receiveShadow = false;
				symbols.meshes[ i ].children[ 1 ].visible = false;
				symbols.lines.children[ i ].material.opacity = 0.2;

			} else {

				tch.material.opacity = 0.85;
				tch.children[0].material.opacity = 1;
				tch.castShadow = true;
				tch.receiveShadow = true;
				symbols.meshes[ i ].children[ 1 ].visible = true;
				symbols.lines.children[ i ].material.opacity = 1;

			}

		}

	}


	MNU.resetSectors = function() {

		let tch;

		for ( let i = 0; i < symbols.touchables.length; i++ ) {

			tch = symbols.touchables[ i ];

			tch.material.opacity = 0.85;
			tch.children[0].material.opacity = 1;
			tch.castShadow = true;
			tch.receiveShadow = true;
			symbols.meshes[ i ].children[ 1 ].visible = 1;
			symbols.lines.children[ i ].material.opacity = 1;

		}

	}