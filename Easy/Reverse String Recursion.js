function recursion(arr){
  function reverse(a,b,arr){
    if(a<b){
      [arr[a],arr[b]]=[arr[b],arr[a]]//array deconstructuring i love it
      reverse(a+1,b-1,arr)
    }
  }reverse(0,arr.length-1,arr)
  return arr
}
recursion(['h','e','l','l','o'])
