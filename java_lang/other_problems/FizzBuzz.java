package java_lang.other_problems;

/*
Write a method that returns 'Fizz' for multiples of three and 'Buzz' for the multiples of five.
For numbers which are multiples of both three and five return 'FizzBuzz'.
For numbers that are neither, return the input number.
*/ 

public class FizzBuzz {
    public static void main(String[] args){
        System.out.println(fizzBuzz(1));
        System.out.println(fizzBuzz(3));
        System.out.println(fizzBuzz(5));
        System.out.println(fizzBuzz(15));
        System.out.println(fizzBuzz(121));
    }

    public static String fizzBuzz(int num){
        String word = "";
        if(num % 3 == 0){
            word += "Fizz";
        }
        if(num % 5 == 0){
            word += "Buzz";
        }

        if(word.length() > 0){
            return word;
        } else {
            return num + "";
        }
    }
    
}
