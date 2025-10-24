// #include<iostream>
// using namespace std;
// class Base{
//     public:
//        void virtual getdata(){
//         cout<<"I am from base";
//        }
// };
// class Derived:public Base{
//     public:
//         void getdata(){
//             cout<<"i am from derived";
//         }
// };
// int main(){
//     Base *p;
//     Derived d;
//     p=&d;
//     p->getdata();
// }
#include<iostream>
using namespace std;
class Base{
    public:
       void virtual getdata()=0;
        
};
class Derived:public Base{
    public:
        void getdata(){
            cout<<"i am from derived";
        }
};
int main(){
    Base *p;
    Derived d;
    p=&d;
    p->getdata();
}