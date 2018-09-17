describe('Bubble Sort', function(){
    // beforeAll(function () {
    //     spyOn(bubbleSort, 'swap').and.callThrough(); 
    //     var myFunc=bubbleSort(['b','a']);
    // });
    // it('swaps exactly once', function () {
    //     expect(swap.calls.count()).toEqual(1);
    // });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts a multiple item list properly', function(){
        expect(bubbleSort(['e','a','c','d','b'])).toEqual(['a','b','c','d','e']);
        expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
        expect(bubbleSort(['elephant','aardvark'])).toEqual(['aardvark','elephant']);
    })
    it('returns a single item list', function(){
        expect(bubbleSort(['e'])).toEqual(['e']);
    })
  });
  

