const FILE=require('fs');
const readline = require('readline-sync');

Path=process.argv[2];

const CodeIn={

    InputCode(Path)
    {
        let Code=FILE.readFileSync(Path,'utf-8');
        let str="";
        let memory=new Array();
        let i=0;
        while (i!=Code.length){
            while (Code[i]!='\n'){
                if (Code[i]!='\r') {str+=Code[i]};
                i++;
            }
            if (str.length){ memory.push(str), str=""} i++;
        }
        this.Initialise_mem(memory);
    },

    Initialise_mem(Array)
    {
        Programm=CodeExecution;
        CodeExecution.Starting_Execution(Array);
    },
}

const CodeExecution={
    
    Starting_Execution(Programm)
    {
        this.memory=Programm;
        this.reserved_mem_command_index=Programm.length;
    },

    Execution(memory)
    {

    },

    Get_from_keyboard()
    {
        let data = readline.question("Enter fib_number : ");
        this.memory.push(data);
        this.reserved_mem_command_index++;
    },

    Intialise_part_mem(index,value)
    {
        this.memory.push(value);
    },

}



Code=CodeIn;
T=CodeExecution;
Code.InputCode(Path);
console.log(T.Get_from_keyboard())