// Your tests here

import { isPalindrome } from "../utils";


describe("isPalindrome", ()=>{
    it("returns true if the word is a palindrome", ()=>{
        
        expect(isPalindrome("racecar")).toBe(true)
        expect(isPalindrome("mom")).toBe(true)
        
    });
    it("returns false if the word is not a palindrome", ()=>{
        expect(isPalindrome("car")).toBe(false)
        expect(isPalindrome("hello")).toBe(false)
    })

})
