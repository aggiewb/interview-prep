package java_lang.leetcode.hashtable;
import java.util.*;

/*
https://leetcode.com/problems/group-anagrams/
*/ 

public class GroupAnagrams {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagrams = new HashMap<>();
        for(int i = 0; i < strs.length; i++){
            String currentWord = strs[i];
            char[] wordToSort = strs[i].toCharArray();
            Arrays.sort(wordToSort);
            String sortedWord = Arrays.toString(wordToSort);
            
            if(!anagrams.containsKey(sortedWord)){
                List<String> wordList = new ArrayList<>();
                wordList.add(currentWord);
                anagrams.put(sortedWord, wordList);
            } else {
                anagrams.get(sortedWord).add(currentWord);
            }
        }
        return new ArrayList<>(anagrams.values());
    }  
}
