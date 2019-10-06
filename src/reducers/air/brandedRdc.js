// priceUpPercentage up om final net price

const brands = [{
  leg: 1,
  priceClasses: [
    {
      code: 'Light',
      priceUpPercentage: 0,
      description: [
        {  code: 'OneCarryBag' },
      ],
    },
    {
      code: 'Flex',
      priceUpPercentage: 20,
      description: [
        {  code: 'OneCheckedBag' },
        {  code: 'FreePreSeat' },
      ],
    },
    {
      code: 'BusinessSaver',
      priceUpPercentage: 30,
      description: [
        {  code: '2CheckedBags' },
        {  code: 'FreePreSeat' },
        {  code: 'EmptyMiddle' },
        {  code: 'PriorityBoarding' },
      ],
    },
    {
      code: 'Business',
      priceUpPercentage: 30,
      description: [
        { code: '2CheckedBags' },
        {  code: '2CarryOndBags' },
        {  code: 'FreePreSeat' },
        {  code: 'EmptyMiddle' },
        {  code: 'PriorityBoarding' },
      ],
    },
  ],
}];


export function fetchBrandOffersReducer(state = brands, action) {
  return state;
}
