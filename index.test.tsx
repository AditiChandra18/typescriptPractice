import { MOCK_DATA } from "./constant";
import { filterData } from "./index"

describe('filter and sorting test',()=>{
    

    it('should filter out states with years older than 5 years', () => {
      const filteredData = filterData(MOCK_DATA)

      expect(filteredData.length).toBe(4);
      expect(filteredData).toEqual(expect.arrayContaining([
        expect.objectContaining({Year:"2022"}),
        expect.objectContaining({Year:"2021"}),
        expect.objectContaining({Year:"2020"})
      ]))
      expect(filteredData).not.toEqual(expect.arrayContaining([
        expect.objectContaining({Year:"2019"}),
      ]))
    });

    it('should sort states alphabetically', () => {
        const filteredData = filterData(MOCK_DATA);
        
        expect(filteredData[0].State).toBe("Alabama");
        expect(filteredData[1].State).toBe("Alabama");
        expect(filteredData[2].State).toBe("Alaska");
        expect(filteredData[3].State).toBe("Delaware");

    });

})