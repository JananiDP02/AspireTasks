package cons;
import java.util.*;

public class Cons {
    private String customerName;
    private int customerId;
    private String customerCity;

    // Parameterized constructor
    public Cons(String name, int id, String city) {
        this.customerName = name;
        this.customerId = id;
        this.customerCity = city;
    }

    // Default constructor
    public Cons() {
        // Default constructor
    }

    // Getters and Setters
    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerCity() {
        return customerCity;
    }

    public void setCustomerCity(String customerCity) {
        this.customerCity = customerCity;
    }

    
    @Override
    public String toString() {
        return "Customer ID: " + customerId + ", Name: " + customerName + ", City: " + customerCity;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String name, city;
        int id;

        System.out.print("Enter Customer Id : ");
        id = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter Customer Name : ");
        name = sc.nextLine();
        System.out.print("Enter Customer City : ");
        city = sc.nextLine();
        System.out.println();

        Cons c1 = new Cons(); // default constructor invoked
        c1.setCustomerName(name);
        c1.setCustomerId(id);
        c1.setCustomerCity(city);
        System.out.println(c1);

        System.out.print("Enter Customer Id : ");
        id = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter Customer Name : ");
        name = sc.nextLine();
        System.out.print("Enter Customer City : ");
        city = sc.nextLine();
        Cons c2 = new Cons(name, id, city); // parameterized constructor invoked
        System.out.println(c2);
        sc.close();
    }
}

