import java.util.*;
public class reverse {
    public static  void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the length of the array");
        int len=sc.nextInt();
        int arr[]=new int[len];
       System.out.println("Enter the elements of the array : ");
       for(int i=0;i<len;i++){
        arr[i]=sc.nextInt();
       }
       int revIndex=len-1;
       int temp=0;
       for(int i=0;i<len/2;i++){
        temp=arr[i];
        arr[i]=arr[revIndex];
        arr[revIndex]=temp;
        revIndex--;
       }
       for(int i=0;i<len;i++){
        System.out.println(arr[i]);
       }

    }
    
}
