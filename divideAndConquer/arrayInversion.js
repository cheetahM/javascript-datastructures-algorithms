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
        // step 1: divide the problem into subproblems
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);

        // step 2: Conquer with solving subproblems with recursive calls
        let leftCount = this.countInversion(left);
        let rightCount = this.countInversion(right);
        // step 3: merge the solution for subproblems to solve original problem
        let splitCount = this.merge(arr.slice(0,mid), arr.slice(mid), arr);
        return leftCount + rightCount + splitCount;
    }
}


//instantiate an object
const solution = new FindInversionCount();

console.log(solution.countInversion([1,8,3,5,2,4,6]));