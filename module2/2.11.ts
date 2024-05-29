{
    // utility type

    // 1. pick
    type Person= {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, 'name'>
    
    type NameAge = Pick<Person, 'name' | 'age'>

    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>;

    // Required
    type PersonRequired = Required<Person>;

    // pertial
    type PersonPartial = Partial<Person>;

    // readonly
    const Person1: Person= {
        name: 'mr. x',
        age: 25,
        contactNo: '01'
    }
    Person1.name= 'mr. y'

    type PersonReadonly = Readonly<Person>;

    const person2: PersonReadonly= {
        name: 'mr. x',
        age: 25,
        contactNo: '01'
    }

    // person2.name = 'mr. z'

    // record

    type MyObj1 = {
        a: string;
        b: string
    }

    const obj1: MyObj1 = {
        a: 'aaa',
        b: 'sdf',
        // c: 'dd'
    }

    type MyObj2 = Record<string, string>

    const obj2: MyObj2 = {
        a: 'aaa',
        b: 'sdf',
        c: 'dd'
    }

    const emptyObj: Record<string, unknown> = {}

    emptyObj.name= 'habib';

    // 
}