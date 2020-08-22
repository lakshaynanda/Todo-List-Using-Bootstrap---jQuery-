let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btnCleanup=$('#btnCleanup')
let btnSort=$('#btnSort')

function clearDone(){
    $('#ulTasks .done').remove()
    toggleInpButtons()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}
function addItem(){
    let listItem = $('<li>',{
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click((event)=>{
        $(event.target).toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInpButtons()
}
function toggleInpButtons(){
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnSort.prop('disabled',ulTasks.children().length < 1)
    btnCleanup.prop('disabled',ulTasks.children().length < 1)
}
inpNewTask.keypress((e)=>{
    if(e.which==13){
        addItem()
    }
})
inpNewTask.on('input',toggleInpButtons)
btnAdd.click(addItem)
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
btnReset.click(()=>{
    inpNewTask.val('')
    toggleInpButtons()
})