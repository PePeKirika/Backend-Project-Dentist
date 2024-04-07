import DentistCatalog from "@/components/DentistCatalog"
import { render, screen, waitFor } from "@testing-library/react"

const mockResult = {

    pagination: {},
    success: true,
    count: 4,
    data: [ {
        _id: "660183ff725eea4b26d90b30",
        name: "Boonyapatara",
        yearsOfExperience: "69",
        areaOfExpertise: "ขูดหินปูน",
        picture: "/img/dentist3.jpg",
    },
    {
        _id: "660184ca725eea4b26d90b36",
            name: "Guntapong",
            yearsOfExperience: "13",
            areaOfExpertise: "ผ่าฟันคุด",
            picture: "/img/dentist4.jpg",
    },
    {
        _id: "65fc87aec9158cef4a0e1725",
            name: "Jarukit",
            yearsOfExperience: "20000",
            areaOfExpertise: "ถอนฟัน",
            picture: "/img/dentist1.png",
    },
    {
        _id: "6602a0ef3cb29dcceb7b2b3e",
        name: "Mo",
        yearsOfExperience: "425",
        areaOfExpertise: "แปรงฟัน",
        picture: "/img/dentist2.jpg",
    }
]
}

describe('DentistCatalog', ()=>{
    it('should have correct number of dentist images', async ()=>{
        const dentistCatalog = await DentistCatalog({dentistsJson : mockResult})
        render(dentistCatalog)
        await waitFor(
            ()=> {
            const dentistImages = screen.queryAllByRole('img')
            expect(dentistImages.length).toBe(4)
            }
         )
    })
})