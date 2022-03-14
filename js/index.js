// What - we do Section 
// let ourWork = document.getElementById("colinfo1")
// let workIcon1 = document.getElementById("design")
// let workIcon2 = document.getElementById("development")
// let workIcon3 = document.getElementById("projectM")










//What we do class toggle 

// let displayInfo = ()=>
// {
//     if(ourWork.style.display === 'none')
//     {
//         ourWork.style.display =='block';
//     }
// }

// workIcon1.addEventListener("click", displayInfo)

$(document).ready(()=>{

    $("#design, #design2").click(()=>
    {
        $('.colinfo1').slideToggle();
        $('#design').slideToggle();

    });

    $("#development, #development2").click(()=>
    {
        $('.colinfo2').slideToggle();
        $('#development').slideToggle();

    });

    $("#projectM, #projectM2").click(()=>
    {
        $('.colinfo3').slideToggle();
        $('#projectM').slideToggle();

    });













});