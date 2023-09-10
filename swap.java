import java.util.*;
class swap{
    public static void main(String args[]){
        int a=11;
        int b=12;
        a ^= b ^= a ^=b ; 
  System.out.println(b);
  System.out.print(a);
    }
}