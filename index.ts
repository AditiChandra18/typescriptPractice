import { URL } from "./constant";
import { CountriesDataType } from "./interface";
import axios from "axios";

export const filterData = (data: CountriesDataType[]): CountriesDataType[] => {
  const currentYear = new Date().getFullYear();

  return data.filter((item: CountriesDataType) => {
    if (item.Year && !isNaN(Number(item.Year))) {
      const itemYear = parseInt(item.Year, 10);
      return itemYear > currentYear - 5;
    }
    return false;
  }).sort((a,b)=>{
    return (a.State as string).localeCompare(b.State as string)
  });
};

export const getData = async (): Promise<CountriesDataType[]> => {
  try {
    const result = await axios.get(`${URL}`);
    const { data } = result.data;

    const filteredData = filterData(data);

    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

getData();
