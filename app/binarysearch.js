(function() 
{

  app = (function()  
   {

   
          Array.prototype.toTwenty = function()
          {
               
              for(var i = 1; i <= 20; i++)
              {
                  this.push(i);
              }
               return this;
          },
           
          Array.prototype.toForty = function()
          {
               
              for(var i = 2; i <= 40; i+=2)
              {
                  this.push(i);
              }
               return this;
          },

          Array.prototype.toOneThousand = function()
          {
               
              for(var i = 10; i <= 1000; i+=10)
              {
                  this.push(i);
              }
               return this;
          },
            Array.prototype.search = function(targetValue)
           {
               
                var min = 0;
                var max = this.length - 1;
                var index;
                var count=0;
            
                var length=this.length;
                console.log(this);
                            while(min<=max)
                            {
                               index = max;
                               if(this[max]===targetValue)
                                {
                                    return {count,index,length};
                                }
                                index=(min + max) / 2 | 0;
                                if(this[index]===targetValue)
                                {
                                    return {count,index,length};
                                }

                                else if(this[index]<targetValue)
                                {
                                   min=index+1; 
                                }
                                else
                                {
                                    max=index-1;
                                }
                                count++;
                            }

                  index=-1;
                  count=0;
           return {count,index,length};
         }

  })();

  module.exports = app;

}).call(this);


