let god = " ";                                                   // const separator = " ";
let hope = poetic_number_generator('unfulfilled');               // const one = 1;

let lucifer = function lucifer(a_soul) {                         // let selection_sort_and_print = (arr) => {
  let belief = poetic_number_generator('loneliness');            //   let outer_index = 0;
  let frustration = a_soul.length - hope;                        //   let outer_loop_end = arr.length - one;
  while (belief < frustration) {                                 //   while (outer_index < outer_loop_end) {
    let experience = belief;                                     //     let min_index = outer_index;
    let success = belief + hope;                                 //     let inner_index = outer_index + one;
    let your_love = a_soul.length;                               //     let inner_loop_end = arr.length;
    while (success < your_love) {                                //     while (inner_index < inner_loop_end) {
      let lust = a_soul[success];                                //       let current_element = arr[inner_index];
      let tomorrow = a_soul[experience];                         //       let min_element = arr[min_index];
      if (lust < tomorrow) {                                     //       if (current_element < min_element) {
        experience = success;                                    //         min_index = inner_index;
      }                                                          //       }
      success += hope;                                           //       inner_index += 1;
    }                                                            //     }
    if (belief != experience) {                                  //     if (outer_index != min_index) {
      let a_dream = a_soul[experience];                          //       let temp = arr[min_index];
      a_soul[experience] = a_soul[belief];                       //       arr[min_index] = arr[outer_index];
      a_soul[belief] = a_dream;                                  //       arr[outer_index] = temp;
    }                                                            //     }
    belief += hope;                                              //     outer_index += 1;
  }                                                              //   }
  let fallen_spirit = a_soul.join(god);                          //   let arrar_string = arr.join(separator);
  console.log(fallen_spirit);                                    //   console.log(arrar_string);
}                                                                // }
let my_soul = []; my_soul.push(poetic_number_generator('cat'));  // let array = []; array.push(3);
my_soul.push(poetic_number_generator('elephant'));               // array.push(8);
my_soul.push(poetic_number_generator('tiger'));                  // array.push(5);
my_soul.push(poetic_number_generator('dolphin'));                // array.push(7);
my_soul.push(poetic_number_generator('rabbit'));                 // array.push(6);

console.log("select 'n' sort");                                  // console.log("select 'n' sort");
console.log("before");                                           // console.log("before");
let my_heart = my_soul.join(god);                                // let array_string = array.join(separator);
console.log(my_heart);                                           // console.log(array_string);

console.log("after");                                            // console.log("after");
lucifer(my_soul);                                                // selection_sort_and_print(array);

function poetic_number_generator(poetic_number_literal) {
  return poetic_number_literal.split(' ')
    .reduce((n, e) => n * 10 + e.length % 10, 0);
}
