import java.util.*;

public class InitializationGuide {
    public static void main(String[] args){
        //Primitive Data Types: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html (byte, short, int, long, float, double, boolean, char)
        //Wrapper Classes: Byte, Short, Integer, Long, Float, Double, Boolean, Character
        //String: https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
        //Math: https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html
        //Number: https://docs.oracle.com/javase/8/docs/api/java/lang/Number.html 
        //Character: https://docs.oracle.com/javase/8/docs/api/java/lang/Character.html

        //Array
        // https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html
        int size = 10;
        int[] nums1Array = new int[size];
        int[] nums2Array = {1, 2, 3};
        int[][] multi1Dimension = new int[size][size];
        String[] word1Array = new String[10];
        String[] word2Array = {"Aggie", "Steven", "Frank"};
        String[][] multi2Dimension = {{"Milk", "Cream"}, {"Chicken", "Beef"}};
        
        //ArrayList
        //https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html
        ArrayList<String> wordArrayList = new ArrayList<>();
        ArrayList<Integer> numArrayList = new ArrayList<>();
        List<Character> charArrayList = Arrays.asList('a', 'b', 'c');

        Collection<Integer> strCollection = new HashSet<>();
        ArrayList<Integer> collection = new ArrayList<>(strCollection);

        //LinkedList
        //https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html
        List<Integer> example1 = new LinkedList<>(Arrays.asList(1, 2));
        List<Character> example2 = new LinkedList<>();
        LinkedList<String> example3 = new LinkedList<>();
        
        ArrayList<Float> floatArrayList = new ArrayList<>();
        LinkedList<Float> example4 = new LinkedList<>(floatArrayList);

        //Set: HashSet and TreeSet flavors
        //https://docs.oracle.com/javase/8/docs/api/java/util/Set.html

        //Map: HashMap and TreeMap flavors
        //https://docs.oracle.com/javase/8/docs/api/java/util/Map.html

    }
    
}
