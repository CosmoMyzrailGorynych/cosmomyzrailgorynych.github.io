canv = document.createElement('canvas');
canv.x = canv.getContext('2d');
document.getElementById('preview').appendChild(canv);
pat = document.createElement('canvas');
pat.x = pat.getContext('2d');
dpc = 118;

function points(arr) {
	for (var i = 0; i < arr.length; i++) {
		pat.x.beginPath();
		pat.x.arc(arr[i][0]*pat.width,arr[i][1]*pat.height,3,0,2*Math.PI);
		pat.x.fill();
	}
}

function change() {
	var    paper = document.getElementById('paper').value,
			grid = document.getElementById('grid').value,
		cellsize = Number(document.getElementById('cellsize').value) || 1,
		  fields = document.getElementById('fields').checked;
	if (paper == 0) {
		canv.width = 3508;
		canv.height = 4961;
	} else if (paper == 1) {
		canv.width = 2480;
		canv.height = 3508;
	} else if (paper == 2) {
		canv.width = 1748;
		canv.height = 2480;
	} else if (paper == 3) {
		canv.width = 4961;
		canv.height = 3508;
	} else if (paper == 4) {
		canv.width = 3508;
		canv.height = 2480;
	} else if (paper == 5) {
		canv.width = 2480;
		canv.height = 1748;
	}
	canv.x.fillStyle = '#fff';
	canv.x.fillRect(0,0,canv.width,canv.height);
	
	/******* размеры ********/
	/* квадрат и строчки */
	if (grid == 0 || grid == 5 || grid == 12) {
		pat.width = pat.height = cellsize*dpc;
	}
	/* полька, ромб */
	if (grid == 1 || grid == 6) {
		pat.width = pat.height = cellsize*2*dpc/Math.sqrt(2);
	}
	/* треугольник */
	if (grid == 2 || grid == 8) {
		pat.width = Math.sqrt(5)*cellsize*dpc;
		pat.height = cellsize*2*dpc;
	}
	/* гекс */
	if (grid == 7) {
		pat.width = Math.sqrt(5)*cellsize*dpc*1.5;
		pat.height = cellsize*4*dpc;
	}
	/* изометрия */
	if (grid == 3 || grid == 10) {
		pat.width = Math.sqrt(5)*cellsize*dpc;
		pat.height = cellsize*dpc;
	}
	/* псевдоизометрия */
	if (grid == 4 || grid == 11) {
		pat.width = cellsize*2*dpc;
		pat.height = cellsize*dpc;
	}
	/* миллиметровка */
	if (grid == 9) {
		pat.width = pat.height = 5*dpc;
	}

	pat.x.clearRect(0,0,pat.width,pat.height);
	pat.x.lineWidth = 4;
	pat.x.lineJoin = 'round';
	pat.x.lineCap = 'round';
	pat.x.strokeStyle = '#ccc';
	pat.x.fillStyle = '#000';

	/******* Линии ********/
	// Клетка
	if (grid == 5) {
		pat.x.beginPath();
		pat.x.rect(0,0,pat.width,pat.height);
		pat.x.stroke();
	}
	// В линейку
	if (grid == 12) {
		pat.x.beginPath();
		pat.x.moveTo(0,0);
		pat.x.lineTo(pat.width,0);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(0,pat.height);
		pat.x.lineTo(pat.width,pat.height);
		pat.x.stroke();
	}
	// Ромб, изометрические
	if (grid == 6 || grid == 10 || grid == 11) {
		pat.x.beginPath();
		pat.x.moveTo(0,0);
		pat.x.lineTo(pat.width,pat.height);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width,0);
		pat.x.lineTo(0,pat.height);
		pat.x.stroke();
	}
	/* треугольник */
	if (grid == 8) {
		pat.x.beginPath();
		pat.x.moveTo(0,pat.height/2);
		pat.x.lineTo(pat.width*0.25,pat.height);
		pat.x.lineTo(pat.width*0.75,0);
		pat.x.lineTo(pat.width,pat.height/2);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(0,pat.height/2);
		pat.x.lineTo(pat.width*0.25,0);
		pat.x.lineTo(pat.width*0.75,pat.height);
		pat.x.lineTo(pat.width,pat.height/2);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(0,0);
		pat.x.lineTo(pat.width,0);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(0,pat.height/2);
		pat.x.lineTo(pat.width,pat.height/2);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(0,pat.height);
		pat.x.lineTo(pat.width,pat.height);
		pat.x.stroke();
	}
	/* гекс */
	if (grid == 7) {
		pat.x.beginPath();
		pat.x.moveTo(pat.width/6,0);
		pat.x.lineTo(0,pat.height*0.25);
		pat.x.lineTo(pat.width/6,pat.height*0.5);
		pat.x.lineTo(0,pat.height*0.75);
		pat.x.lineTo(pat.width/6,pat.height);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width*0.5,0);
		pat.x.lineTo(pat.width*2/3,pat.height*0.25);
		pat.x.lineTo(pat.width*0.5,pat.height*0.5);
		pat.x.lineTo(pat.width*2/3,pat.height*0.75);
		pat.x.lineTo(pat.width*0.5,pat.height);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width/6,0);
		pat.x.lineTo(pat.width/2,0);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width/6,pat.height*1);
		pat.x.lineTo(pat.width/2,pat.height*1);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width/6,pat.height*0.5);
		pat.x.lineTo(pat.width/2,pat.height*0.5);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width*2/3,pat.height*0.25);
		pat.x.lineTo(pat.width,pat.height*0.25);
		pat.x.stroke();

		pat.x.beginPath();
		pat.x.moveTo(pat.width*2/3,pat.height*0.75);
		pat.x.lineTo(pat.width,pat.height*0.75);
		pat.x.stroke();
	}

	// Миллиметровка
	if (grid == 9) {
		pat.x.strokeStyle = '#ddd';
		pat.x.lineWidth = 2;
		for (var i = 0; i <= 50; i++) {
			pat.x.beginPath();
			pat.x.moveTo(0,pat.height*i/50);
			pat.x.lineTo(pat.width,pat.height*i/50);
			pat.x.stroke();
		}
		for (i = 0; i <= 50; i++) {
			pat.x.beginPath();
			pat.x.moveTo(pat.width*i/50,0);
			pat.x.lineTo(pat.width*i/50,pat.height);
			pat.x.stroke();
		}
		pat.x.lineWidth = 6;
		pat.x.strokeStyle = '#aaa';
		for (i = 0; i <= 5; i++) {
			pat.x.beginPath();
			pat.x.moveTo(0,pat.height*i/5);
			pat.x.lineTo(pat.width,pat.height*i/5);
			pat.x.stroke();
		}
		for (i = 0; i <= 5; i++) {
			pat.x.beginPath();
			pat.x.moveTo(pat.width*i/5,0);
			pat.x.lineTo(pat.width*i/5,pat.height);
			pat.x.stroke();
		}
	}

	/******* Точки ********/
	// Квадрат, клетка, миллиметровка
	if (grid == 0 || grid == 5 || grid == 9) {
		points([
			[0,0],
			[0,1],
			[1,0],
			[1,1]
		]);
	}
	// Полька, ромб, изометрические
	if (grid == 1 || grid == 6 || grid == 3 || grid == 4 || grid == 10 || grid == 11) {
		points([
			[0,0],
			[0,1],
			[1,0],
			[1,1],
			[0.5,0.5]
		]);
	}
	// треугольник
	if (grid == 2 || grid == 8) {
		points([
			[0.25,0],
			[0.75,0],
			[0,0.5],
			[0.5,0.5],
			[1,0.5],
			[0.25,1],
			[0.75,1]
		]);
	}
	// Гекс
	if (grid == 7) {
		points([
			[0.5,0],
			[0.5,0.5],
			[0.5,1],
			[0,0.25],
			[0,0.75],
			[1,0.25],
			[1,0.75],
			[1/6,0],
			[1/6,0.5],
			[1/6,1],
			[4/6,0.25],
			[4/6,0.75]
		]);
	}
	var pt = canv.x.createPattern(pat,"repeat");
	canv.x.fillStyle = pt;
	canv.x.save();
	if (fields) {
		canv.x.translate(dpc*1.27,dpc*2.27);
		canv.x.fillRect(0,0,canv.width-dpc*2.54,canv.height-dpc*3.54);
		canv.x.restore();
		canv.x.strokeStyle = canv.x.fillStyle = '#000';
		canv.x.lineWidth = 4;

		canv.x.beginPath();
		canv.x.moveTo(dpc*1.27,dpc*2);
		canv.x.lineTo(canv.width/2,dpc*2);
		canv.x.stroke();

		canv.x.font = dpc * 0.5 + 'px Calibri, Verdana, sans-serif';
		canv.x.fillText("Дата:",canv.width*0.65,dpc*2);

		canv.x.beginPath();
		canv.x.moveTo(canv.x.measureText("Дата:").width+dpc*0.5+canv.width*0.65,dpc*2);
		canv.x.lineTo(canv.width-dpc*1.27,dpc*2);
		canv.x.stroke();
	} else {
		canv.x.translate(dpc*1.27,dpc*1.27);
		canv.x.fillRect(0,0,canv.width-dpc*2.54,canv.height-dpc*2.54);
		canv.x.restore();
	}

	// Обводка для сеток
	if (grid >= 5) {
		canv.x.lineWidth = 6;
		canv.x.strokeStyle = '#ccc';
		canv.x.beginPath();
		canv.x.rect(dpc*1.27,fields ? dpc*2.27 : dpc*1.27,canv.width-dpc*2.54,canv.height-dpc*(fields ? 3.54 : 2.54));
		canv.x.stroke();
	}

	canv.x.font = dpc * 0.5 + 'px Calibri, Verdana, sans-serif';
	canv.x.fillStyle="#fff";
	canv.x.fillRect(canv.width-dpc*2 - canv.x.measureText("NeedPaper").width, canv.height-dpc*2,dpc+canv.x.measureText("NeedPaper").width,dpc*2);
	canv.x.fillStyle="#000";
	canv.x.fillText("NeedPaper",canv.width-dpc*1.5-canv.x.measureText("NeedPaper").width, canv.height-dpc*1.47);
}

function save(link) {
    link.href = canv.toDataURL();
    var q = document.getElementById('grid'),
    	w = document.getElementById('paper');
    link.download = w.item(w.value).innerHTML + ' ' + q.item(q.value).innerHTML + ' ' + document.getElementById('cellsize').value + 'см.png';
}
function prnt(){
    var win=window.open();
    win.document.write("<br><img src='"+canv.toDataURL()+"'/>");
    win.print();
    win.location.reload();
}

change();