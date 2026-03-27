// Fare zone data — stored in cents to avoid floating point issues
// Display with: `R ${(cents / 100).toFixed(2)}`

export const fareZones = [
  {
    zone: 1,
    label: 'Zone 1',
    distanceRange: '0 – 10 km',
    examples: 'Cape Town to Woodstock, Salt River',
    singleFare: 650,
    returnFare: 1300,
    monthlyFare: 18000,
  },
  {
    zone: 2,
    label: 'Zone 2',
    distanceRange: '11 – 20 km',
    examples: 'Cape Town to Langa, Nyanga',
    singleFare: 950,
    returnFare: 1900,
    monthlyFare: 26000,
  },
  {
    zone: 3,
    label: 'Zone 3',
    distanceRange: '21 – 30 km',
    examples: 'Cape Town to Stock Road, Belhar',
    singleFare: 1250,
    returnFare: 2500,
    monthlyFare: 34000,
  },
  {
    zone: 4,
    label: 'Zone 4',
    distanceRange: '31+ km',
    examples: "Cape Town to Khayelitsha, Chris Hani, Bellville",
    singleFare: 1600,
    returnFare: 3200,
    monthlyFare: 42000,
  },
] as const