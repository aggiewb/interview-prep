package java_lang.leetcode.math;
import java.util.*;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/
*/ 

public class FizzBuzz {
    public List<String> fizzBuzz(int n) {
        List<String> fizzBuzz = new ArrayList<>();
        
        for(int i = 1; i <= n; i++){
            String word = "";
            if(i % 3 == 0){
                word += "Fizz";
            }
            if(i % 5 == 0){
                word += "Buzz";
            }
            
            if(word.isEmpty()){
                fizzBuzz.add(i + "");
            } else {
                fizzBuzz.add(word);
            }
        }
        return fizzBuzz;
    }
}
