import { banks, tax } from './banks.tsx';

function calculateTermDeposit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const bank = (form.elements.namedItem("banks") as HTMLSelectElement).value;
  const amount = parseFloat((form.elements.namedItem("amount") as HTMLInputElement).value);
  console.log({ bank, amount });
    
  // Calculation logic goes here
    const selectedBank = banks.find(b => b.name === bank);
    if (selectedBank) {
      const interest = Math.round(selectedBank.interestRate / 100 * amount);
      const taxAmount = Math.round(interest * tax);
      const total = Math.round(amount + interest - taxAmount);
      console.log({ total, interest, amount, bank: selectedBank.name });
      return { total, taxAmount, interest, amount, bank: selectedBank.name };
    }
    
}

export { calculateTermDeposit };