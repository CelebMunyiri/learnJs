#include<stdio.h>
int main(){
int x,z;
printf("Enter any two prime numbers\n");
scanf("%d%d",&x,&z);
printf("All the prime numbers between the two integers are" );
for(x=2;x<=z;++x){
if(x%!x !=0&&x>0){
    printf("%d",x);
}
}
}