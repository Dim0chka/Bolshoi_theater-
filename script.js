// Слайдер книги
var theNum = "0";

let arr = ["imges", "imges1", "imges2", "book"];

function go_to_right()

{

theNum++;

if(theNum == arr.length){theNum="0";}

$(B_images).fadeOut(400,function(){
    B_images.src='images/'+arr[theNum]+'.jpg';
    $(B_images).fadeIn(400)
})

}

function go_to_left()

{

theNum--;

if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );

$(B_images).fadeOut(400,function(){
    B_images.src='images/'+arr[theNum]+'.jpg';
    $(B_images).fadeIn(400)
})

}





// Для кнопки СЛЕД 
$('.next').mouseout(function(){

    $(".next").css("color","#C4C4C4")
    $(".border_right").css("border-left","17px solid #C4C4C4")
    $(".border_right").css("border-top","7px solid transparent")
    $(".border_right").css("border-bottom","7px solid transparent")
    

    })

    $('.next').mouseover(function(){

        $(".next").css("color","#fff")
        $(".border_right").css("border-left","17px solid #fff")
        $(".border_right").css("border-top","7px solid transparent")
        $(".border_right").css("border-bottom","7px solid transparent")
        
        })

// Для кнопки ПРЕД 
        $('.previous').mouseout(function(){

            $(".previous").css("color","#C4C4C4")
            $(".border_left").css("border-right","17px solid #C4C4C4")
            $(".border_left").css("border-top","7px solid transparent")
            $(".border_left").css("border-bottom","7px solid transparent")
            
        
            })
        
            $('.previous').mouseover(function(){
        
                $(".previous").css("color","#fff")
                $(".border_left").css("border-right","17px solid #fff")
                $(".border_left").css("border-top","7px solid transparent")
                $(".border_left").css("border-bottom","7px solid transparent")
                
                })


// Отправить 
$("input").on("keyup", function(){
    $(this).css("border-color", "#616161")
})

$(".btn2").on("click", function(){
    if ($(".email").val().includes("@") == false) {
        $(".email").css("border-color", "red")
    }
    if ($(".email").val().includes(".") == false) {
        $(".email").css("border-color", "red")
    }
    if ($(".tel").val().length < 11) {
        $(".tel").css("border-color", "red")
    }
    else {
        alert("Успешно!")
    }
})

