package java_lang.practice_it.collections;
import java.util.*;

public class ContainsThree {
    public static boolean contains3(List<String> words){
        Map<String, Integer> wordsCount = new HashMap<>();
        
        for(String word: words){
            if(!wordsCount.containsKey(word)){
                wordsCount.put(word, 1);
            } else {
                int currentCount = wordsCount.get(word);
                if(currentCount == 2){
                    return true;
                }
                wordsCount.put(word, currentCount + 1);
            }
        }
        return false;
    }
}
