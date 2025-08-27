import React,{useId} from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()


  return (
    <div className={`bg-gray-800  text-gray-300 p-3 rounded-lg text-sm border-1 border-gray-300 flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className=" mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 border px-2 rounded-lg  text-gray-300 "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className=" mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 text-gray-800  cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >

        {currencyOptions.map((Currency) => (
            <option key={ Currency} 
            value={Currency}> 
            {Currency}
          </option>
        ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;

