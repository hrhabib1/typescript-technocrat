{
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(ammount: number){
            this._balance = this._balance + ammount;
            console.log(this._balance)
        }

        getBelence(){
            return this._balance;
        }

    };

    class Student extends BankAccount{
        test(){
            this._balance;
        }
    }

    const student = new Student(29, 'rapti', 500)
    console.log(student.name)

    const goribManusherAccount = new BankAccount(31, 'habib', 200);

    goribManusherAccount.addDeposit(500);

    const myBelence= goribManusherAccount.getBelence();
    console.log('My belence is:',myBelence);



    // 
}