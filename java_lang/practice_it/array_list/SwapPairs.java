
package java_lang.practice_it.array_list;
import java.util.ArrayList;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter10/e2%2DswapPairs
*/ 

public class SwapPairs {
    public static void swapPairs(ArrayList<String> quote){
        for(int i = 0; i < quote.size() - 1; i+=2){
            String temp = quote.get(i);
            quote.set(i, quote.get(i + 1));
            quote.set(i + 1, temp);
        }
    }
}
