import changeCase from 'change-case';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import React from 'react';
import currencies from '../data/currencies';

export default function CurrencySelectBox({
  currencyFrom,
  setCurrencyFrom,
}: {
  currencyFrom: string;
  setCurrencyFrom: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const options: IDropdownOption[] = currencies.map((currency) => ({
    key: changeCase.camelCase(currency.name.en),
    text: currency.name.ko,
    itemType: DropdownMenuItemType.Normal,
  }));

  const stackTokens: IStackTokens = { childrenGap: 20 };

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
  };

  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        label="Basic uncontrolled example"
        placeholder="화폐를 선택하세요"
        options={options}
        defaultSelectedKey={currencyFrom}
        styles={dropdownStyles}
        onChange={(_event, _option, _index) => {
          console.log(_option, _index);

          if (_option !== undefined && _index !== undefined) {
            setCurrencyFrom(_option.key.toString());
          }
        }}
      />

      <Dropdown
        label="시작 화폐를 선택하면 활성화 됩니다"
        defaultSelectedKey="broccoli"
        options={options}
        disabled={true}
        styles={dropdownStyles}
      />
    </Stack>
  );
}
