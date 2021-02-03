/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
*/ 

const intersect = function(nums1, nums2) {
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    const smallerArr = nums1Length <= nums2Length ? nums1 : nums2;
    const largerArr = nums1Length > nums2Length ? nums1 : nums2;
    
    const intersectArr = smallerArr.reduce((acc, num) => {
        if(largerArr.includes(num)){
            acc.push(num);
            largerArr.splice(largerArr.indexOf(num), 1);
        }
        return acc;
    }, []);
    return intersectArr;
};