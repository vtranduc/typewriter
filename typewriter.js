const sentence = "hello there from lighthouse labs";

const repeat = function(sentence, index) {
  if (index < sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
      repeat(sentence, index + 1);
    }, 100);
    
  } else if (index === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
      console.log();
    }, 100);
  }
};
repeat(sentence, 0);
