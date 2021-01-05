let ReduceWithoutInitialValue = function ReduceWithoutInitialValue(Arr, ReducingFunc) {
  let Result = Arr[0];
  let Idx = 1;
  let Len = Arr.length;
  while (Idx < Len) {
    let Ele = Arr[Idx];
    Result = ReducingFunc(Result, Ele);
    Idx += 1;
  }
  return Result;
}

let PrintArray = function PrintArray(Arr) {
  let Joiner = function Joiner(Str, Ele) {
    return Str + " " + Ele;
  }
  return ReduceWithoutInitialValue(Arr, Joiner);
}

let SelectionSortAndPrint = function SelectionSortAndPrint([...Arr]) {
  let OuterIdx = 0;
  while (OuterIdx < Arr.length - 1) {
    let MinElementIdx = OuterIdx;
    let InnerIdx = OuterIdx + 1;
    while (InnerIdx < Arr.length) {
      let ArrAtInnerIdx = Arr[InnerIdx];
      let ArrAtMinElementIdx = Arr[MinElementIdx];
      if (ArrAtInnerIdx < ArrAtMinElementIdx) {
        MinElementIdx = InnerIdx;
      }
      InnerIdx += 1;
    }
    if (MinElementIdx != OuterIdx) {
    let Temp = Arr[MinElementIdx];
      Arr[MinElementIdx] = Arr[OuterIdx];
      Arr[OuterIdx] = Temp;
    }
    OuterIdx += 1;
  }
  console.log(PrintArray(Arr));
}

let MyArray = [].concat(3, 7, 6, 4, 5);

console.log("Selection Sort");
console.log("Before");
console.log(PrintArray(MyArray));

console.log("After");
SelectionSortAndPrint(MyArray);
