class Solution {

    HashSet<Character> set = new HashSet<>();

    String removeDups(String S) {
        // code here
        String s = S.toLowerCase();
        StringBuffer sb = new StringBuffer();

        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if(!set.contains(c)) {
                sb.append(c);
                set.add(c);
            }
        }
        return sb.toString();
    }
}