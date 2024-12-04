import React, { useState } from "react";
import storeData from "/src/storeDate.json";

function Content() {

  const [selectedRegion, setSelectedRegion] = useState("東北");


  const filteredStores = storeData.filter(
    (store) => store.region === selectedRegion
  );

  return (
    <div>
      <h1>店舗情報</h1>
      <h2>地域を選択：
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="東北">東北</option>
        <option value="関東">関東</option>
        <option value="関西">関西</option>
      </select>
      </h2>

      {/* 显示过滤后的商店信息 */}
      {filteredStores.map((store) => (
        <Store
          key={store.id} // 确保 id 唯一
          name={store.name}
          address={store.address}
          phone={store.phone}
        />
      ))}
    </div>
  );
}

function Store({ name, address, phone }) {
  return (
    <section className="Store">
      <h3>{name}</h3>
      <ul>
        <li>
          <b>住所</b>: {address}
        </li>
        <li>
          <b>電話番号</b>: {phone}
        </li>
      </ul>
    </section>
  );
}

export default Content;