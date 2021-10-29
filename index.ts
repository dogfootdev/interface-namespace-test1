/*
// companion object pattern
type Currency = {
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD';
  value: number;
};

let Currency = {
  DEFAULT: 'USD',
  from(value: number, unit = Currency.DEFAULT): Currency {
    return { unit, value };
  },
};
// companion object pattern
// */

// /*
// namespace + interface
enum Unit {
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  USD = 'USD',
}

interface Currency {
  unit: Unit;
  value: number;
}

namespace Currency {
  let DEFAULT = 'USD';
  // export function from(value: number, unit = DEFAULT): Currency {

  export function from(value: number, unit: Unit = Unit.EUR): Currency {
    let currency: Currency = {
      unit,
      value,
    };
    return currency;
  }
}

console.log(Currency.from(330, Unit.EUR));
// namespace + interface
// */
