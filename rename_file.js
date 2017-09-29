 // 文件改名工具
 var fs = require("fs");
 var path = require('path');

 const m={ 
 	'535093.jpg': '10608465',
  	'536528.jpg': '10608467',
  	'558747.jpg': '10608463',
  	'562225.jpg': '10608469',
  	'582864.jpg': '10608466',
  	'603941.jpg': '10608462',
  	'605327.jpg': '10608460',
  	'606098.jpg': '10608464',
  	'611086.jpg': '10608468',
  	'611713.jpg': '10608461' }

function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(src, dst) {
	try {
    	fs.mkdirSync(dst);
	} catch (e) {
	    if (e.code != 'EEXIST') {
	        console.error("Could not set up dst directory, error was: ", e);
	        process.exit(1);
	    }
	}

	fs.readdirSync(src).forEach(function (file) {
	    var pathname = path.join(src, file);
	    if (!fs.statSync(pathname).isDirectory()) {
	    	var toname=m[file];
	    	if(toname){
	    		toname=toname+".jpg";
	    		toPathname = path.join(dst, toname);
	    		copy(pathname,toPathname)
	    	}
	    }
  	});
}


main("D:/zhongliang/鲜动全城/小白图", "D:/zhongliang/鲜动全城/小白图/rename");