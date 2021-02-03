package java_lang.easy;

/* Write a method that calculates the factorial of a given number.
Factorial is the product of all positive integers less than or equal to n. 
For example, factorial(4) = 4x3x2x1 = 24.
TIP: To make it more interesting, try to do it recursively. */ 

public class Factorial {
    public static void main(String[] args){
        System.out.println(factorialForLoop(4));
        System.out.println(factorialRecursive(4));
    }

    public static int factorialForLoop(int num){
        int product = num;
        for(int i = num - 1; i > 0; i--){
            product *= i;
        }
        return product;
    }

    public static int factorialRecursive(int num){
        if(num == 1){
            return num;
          } else {
            return factorialRecursive(num - 1) * num;
          }
    }
}
