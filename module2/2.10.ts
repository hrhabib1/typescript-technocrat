{
    // maped types

    const arrOfNumbers: number[] = [1, 2, 3, 4];

    // const arrOfStrings: string[] = ['1', '2', '3', '4'];
    const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());

    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: number
    };

    type Height = AreaNumber['height'];  // look up type

    // type AreaString = {
    //     height: string;
    //     width: string
    // }

    type AreaString1 = {
        [key in keyof AreaNumber]: string;
    }
    type AreaString2<T> = {
        [key in keyof T]: T[key];
    }
     
    const area1: AreaString2<{
        height: string;
        width: number
    }> ={
        height: '100',
        width: 50
    }



    // 
}