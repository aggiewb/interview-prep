package java_lang.practice_it.collections;
import java.util.*;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e13%2DisUnique
*/ 

public abstract class IsUnique {
    public static boolean isUnique(Map<String, String> names){
        if(names.isEmpty()){
            return true;
        }
        
        Set<String> lastNames = new HashSet<>(names.values());
        return names.size() == lastNames.size();
    }
}
