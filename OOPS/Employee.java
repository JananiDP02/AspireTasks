/* 
   Title: Employee Details
   Author: Janani.D.P
   Created Date: 02.04.2024
   Last modified Date: 06.04.2024
   Reviewed By:
   Reviewed Date:
*/
import java.util.*;

public class Employee {
	int id;
	String name;
	String department;
	int Deptid;
	String Email;
	double Salary;
	
	public Employee(int id, String name, String department,int Deptid,String Email, double Salary){
		this.id=id;
		this.name=name;
		this.department=department;
		this.Deptid=Deptid;
		this.Email=Email;
		this.Salary=Salary;
	}
	
	public double annualSalary(){
		return Salary*12;
	}
	
	public void details(){
		System.out.println("Employee Details");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Department ID: " + Deptid);
        System.out.println("Email: " + Email);
        System.out.println("Salary: " + Salary);
        System.out.println("Annual Salary: " + annualSalary());
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee emp = new Employee(26, "Janani", "Finance", 13, "janani@gmail.com", 30000);
		emp.details();
		
	}

}
