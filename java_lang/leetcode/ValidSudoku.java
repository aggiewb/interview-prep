package java_lang.leetcode;
import java.util.*;

/*
https://leetcode.com/problems/valid-sudoku/
*/ 

public class ValidSudoku {
    public boolean isValidSudoku(char[][] board){
        int boardSize = 9;
        int squareSize = 3;

        HashSet<Integer>[] rows = new HashSet[boardSize];
        HashSet<Integer>[] cols = new HashSet[boardSize];
        HashSet<Integer>[] boxes = new HashSet[boardSize];

        for(int i = 0; i < boardSize; i++){
            rows[i] = new HashSet<Integer>();
            cols[i] = new HashSet<Integer>();
            boxes[i] = new HashSet<Integer>();
        }

        for(int i = 0; i < boardSize; i++){
            char[] row = board[i];
            for(int j = 0; j < boardSize; j++){
                char square = row[j];
                //0, 3, or 6 for rowOffSet
                int rowOffSet = (i / squareSize) * squareSize;
                //0, 1, or 2 for colOffSet
                int colOffSet = j / squareSize;
                int boxIndex = rowOffSet + colOffSet;

                if(square != '.'){
                    int squareNum = (int) square;

                     //.add() returns false if a value is already present in the HashSet
                    if(!rows[i].add(squareNum) ||
                       !cols[j].add(squareNum) ||
                       !boxes[boxIndex].add(squareNum)){
                           return false;
                    }
                }
            }
        }
        return true;
    }
}
