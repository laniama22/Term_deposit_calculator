const banks = [ 
  {
    id: 1,
    name: "Moneta",
    interestRate: 3.2,
  },
  {
    id: 2,
    name: "Komerční banka",
    interestRate: 3.0,
  },
  {
    id: 3,
    name: "ČSOB",
    interestRate: 2.15,
  },
  {
    id: 4,
    name: "Raiffeisenbank",
    interestRate: 2.15,
  },
  {
    id: 5,
    name: "Air Bank",
    interestRate: 2.7,
  },
  {
    id: 6,
    name: "Fio banka",
    interestRate: 2.7,
  },
  {
    id: 7,
    name: "Česká spořitelna",
    interestRate: 1.85,
  }
];

const tax = 0.15; // 15% tax on interest earned

export { banks, tax };