package java_lang.other_problems;

/*
Given a number n, write a method that sums all multiples of three and five up to n (inclusive).
*/ 

public class MultOfThreeAndFiveSum {
    public static void main(String[] args){
        System.out.println(sum(5));
    }

    public static int sum(int num){
        int sum = 0;
        for(int i = 3; i <= num; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum += i;
            }
        }
        return sum;
    }
    
}
