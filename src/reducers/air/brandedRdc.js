

// priceUpPercentage up om final net price

const brands = [{
  leg: 1,
  priceClasses: [
    {
      code: 'Light',
      priceUpPercentage: 0,
      description: [
        { title: 'One carry on bag', code: 'OneCarryBag' },
      ],
    },
    {
      code: 'Flex',
      priceUpPercentage: 20,
      description: [
        { title: '1 Checked Bag', code: 'OneCheckedBag' },
        { title: 'Free preseatting', code: 'FreePreSeat' },
      ],
    },
    {
      code: 'BusinessSaver',
      priceUpPercentage: 30,
      description: [
        { title: '2 Checked Bags', code: '2CheckedBags' },
        { title: 'Free preseatting', code: 'FreePreSeat' },
        { title: 'Empty middle seat', code: 'EmptyMiddle' },
        { title: 'Priority Boarding', code: 'PriorityBoarding' },
      ],
    },
  ],
}];


export function fetchBrandOffersReducer(state = brands, action) {
  return state;
}
