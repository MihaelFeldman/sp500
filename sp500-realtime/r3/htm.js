
	HTM = {};

	HTM.init = function()  {

		let container;
		const b = '<br>';

		container = document.body.appendChild( document.createElement( 'div' ) );
		container.id = 'container';
		container.innerHTML =

			'<div id=menu >' +

				'<h2>' +
					'<a href=http://jaanga.github.io/sp500/ title="Jaanga - your 3D happy place" > &#x2766 </a>' + b +
					'<a href="" title="Click here to refresh this page" >📈' + location.pathname.split( '/' ).pop().slice( 0, -5).replace( /-/g, ' ' ) + '.' + revNumber + '</a>' +
					' <a href=../../index.html#sp500-realtime/README.md onmouseover=popHelp.style.display=""; onmouseout=popHelp.style.display="none"; > &#x24D8; </a>' +
				'</h2>' +

				'<div class=popUp id=popHelp style=display:none; ><p>Hi there!</p>Click the i-in-circle, info icon for latest updates.</div>' +
				'<p><small><i>' + document.head.querySelector("[name=description]").content + '</i></small></p>' +


				'<div id=mnuSelect ></div>' +

				'<div id=mnuShow ></div>' +

				'<div id=mnuSettings ></div>' +

				'<details>' +
					'<summary><h3>About</h3></summary>' +

					'<p>' +
						'&bull; Rotate|Zoom|Pan => 1|2|3' + b +
						'&nbsp; fingers/buttons' + b +
						'&bull; Rotation => spacebar' + b +
						'&bull; Slide menu => \'hamburger\' icon' +
					'<p>' +

					'<p>Click the \'i in a circle\' icon for more <a href=index.html#readme.md title="Click here for help and information" >help</a>.</p>' +

					'<p>' +
						'Keywords:' + b +
						document.head.querySelector("[name=keywords]").content.replace( /,/g, ', ' ) + b + b +
						'Revision Date:' + b +
						document.head.querySelector("[name=date]").content + b + b +
						'File name:' + b +
						location.pathname.split( '/' ).pop() + b +
					'</p>' +

					'<p>Copyright &copy; ' + ( new Date() ).getFullYear() + ' Jaanga authors. <a href=http://jaanga.github.io/home/r4/index.html#http://jaanga.github.io/jaanga-copyright-and-mit-license.md >MIT license</a>.</p>' +

				'</details>' +

				'<hr>' +

				'<center><a href=javascript:menu.scrollTop=0; style=text-decoration:none; onmouseover=pop2.style.display=""; onmouseout=pop2.style.display="none"; ><h1> &#x2766 <h1></a></center>' +
				'<div class=popUp id=pop2 style=display:none;bottom:100px; >Jaanga - your 3D happy place.<br>Click here to return to the top of the page</div>' +

			'</div>' +

			'<div id=hamburger onclick=container.style.left=container.style.left===""?"-325px":""; >' +
				'<div id=bars title="Click this hamburger to slide the menu" > &#9776 </div>' +
			'</div>' +

		'';

	}
