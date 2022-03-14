// What - we do Section class toggle 


$(document).ready(()=>{

    // What we do section

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


    // What we do section


    // Porfolio Section
    $('#img1').mouseenter(()=>
    {
        $('.cols-info1').slideToggle();
        $('#img1').addClass("darken")
    })


    $('#img2').mouseenter(()=>
    {
        $('.cols-info2').slideToggle();
        $('#img2').addClass("darken")

    })

    $('#img3').mouseenter(()=>
    {
        $('.cols-info3').slideToggle();
        $('#img3').addClass("darken")

    })

    $('#img4').mouseenter(()=>
    {
        $('.cols-info4').slideToggle();
        $('#img4').addClass("darken")

    })

    $('#img5').mouseenter(()=>
    {
        $('.cols-info5').slideToggle();
        $('#img5').addClass("darken")

    })


    $('#img6').mouseenter(()=>
    {
        $('.cols-info6').slideToggle();
        $('#img6').addClass("darken")

    })


    $('#img7').mouseenter(()=>
    {
        $('.cols-info7').slideToggle();
        $('#img7').addClass("darken")

    })


    $('#img8').mouseenter(()=>
    {
        $('.cols-info8').slideToggle();
        $('#img8').addClass("darken")

    })











});