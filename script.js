   
    const title= document.querySelector('.title h2')
    const sample= document.querySelectorAll('.sample img')
    const inpFile =document.getElementById("inpFile")
    const selImg =document.querySelectorAll('.selImg img')
    const next = document.querySelector('#next')
    const ssImg =document.querySelectorAll(".ssImg")
    const container =document.querySelectorAll('.container')
    const sampleSS =document.querySelector('.sampleSS')
    const samImg=document.querySelectorAll('.sampleSS img')
    const template = document.querySelector("#template")
    sampleSS.style.display='none'
    var n=1 
    var t=1
    function slide(){
        var d=-3
        sample.forEach(x => {
            sample[x.alt-1].style.animation=`slide${n} 12s ease ${d=d+3}s infinite`  
        });
    }
    function temp(){
        var d=-3
        samImg.forEach(x =>{
            samImg[x.alt-1].style.animation=`slide${t} 12s ease ${d=d+3}s infinite`  
        });
    }
    

function controlp(){
    if(n<5){
        n++
    }
    else n=1
    slide()
    title.innerHTML=`Template ${n}`
   
}

function controlm(){
    if(n>1){
        n--
    }
    else n=5
    slide()
    title.innerHTML=`Template ${n}`
    
}
var im=0;
inpFile.addEventListener('change',function(){
    const file =this.files[0];
    if(file){
        const reader = new FileReader();
        // selImg[im].style.display='block'

        reader.addEventListener('load',function(){

            selImg[im-1].setAttribute('src',this.result)
            samImg[im-1].setAttribute('src',this.result)
          
            
        });
        im++
        if(im>4) {
            im=4
            alert('you have selected all foure images, now click next')
        }

        reader.readAsDataURL(file);
        
    }
    else{
        console.log("hihi");
    }
});

next.addEventListener('click',function(){
    if(im!=4){
        alert('select all four images')
    }
    if(im==4){
        t=parseInt(template.value);
        container[0].style.display='none'
        sampleSS.style.display='block'
        temp()
    }
})


   
