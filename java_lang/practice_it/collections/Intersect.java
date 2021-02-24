package java_lang.practice_it.collections;
import java.util.*;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e14%2Dintersect
*/ 

public class Intersect {
    public static Map<String, Integer> intersect(Map<String, Integer> first, Map<String, Integer> second){
        Map<String, Integer> intersection = new HashMap<>();
        for(String name: first.keySet()){
            Integer value = first.get(name);
            if(second.containsKey(name) && value == second.get(name)){
                intersection.put(name, value);
            }
        }
        return intersection;
    }
}
