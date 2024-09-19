import { sum } from "../sum";

test("Sum Function should calculate the sum of two numbers",()=>{
    const result = sum(3,4);

    // Assettion
    expect(result).toBe(7);
})