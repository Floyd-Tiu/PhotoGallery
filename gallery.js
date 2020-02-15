function upDate(previewPic)
{
    var src = previewPic.getAttribute('src');
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')"; 
    document.getElementById('image').innerHTML = "";
}
   
function unDo()
{
       document.getElementById('image') = 'url("")';
       document.getElementById('image') = 'Hover image to display here';
}