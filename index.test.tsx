import { filterData } from "./index"

const mockData = [
    {
        "ID State": "04000US01",
        "State": "Alabama",
        "ID Year": 2022,
        "Year": "2022",
        "Veterans": 316473,
        "Slug State": "alabama"
    },
    {
        "ID State": "04000US10",
        "State": "Delaware",
        "ID Year": 2020,
        "Year": "2020",
        "Veterans": 65065,
        "Slug State": "delaware"
    },
    {
        "ID State": "04000US01",
        "State": "Alabama",
        "ID Year": 2021,
        "Year": "2021",
        "Veterans": 324845,
        "Slug State": "alabama"
      },
      {
        "ID State": "04000US02",
        "State": "Alaska",
        "ID Year": 2021,
        "Year": "2021",
        "Veterans": 62744,
        "Slug State": "alaska"
      },
      {
        "ID State": "04000US02",
        "State": "Alaska",
        "ID Year": 2019,
        "Year": "2019",
        "Veterans": 62742,
        "Slug State": "alaska"
      },

]

describe('filter and sorting test',()=>{
    

    it('should filter out states with years older than 5 years', () => {
      const filteredData = filterData(mockData)

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
        const filteredData = filterData(mockData);
        
        expect(filteredData[0].State).toBe("Alabama");
        expect(filteredData[1].State).toBe("Alabama");
        expect(filteredData[2].State).toBe("Alaska");
        expect(filteredData[3].State).toBe("Delaware");

    });

})