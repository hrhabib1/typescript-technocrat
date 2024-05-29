{
    // conditional

    type a1 = number;
    type b1= string;

    type x = a1 extends null? true : false; //conditional type

    type y = a1 extends null? true : b1 extends undefined? undefined: any;

    type Sheik ={
        bike: string;
        car: string;
        tractor: string;
        plane: string;
    };

    type CheckVehicle1<T> = T extends 'bike' | 'car' | 'tractor' | 'plane' ? true : false;

    type CheckVehicle2<T> = T extends keyof Sheik? true : false;

    type haseBike = CheckVehicle1<'bike'>;

    type haseCar= CheckVehicle2<'car'>;





    // 
}