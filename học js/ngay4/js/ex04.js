var content = '<h1>Học lập trình không khó tại F8 Học lập trình không khó tại F8</h1>';

var keyword = "trình";
var pos = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent  = "";
while(pos !== -1){
    newContent+= content.slice(0,pos)+ "<span>"+content.slice(pos,pos+keyword.length)+"</span>";
    content = content.slice(pos + keyword.length);
    pos = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent = newContent+content;

document.write(newContent);





 
