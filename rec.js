import java.util.Scanner;

/*1- Faça um programa que solicite ao usuario um numero e verifique se ele é positivo, negativo ou zero usando uma estrutura if-else.*/
 
public class Exer01 {
} public static void main(String[] args) {
   Scanner input = new Scanner(System.in);
System.out.println("Informe um núrmero:");
int num input.nextInt();
  }

if (num < 0) {
System.out.println(String.format("O número %d é negativo", num));
} else if (num > 0) {
System.out.println(String.format("0 numero %d é positivo", num));
}
else {
System.out.println (String.format("0 numero informado %d é igual a 0", num));

}
