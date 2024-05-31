{
    // static
   
    // without static
    class Counter1{
        
        count: number = 0;

        increment(){
            return (this.count = this.count + 1);
        };

        decrement(){
            return (this.count = this.count - 1);
        }
    };

    const increment1 = new Counter1();
    console.log('Counter1:', increment1.increment());

    const increment2 = new Counter1();
    console.log('Counter1:',  increment2.increment())

    // with static
    class Counter2{
        static count: number = 0;

        increment(){
            return (Counter2.count = Counter2.count + 1);
        };

        decrement(){
            return (Counter2.count = Counter2.count - 1);
        }
    };

    const increment3 = new Counter2();
    console.log('Counter2:',  increment3.increment());

    const increment4 = new Counter2();
    console.log('Counter2:',  increment4.increment())

    class Counter3{
        static count: number = 0;

        static increment(){
            return (Counter2.count = Counter2.count + 1);
        };

        static decrement(){
            return (Counter2.count = Counter2.count - 1);
        }
    };
    console.log('Counter3:', Counter3.increment());
    console.log('Counter3:', Counter3.increment());





    // 
}