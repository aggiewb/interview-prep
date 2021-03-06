import java.util.*;

public class InitializationGuide {
    public static void main(String[] args){
        //Array
        int size = 10;
        int[] nums1Array = new int[size];
        int[] nums2Array = {1, 2, 3};
        int[][] multi1Dimension = new int[size][size];
        String[] word1Array = new String[10];
        String[] word2Array = {"Aggie", "Steven", "Frank"};
        String[][] multi2Dimension = {{"Milk", "Cream"}, {"Chicken", "Beef"}};
        
        //ArrayList
        ArrayList<String> wordArrayList = new ArrayList<>();
        ArrayList<Integer> numArrayList = new ArrayList<>();
        List<Character> charArrayList = Arrays.asList('a', 'b', 'c');
        
        Collection<Integer> strCollection = new HashSet<>();
        ArrayList<Integer> collection = new ArrayList<Integer>(strCollection);
    }
    
}
