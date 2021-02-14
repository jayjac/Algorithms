class Solution {
    public int[] searchRange(int[] nums, int target) {
        if(nums.length == 0 || nums[0] > target) return new int[] {-1, -1};
        int firstIndex = -1;
        int secondIndex = -1;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] > target) {
                break;
            }
            if(nums[i] == target) {
                if(firstIndex == -1) {
                    firstIndex = i;
                }
                secondIndex = i;
            }
        }
        return new int[] { firstIndex, secondIndex };
    }
}