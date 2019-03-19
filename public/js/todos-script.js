$("#sortable").sortable();
$("#sortable").disableSelection();

countTodos();

// all done btn
$("#checkAll").click(function(){
    AllDone();
});

//create todo
$('.add-todo').on('keypress',function (e) {
      e.preventDefault
      if (e.which == 13) {
           if($(this).val() != ''){
           const todo = $(this).val(),
                url = $(this).data('url'),
                user = $(this).data('user');

            createTodo(todo,user,url); 
            countTodos();
           }else{
               // some validation
           }
      }
});
// mark task as done
$('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
    if($(this).prop('checked')){
        const taskLbl = $(this).parent().parent().find('label'),
            task = taskLbl.text(),
            url = taskLbl.data('url');

        $(this).parent().parent().parent().addClass('remove');

        done(task, url);
        countTodos();
    }
});

//delete done task from "already done"
$('.todolist').on('click','.remove-item',function(){
    removeItem(this);
});

// count tasks
function countTodos(){
    const count = $("#sortable li").length;
    $('.count-todos').html(count);
}

//create task
function createTodo(text,user,url){

    $.ajax({
        url,
        method:'POST',
        data:{
            task:text,
            user
        },
        success:function(todo){
            console.log(todo)
            const markup = `<li class="ui-state-default">
                    <div class="checkbox">
                        <label data-url="/todos/${todo._id}/update">
                            <input type="checkbox" value="" />${text}
                        </label>
                    </div>
                </li>`;
            $('#sortable').append(markup);
            $('.add-todo').val('');
        },
        error:function(err){
            console.log(err)
        }
    })
}

//mark task as done
function done(doneItem, url){

    $.ajax({
        url,
        method:'PUT',
        success:function(res){
            console.log(res)
            const done = doneItem;
            const markup = '<li>'+ done +'<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
            $('#done-items').append(markup);
            $('.remove').remove();
        },
        error:function(err){
            console.log(err)
        }
    })
}

//mark all tasks as done
function AllDone(){
    const myArray = [];

    $('#sortable li').each( function() {
         myArray.push($(this).text());   
    });
    
    // add to done
    for (i = 0; i < myArray.length; i++) {
        $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    }
    
    // myArray
    $('#sortable li').remove();
    countTodos();
}

//remove done task from list
function removeItem(element){
    $(element).parent().remove();
}