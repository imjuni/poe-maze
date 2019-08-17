// import alasql from 'alasql';
import React, { useState } from 'react';
import uuid from 'uuid';
import currencies from '../data/currencies';
import CurrencySelectBox from './SelectBox';

const CurrencyPage: React.FC = () => {
  // const _a = alasql('SELECT * FROM ? WHERE name->en = "Scroll of Widsom"', [currencies]);
  const [currencyFrom, setCurrencyFrom] = useState<string>('');

  return (
    <div className="body-ctr">
      <CurrencySelectBox currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom} />
      <p>테스트: {currencyFrom}</p>
      <div className="currency-ctr">
        {currencies.map((currency) => (
          <div className="currency-table-row-ctr" key={uuid.v4()}>
            <div className="currency-image-ctr">
              <img className="currency-image" src={`./currencies/${currency.image}`} alt="" />
            </div>
            <div className="currency-contents-ctr">
              <p className="currency-contents">{currency.name.ko}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyPage;
