{
    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getToDo = async (): Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const data: Todo = await response.json();

        return data;
    };
    getToDo();


    // simulate

    type Something = {something: string};

    const createPromise= (): Promise<Something>=>{
        return new Promise<Something>((resolve, reject)=>{
            const data : Something = {something: 'Habib is the boss'};
            if(data){
                resolve(data)
            } else{
                reject('Failed to load data')
            }
        });

    };
    // calling create promise function
    const showData = async (): Promise<Something> =>{
        const data: Something = await createPromise();
        return data;
        // console.log(data);
    };

    showData();



    // 
}