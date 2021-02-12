class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        if s.isEmpty {
            return 0
        }

        let stringArray = Array(s)
        let length = stringArray.count
        if length == 1 {
            return 1
        }
        var startIndex = 0
        var endIndex = 0
        var longestSequence = 1
        var indices = [Character: Int]() //Keeps track of characters seen

        while endIndex < length {
            let currentChar = stringArray[endIndex]
            //print("\(currentChar)")
            let thisLength = endIndex - startIndex + 1
            //print("This Length: \(thisLength)")

            /**
            * If character is a repeat
            */
            if let repeatedCharacterIndex = indices[currentChar] {
                //Removing the characters up until the new startIndex
                for i in startIndex...repeatedCharacterIndex {
                    indices[stringArray[i]] = nil
                }
                /*for (char, index) in indices {
                    if index <= repeatedCharacterIndex {
                        indices[char] = nil
                    }
                }*/
                startIndex = repeatedCharacterIndex + 1
            } else {
                longestSequence = max(longestSequence, thisLength)
                //print("Longest: \(longestSequence)")
            }
            //print(currentChar)
            indices[currentChar] = endIndex
            //print(indices)
            endIndex += 1
        }
       return longestSequence
    }

}