class Person {
    String name;
    String dept;

    public Person(String name, String dept) {
        this.name = name;
        this.dept = dept;
    }

    public static void main(String[] args) {
        Student student = new Student("Janani", "ECE", 26);
        System.out.println("Student Information:");
        student.display();
    }
}

class Student extends Person {
    int studentId;

    public Student(String name, String dept, int studentId) {
        super(name, dept);
        this.studentId = studentId;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Department: " + dept);
        System.out.println("Student ID: " + studentId);
    }
}
