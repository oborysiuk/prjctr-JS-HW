// Task #1 - Задача про обчислення різниці часу

    function durationBetweenDates ( dateStart = '05 Oct 2020', dateEnd = '06 Oct 2023', dimension = 'days'){

        let timeDiff =  Math.abs(new Date(dateEnd) - new Date(dateStart)); 

        switch (dimension){
            case 'days': 
                timeDiff /= (1000 * 3600 * 24); 
                break;
            case 'hours': 
                timeDiff /= (1000 * 3600); 
                break;
            case 'minutes':
                timeDiff /= (1000 * 60); 
                break;
            case 'seconds':
                timeDiff /= 1000; 
                break;

            default: return console.log('Wrong dimantion format!'); 
        }

        return `${timeDiff.toString()} dimension`;
    }

    console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // поверне '86400 seconds'
    console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'))  // поверне '362 days'

// Task #2 - Задача про перетворення об'єкту

    // приклад об'єкту
    const priceData = {
        Apples: '23.4',
        BANANAS: '48',
        oRAngGEs: '48.7584',
    };
    
    function optimizer(data) {
       return Object.fromEntries(Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)]));
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// Task #3 - Задача про рекурсію

    function recursiveOddSumTo(number) {
        if (number % 2 !== 0) {
            if (number === 1)
                return number;
            else 
                return number + recursiveOddSumTo(number - 2);
        }
        else return recursiveOddSumTo(number - 1);
        };
    
    console.log(recursiveOddSumTo(1)); // 1
    console.log(recursiveOddSumTo(10));// 25

// Task #4 - Задача про ітерацію

    function iterativeOddSumTo(number) {
        let sum = 0;
        for (let i=1; i<=number; i++){
            if (i %2 !== 0)
                sum += i;
        }
        return sum;

    };
        
    console.log(iterativeOddSumTo(1)); // 1
    console.log(iterativeOddSumTo(10)); // 25

