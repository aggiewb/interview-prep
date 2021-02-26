package java_lang.practice_it.collections;
import java.util.Map;
import java.util.HashMap;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e18%2Dreverse
*/ 

public class Reverse {
    public static Map<String, Integer> reverse(Map<Integer, String> toReverse){
        Map<String, Integer> reversed = new HashMap<>();
        for(Integer num: toReverse.keySet()){
            String value = toReverse.get(num);
            
            if(!reversed.containsKey(value)){
                reversed.put(value, num);
            } else {
                reversed.replace(value, num);
            }
        }
        return reversed;
    }
}
