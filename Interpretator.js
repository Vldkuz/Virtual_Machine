const FILE=require('fs');
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
        this.memory=Array;
    },
}

const CodeExecution={
    
}



Code=CodeIn;
Code.InputCode(Path);
console.log(Code);