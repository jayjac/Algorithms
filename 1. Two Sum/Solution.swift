class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dictionary: [Int: Int] = [Int: Int]() // Number: Index
        for (index, number) in nums.enumerated() {
            let complement = target - number
            if let complementIndex = dictionary[complement] {
                return [index, complementIndex]
            }
            dictionary[number] = index
        }
        return [Int]()
    }
}