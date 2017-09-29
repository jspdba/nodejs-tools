// 鲜动全城：读取excel中主备品，生成 product.json 文件(中的主品，备品)
var xlsx = require("node-xlsx");
const fs= require('fs');

var product={
	recommendProducts:[],
	backupProducts:[]
}

var saveContent = function(content, filename){
    fs.writeFile(filename, content,function(err){
        if(err){
            console.error(err)
        }
    })
}


function parseData(src, dst) {
	let doc = xlsx.parse(src);
	let data = doc[0]['data'];

	let d=data.slice(1)

	for(let rowid in d){
	    row=d[rowid];
	    // console.log(row);
	    if(row[5]==0){
		    product.recommendProducts.push({
		    	"img": "/ticketactivity/ldhd33/images/product/0/"+row[0]+".jpg",
		    	"productId": ""+row[0]
		    })	
	    }else{
	    	product.backupProducts.push({
		    	"img": "/ticketactivity/ldhd33/images/product/0/"+row[0]+".jpg",
		    	"productId": ""+row[0]
		    })
	    }
	    
	}
	saveContent(JSON.stringify(product,null, 4), dst);
}

function main() {
	parseData("D:/zhongliang/鲜动全城/活动换品/高校选品(终).xlsx", "out.js");
}
main();