
int a=1,b=2,c=3,d=4,e=5,h=8,i,j=9,k=10,l=11,m=12,n=13,o=0,p=14,q=15,s=16,z;
float f=-6.978838,g=107.633382;

void setup()                    // run once, when the sketch starts
{
  Serial.begin(57600);           // set up Serial library at 9600 bps
  
    // prints hello with ending line break 
}

void loop()                       // run over and over again  
{
   //if(Serial.available()>0)
 // {
    //char Perintah=Serial.read();
    //if(Perintah == '1')
    //{
     i=1; char data[100];
     while(i=1)
     {
     if(a<20){
      for(int r=0;r<20;r++)
     { 
      String latitude = String(f,6); 
      String longitude = String(g,6); 
      Serial.print(a);
      Serial.print(",");
      Serial.print(b);
      Serial.print(",");
      Serial.print(c);
      Serial.print(",");
      Serial.print(d);
      Serial.print(",");
      Serial.print(e);
      Serial.print(",");
      Serial.print(latitude);
      Serial.print(",");
      Serial.print(longitude);
      Serial.print(",");
      Serial.print(h);
      Serial.print(",");
      Serial.print(j);
      Serial.print(",");
      Serial.print(k);
      Serial.print(",");
      Serial.print(l);
      Serial.print(",");
      Serial.print(m);
      Serial.print(",");
      Serial.print(n);
      Serial.print(",");
      Serial.print(o);
      Serial.print(",");
      Serial.print(p);
      Serial.print(",");
      Serial.print(q);
      Serial.print(",");
      Serial.println(s);
       a=a+1;
       b=b+10;
       c=c+1;
       d=d+1;
       e=e+1;
       f=(float)f+0.000002;
       g=(float)g+0.000002;
       h=h+1;
       j=j+1;
       k=k+1;
       l=l+1;
       m=m+1;
       n=n+1;
       o=o+1;
       p=p+1;
       q=q+1;
       s=s+1;
       delay(1000);
     }
     }else{
      for(int r=20;r>0;r--)
     {       
      String latitude = String(f,6); 
      String longitude = String(g,6); 
      Serial.print(a);
      Serial.print(",");
      Serial.print(b);
      Serial.print(",");
      Serial.print(c);
      Serial.print(",");
      Serial.print(d);
      Serial.print(",");
      Serial.print(e);
      Serial.print(",");
      Serial.print(latitude);
      Serial.print(",");
      Serial.print(longitude);
      Serial.print(",");
      Serial.print(h);
      Serial.print(",");
      Serial.print(j);
      Serial.print(",");
      Serial.print(k);
      Serial.print(",");
      Serial.print(l);
      Serial.print(",");
      Serial.print(m);
      Serial.print(",");
      Serial.print(n);
      Serial.print(",");
      Serial.print(o);
      Serial.print(",");
      Serial.print(p);
      Serial.print(",");
      Serial.print(q);
      Serial.print(",");
      Serial.println(s);
       a=a-1;
       b=b-10;
       c=c-1;
       d=d-1;
       e=e-1;
       f=(float)f+0.000002;
       g=(float)g+0.000002;
       h=h-1;
       j=j-1;
       k=k-1;
       l=l-1;
       m=m-1;
       n=n-1;
       o=o+1;
       p=p-1;
       q=q-1;
       s=s-1;
       delay(1000);
     }
     }
     
     
     //}
    //}
    //if(Perintah=='x')
    //{
      //i=0;
      //Serial.println("Stop");
     // Serial.end();
     // return;
     // delay(1000);
    //}
  }
}
