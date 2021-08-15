import axios from 'axios';

export const fetchBtc = async () => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

  const data = await axios.get(url).then(({ data }) => data);

  return data;
};
