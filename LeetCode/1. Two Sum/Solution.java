class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for(int i = 0; i < nums.length; i++) {
            Integer complement = map.get(target - nums[i]);
            if(complement != null && complement != i) {
                return new int[] { i, complement };
            }
        }
        return new int[] {};
    }
}