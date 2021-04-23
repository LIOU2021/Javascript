var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
function binarysearch1(arr,val){
    var low=0;
    var high=arr.length-1;
    while(low<=high){
        var mid=parseInt((low+high)/2);
        if (val==arr[mid]){
            return mid;
        } else if (val>arr[mid]){
            low=mid+1;
        } else if (val<arr[mid]){
            high=mid-1;
        }
}
return '找不到';
};
console.log(binarysearch1(arr,4));
