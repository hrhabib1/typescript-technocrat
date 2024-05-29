{
    // interface --> generic

    interface Developer<T, X = null>{
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseDate: number;
        };
        smartWatch: T;
        bike?: X;
    }

    // const poorDeveloper: Developer<{
    //     brand: string;
    //     model: string;
    //     display: string
    // }> = {
    //     name: 'Habib',
    //     computer: {
    //         brand: 'Lenovo',
    //         model: '150hz',
    //         releaseDate: 2015,
    //     },
    //     smartWatch: {
    //         brand: 'Parot',
    //         model: 'kw66',
    //         display: 'OELD'
    //     }
    // };

    type ParotWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper: Developer<ParotWatch> = {
        name: 'Habib',
        computer: {
            brand: 'Lenovo',
            model: '150hz',
            releaseDate: 2015,
        },
        smartWatch: {
            brand: 'Parot',
            model: 'kw66',
            display: 'OELD'
        }
    };

        // const richDeveloper: Developer<{
    //     brand: string;
    //     model: string;
    //     heartTracker: boolean;
    //     sleepTracker: boolean
    // }> = {
    //     name: 'Rapti',
    //     computer: {
    //         brand: 'Hp',
    //         model: '150hz',
    //         releaseDate: 2020,
    //     },
    //     smartWatch: {
    //         brand: 'Parot',
    //         model: 'kw66',
    //         heartTracker: true,
    //         sleepTracker: true,
    //     }
    // };


    interface AppleWatch {
        brand: string;
        model: string;
        heartTracker: boolean;
        sleepTracker: boolean
    };

    interface Bike{
        model: string;
        enginCapacity: string
    };

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: 'Rapti',
        computer: {
            brand: 'Hp',
            model: '150hz',
            releaseDate: 2020,
        },
        smartWatch: {
            brand: 'Parot',
            model: 'kw66',
            heartTracker: true,
            sleepTracker: true,
        },
        bike: {
            model: 'Royel Emfild',
            enginCapacity: '160 cc'
        }
    };




    // 
}