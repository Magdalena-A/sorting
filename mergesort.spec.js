describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect( split([1,2,3,4]) ).toEqual([[1,2],[3,4]]);
      expect( split([1,2,3,4,5]) ).toEqual([[1,2],[3,4,5]]);
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect( merge([1,3,5],[2,4,6]) ).toEqual([1,2,3,4,5,6]);
      expect( merge([1,3,5],[2,4,6,7]) ).toEqual([1,2,3,4,5,6,7]);
    });
  });

  
describe('Mergesprt function', function(){
    it('is able to sort array', function(){
      // test the merging algorithm
      expect( mergeSort([1,3,5,2,4,6]) ).toEqual([1,2,3,4,5,6]);
      expect( mergeSort([1,3,5,2,4,6,7]) ).toEqual([1,2,3,4,5,6,7]);
      expect( mergeSort([7,6,5,4,3,2,1]) ).toEqual([1,2,3,4,5,6,7]);
    });
});