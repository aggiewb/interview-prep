package java_lang.practice_it.array_list;
import java.util.ArrayList;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter10/e4%2DdoubleList
*/ 

public class DoubleList {
    public static void doubleList(ArrayList<String> words){
        for(int i = 0; i < words.size(); i+=2){
            words.add(i, words.get(i));
        }
    }
}
