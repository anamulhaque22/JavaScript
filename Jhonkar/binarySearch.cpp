#include<iostream>
using namespace std;
void insertionSort(int A[], int n){
    for (int i = 1; i < n; i++)
    {
        int x=A[i];
        int j = i -1;
        while (j>=0 && A[j]>x)
        {
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = x; 
        
    }
    
}
int binarySearch(int A[],int a, int b, int key){
    int middle;
    if (a<=b){
        middle = (a+b)/2;
        if (A[middle] == key){
            return key;
        }else if (A[middle]> key){
            return binarySearch(A, 0, middle-1, key);
        }else{
            return binarySearch(A, middle+1, b, key);
        }
    }
    return 0;
}
int main(){
    int size = 10;
    int x[size] = {2, 20, 10, 5, 15, 12, 9, 7, 1, 3};
    insertionSort(x, size);
    int flag = binarySearch(x, 0, size-1, 6);
    if(flag){
        cout<<"Value is found and the searched value: "<< flag<<endl;
    }else{
        cout<<"the value is not fount"<<endl;
    }

    for (int  i = 0; i < size; i++)
    {
        cout<<x[i]<<" ";
    }
    

    return 0;
}