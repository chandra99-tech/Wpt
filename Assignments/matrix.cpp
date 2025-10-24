// #include<iostream>
// using namespace std;
// int main(){
//     int a[3][3],r,c;
//     cout<<"enter element of an array\n";
//     for(r=0;r<3;r++){
//         for(c=0;c<3;c++){
//             cin>>a[r][c];
//         }
    
//     }
//     for(r=0;r<3;r++){
//         for(c=0;c<3;c++){
//             cout<<a[r][c]<<"\t";
//         }
//         cout<<"\n";
//     }
// }

#include<iostream>
using namespace std;
int main(){
    int a[3][3],b[3][3],z[3][3],r,c;
    cout<<"enter element of an array\n";
    for(r=0;r<3;r++){
        for(c=0;c<3;c++){
            cin>>a[r][c];
        }
    
    }
    for(r=0;r<3;r++){
        for(c=0;c<3;c++){
            
            cin>>b[r][c];

        }
       
    }
    for(r=0;r<3;r++){
        for(c=0;c<3;c++){
            
         z[r][c]=a[r][c]+b[r][c];   

        }
       cout<<"\n";
    }
    for(r=0;r<3;r++){
        for(c=0;c<3;c++){
            
            cout<<z[r][c]<<"\t";

        }
        cout<<"\n";

       
    }
    
    
    


}