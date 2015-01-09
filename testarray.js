    function maker(arr){
    return {
    sum:function(arr)
        {
        var sum =0;
        for(var i=0;i<arr.length;i++)
           {
            sum+=arr[i];
           }
           return sum;
         },

         insert:function(arr,item,index)
         {
          for(var i= arr.length;i>index;i--)
           {
            arr[i]=arr[i-1];
           }
           arr[index]=item;
           console.log("after insert"); 
          console.log(arr);
          },

         append: function(arr,item)
         {
         arr[arr.length]=item;
         console.log("After append");        
         console.log(arr);
          },

         prepend:function(arr,item)
         {
         for(var i=arr.length;i>0;i--)
            {
               arr[i]=arr[i-1];
            }
         arr[0]=item;
         console.log("After prepend"); 
              console.log(arr);
         },

         concatarray:function(arr1,arr2)
         {
            var j=0;
            for(var i=arr1.length;j<arr2.length;i++)
            {
                arr1[i]=arr2[j];
                j++;
            }
             console.log("After concat");
        
              console.log(arr1);
         },
         square:function(arr)
         {
            for(var i=0;i<arr.length;i++)
            {
                arr[i]=arr[i]*arr[i];
            }
            console.log("After square"); 
              console.log(arr);
         },

         findAllOccurance:function(arr,item)
         {
            var j=0;
            var occurance=[];
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]===item)
                {
                    occurance[j]=i;
                    j++;
                }
            }
              console.log("All occurance of item",item);
        
              console.log(occurance);

         },
         indexOf:function(arr,item)
         {
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]===item)
                {
                    return i;
                }
            }
         }

         
    }
}


    var array = maker();
    var sum= array.sum([10,20,30]);
    console.log("sum=",sum);
    arr=[10,20,25];
    array.insert(arr,15,1);
     arr=[10,20,25];
    array.append(arr,15);
    array.prepend(arr,5);
    arr1=[1,2,3,1,1];
    arr2=[4,5,6];
    array.concatarray( arr1, arr2);
    array.square( arr1);
    array.findAllOccurance( arr1,1);
    var index=array.indexOf(arr1,3);