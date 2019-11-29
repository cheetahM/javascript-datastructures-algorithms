//Find inversion count of the given array
class FindInversionCount {

    //merge function to count split inversions
    merge(left, right, arr) {
        let i =0, j=0, k=0;
        let splitCount =0, sorted = [];

        while(i<left.length && j < right.length) {
            if(left[i] <= right[j]) {
                sorted[k++] = left[i++];
            } else {
                sorted[k++] = right[j++];
                splitCount += left.length - i;
            }
        }

        //concatenate any remaining elements
        sorted= sorted.concat(left.slice(i)).concat(right.slice(j));

        // copy the sorted array in original array
        let len = left.length + right.length;
        for(let i= 0; i< len; i++) {
            arr[i] = sorted[i];
        }
        return splitCount;
    }
    countInversion(arr) {
        //if array length less than 2, return count as 0;
        if(arr.length<2)
            return 0;
        
        // count inversion for arr.length > 2
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);

        let leftCount = this.countInversion(left);
        let rightCount = this.countInversion(right);

        let splitCount = this.merge(arr.slice(0,mid), arr.slice(mid), arr);

    }
}


//instantiate an object
const solution = new FindInversionCount();

console.log(solution.countInversion([1,3,5,2,4,6]));