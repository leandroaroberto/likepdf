

class likePdf {

    constructor (){        
        this._val = null;        
    }

    set content(elementId){         

        if ($("#"+elementId).is("textarea"))
        {
            this._val = $("#"+elementId).val();
            
        }        
        else
        {
            this._val = $("#"+elementId).text();
        }
                
    }

    get content(){
        return this._val;
    }

}


    let likepdf = new likePdf;

    
    $(document).on("click",".likePdf-container span",function(){        
        if(! $(this).hasClass('edited'))
        {
            $(this).addClass('disabled');
            $(this).next().removeClass('edit').addClass('edited');
            let elementId = $(this).next().children().attr('id');
            $("#"+elementId).focus();
        }        
    });

    $(document).on("blur",".likePdf-container span",function(){       
        
        $(".likePdf-container span").removeClass('disabled');
        $(".likePdf-container .edited").addClass('edit').removeClass('edited');        
        
        likepdf.content = $(this).children().attr('id');
        $(this).prev().html(likepdf.content);
    });

    
    /*$(".likePdf-container").on('keydown', 'input', function(e) { 
        let keyCode = e.keyCode || e.which;         
        if (keyCode == 9) { 
           e.preventDefault(); 
           // call custom function here
         } 
      });*/
      


