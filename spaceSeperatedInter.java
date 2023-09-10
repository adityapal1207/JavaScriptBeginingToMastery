import java.util.*;

public class spaceSeperatedInter {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the sze of the array ");
        int len = sc.nextInt();
        int arr[] = new int[len];
        String numbers ="";
        System.out.println("Enter " + len + " array elements : ");
        numbers= sc.nextLine();
        String num[] = numbers.split(" ");
        for (int i = 0; i < len; i++) {
              System.out.println("hi");
            arr[i] = Integer.parseInt(num[i]);
            System.out.println("hi");
        }
        for (int i = 0; i < len; i++) {
            System.out.println(arr[i]);
        }

    }

}





import java.util.*;

public class spaceSeperatedInter {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the sze of the array ");
        int len = sc.nextInt();
        int arr[] = new int[len];
        sc.nextLine();
        
        System.out.println("Enter " + len + " array elements");
String numbers = sc.nextLine();
        String num[] = numbers.split(" ");
        for (int i = 0; i < len; i++) {
              
            arr[i] = Integer.parseInt(num[i]);
            
        }
        for (int i = 0; i < len; i++) {
            System.out.println(arr[i]);
        }
        

    }

}
