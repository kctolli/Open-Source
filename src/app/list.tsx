"use client";
import { useEffect, useState } from "react";

import axios from 'axios';
import parseCSV from '@kctolli/parsecsv';

/**
 * Fetches data from a CSV URL and returns the parsed data.
 *
 * @return {Promise<any>} Parsed data from the CSV URL
 */
const getData = async () => {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQd8Zrp5GNW2z3Ml3sbFEeK1olQryrAAHF3i18tUCTX4ccZFSymxv0hw9hak6mP5-EHmBFR7AZ817Iw/pub?gid=0&single=true&output=csv";
  const res = await axios.get(csvUrl);
  return parseCSV(res.data);
}

/**
 * Renders a list of items based on the provided type.
 *
 * @param {string} type - The type of items to render
 * @return {JSX.Element} The rendered list of items
 */
const List = ({ type }: { type: string }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      setData(await getData());
    })();
  }, []);

  return (
    <ul>
      {data.map((value: any) => {
        if (value.Type === type) {
          return (
            <li key={value.Name}>
              <a href={value.Link} target="_blank" rel="noreferrer">
                {value.Name}
              </a> - {value.Description}
            </li>
          );
        }
      })}
    </ul>
  );
}

export default List;
