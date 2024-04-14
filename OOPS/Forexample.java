/* 
   Title: For loop example
   Author: Janani.D.P
   Created Date: 13.04.2024
   Last modified Date: 14.04.2024
   Reviewed By:
   Reviewed Date:
*/
package Forloop;

public class Forexample {
    public static void main(String[] args) {
        for (int i = 10; i >= 1; i--) {
            System.out.print("Value of i:");
            System.out.println(i);
        }

        int a[] = {10, 20, 30, 40, 50};
        // for integer array
        for (int i : a) {
            System.out.print(i + " ");
        }
        System.out.println();
        char ch[] = {'j', 'a', 'v', 'a'};
        for (char c : ch) {
            System.out.print(c + " ");
        }
        System.out.println();
        String s1[] = {"Java", "programming", "learning"};
        // for String array
        for (String s : s1) {
            System.out.print(s + " ");
        }

        
    }
}


