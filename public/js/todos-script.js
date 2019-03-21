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

            createTodo(todo, user, url); 
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
            url = taskLbl.data('url'),
            taskId = taskLbl.data('id');

        $(this).parent().parent().parent().addClass('remove');

        done(task, url, taskId);
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
                        <label data-url="/todos/${todo._id}" data-id="${todo._id}">
                            <input type="checkbox" value="" />${text}
                        </label>
                    </div>
                </li>`;
            $('#sortable').append(markup);
            $('.add-todo').val('');
            countTodos();
        },
        error:function(err){
            console.log(err);
            countTodos();
        }
    })
}

//mark task as done
function done(doneItem, url, taskId){

    $.ajax({
        url,
        method:'PUT',
        success:function(res){
            console.log(res)
            const markup = `<li>${doneItem}<button data-url="/todos/${taskId}" class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>`;
            $('#done-items').append(markup);
            $('.remove').remove();
            countTodos();
        },
        error:function(err){
            console.log(err);
            countTodos();
        }
    })
}

//mark all tasks as done
function AllDone(){
    const todos = [];

    $('#sortable li').each( function() {
         todos.push({task: $(this).text(), id: $(this).find('label').data().id });   
    });
    
    // add to done
    for (i = 0; i < todos.length; i++) {
        const todo = todos[i];
        $('#done-items').append(`<li>${todo.task}<button data-url="/todos/${todo.id}" class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>`);
    }
    
    // todos
    $('#sortable li').remove();
    countTodos();
}

//remove done task from list
function removeItem(element){
    const url = $(element).data().url;
    $.ajax({
        url,
        method: 'DELETE',
        success: function(res){
            console.log(res);
            $(element).parent().remove();
        },
        error: function(err){
            console.log(err);
        }
    })
}