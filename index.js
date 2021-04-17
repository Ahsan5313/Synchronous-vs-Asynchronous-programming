const taskOne = () =>{

    document.write("task1" + "<br/>");
}
const dataload = () =>{
    document.write("task2.Data Loading ")
}
const taskTwo = () =>{
    
    setTimeout(dataload, 2000)+ "<br/>"
}
const taskThree = () =>{
    
    document.write("task3" + "<br/>");
}
const taskFour = () =>{
    
    document.write("task4" + "<br/>");
}
const taskFIve = () =>{
    
    document.write("task5" + "<br/>");
}
taskOne();
taskTwo();
taskThree()
taskFour();
taskFIve();
