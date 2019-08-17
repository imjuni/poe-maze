import alasql from 'alasql';
import React from 'react';
import uuid from 'uuid';
import atzoatl from '../data/atzoatl';
import './Atzoatl.scss';
// The Temple of Atzoatl

const AtzoatlPage: React.FC = () => {
  const fetchedCodes: Array<{ code: string }> = alasql('SELECT code FROM ? GROUP BY code', [atzoatl]);
  const codes = fetchedCodes.map((fetchedCode) => fetchedCode.code);

  const createTableRow = (code: string, order: number) => {
    const rooms = alasql('SELECT * FROM ? WHERE code = ?', [atzoatl, code]);

    return rooms.map((room: any, index: number) => {
      const type = Math.floor(order - 1 / 3) % 2;
      console.log(Math.floor(order - 1 / 3), type);

      if (index === 0) {
        return (
          <tr key={uuid.v4()} className={type === 0 ? 'odd-row' : 'even-row'}>
            <td rowSpan={rooms.length}>{order}</td>
            <td>{room.name.ko}</td>
            <td>{room.lv}</td>
            <td>{room.positive.ko}</td>
            <td>{room.negative.ko}</td>
          </tr>
        );
      }

      return (
        <tr key={uuid.v4()} className={type === 0 ? 'odd-row' : 'even-row'}>
          <td>{room.name.ko}</td>
          <td>{room.lv}</td>
          <td>{room.positive.ko}</td>
          <td>{room.negative.ko}</td>
        </tr>
      );
    });
  };

  return (
    <div className="body-ctr">
      <h1 className="atzoatl-table-title">앗조아틀 사원 보상</h1>

      <table className="atzoatl-table-ctr">
        <thead>
          <tr>
            <th>구분</th>
            <th>이름</th>
            <th>레벨</th>
            <th>긍정적 보상</th>
            <th>부정적 보상</th>
          </tr>
        </thead>
        <tbody>{codes.map((code, index) => createTableRow(code, index + 1))}</tbody>
      </table>
    </div>
  );
};

export default AtzoatlPage;
