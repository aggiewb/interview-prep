package java_lang.practice_it.collections;
import java.util.*;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e19%2Drarest
*/ 

public class Rarest {
    public static int rarest(Map<String, Integer> people) throws Exception{
        if(people.isEmpty()){
            throw new Exception("Cannot pass in an empty map");
        }
        List<Integer> values = new ArrayList<>(people.values());
        Map<Integer, Integer> valuesCount = new HashMap<>();
        for(int i = 0; i < values.size(); i++){
            int value = values.get(i);
            if(!valuesCount.containsKey(value)){
                valuesCount.put(value, 1);
            } else {
                valuesCount.replace(value, valuesCount.get(value) + 1);
            }
        }
        
        Set<Integer> countKeySet = valuesCount.keySet();
        
        int keyToReturn = -1;
        int smallestVal = -1;
        
        for(int key: countKeySet){
            int currentVal = valuesCount.get(key);
            if((smallestVal == -1) ||
               (currentVal < smallestVal) ||
               (currentVal == smallestVal && key < keyToReturn)){
                smallestVal = currentVal;
                keyToReturn = key;
            }
        }
        return keyToReturn;
    }
}
