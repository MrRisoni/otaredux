


// priceUpPercentage up om final net price

const brands =[{
    leg:1,
    priceClasses: [
        {
            code:'Light',
            priceUpPercentage: 0,
            description:[
                'One carry on bag'
            ]
        },
        {
            code:'Flex',
            priceUpPercentage: 20,
            description:[
                '1 Checked Bag',
                'Free preseatting',
            ]
        },
        {
            code:'BusinessSaver',
            priceUpPercentage: 30,
            description:[
                '2 Checked Bags',
                'Free preseatting',
                'Empty middle seat',
                'Priority Boarding',
            ]
        }
    ]
}]





export function fetchBrandOffersReducer(state = brands, action) {
    return state;
}
