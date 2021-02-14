class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length() < 2) return s.length();

        HashMap<Character, Integer> map = new HashMap();
        int maxLength = 1;
        int startIndex = 0;
        int endIndex = 0;
        for(; endIndex < s.length(); endIndex++) {
            char c = s.charAt(endIndex);
            if(!map.containsKey(c)) {
                map.put(c, endIndex);
                int length = (endIndex - startIndex) + 1;
                maxLength = length > maxLength ? length : maxLength;
                continue;
            }

            int repeatedIndex = map.get(c);
            for(int i = startIndex; i <= repeatedIndex; i++) {
                char ci = s.charAt(i);
                map.remove(ci);
            }
            startIndex = repeatedIndex + 1;

            map.put(c, endIndex);
        }
        return maxLength;
    }
}