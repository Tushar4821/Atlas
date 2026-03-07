import axios from 'axios'

const api =  axios.create({
    baseURL : "https://restcountries.com/v3.1",
})

export const getCountry = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3,subregion,area,languages,currencies"
  );

  const data = await res.json();

  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
};



export const getCountryAlone = async (id) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/alpha/${id}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );

  return Array.isArray(res.data) ? res.data[0] : res.data;
};
