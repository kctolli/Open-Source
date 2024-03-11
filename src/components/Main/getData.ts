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

export default getData;
